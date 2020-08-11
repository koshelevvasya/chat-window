import { ActionContext } from 'vuex'
import { chatService } from './../../../application'
import MessageModel from '../../../application/models/MessageModel'
import { RootState, ChatState } from './types'

const state: ChatState = {
  connectingInProcess: false,
  tooLongConnection: false,
  connected: false,
  messages: []
}

const getters = {
  connectingInProcess: (state: ChatState) => state.connectingInProcess,
  tooLongConnection: (state: ChatState) => state.tooLongConnection,
  isConnected: (state: ChatState) => state.connected,
  messages: (state: ChatState) => state.messages
}

const actions = {
  connectByName (context: ActionContext<ChatState, RootState>, name: string) {
    context.commit('connect')

    chatService.connectByName(name, () => {
      context.dispatch('connectIsOpened')
    })
    setTimeout(() => {
      context.dispatch('checkConnection')
    }, 3000)
  },

  checkConnection (context: ActionContext<ChatState, RootState>) {
    if (state.connectingInProcess) {
      context.commit('tooLongConnection')
    }
  },

  connectIsOpened (context: ActionContext<ChatState, RootState>) {
    context.commit('connectIsOpened')
    context.dispatch('handleMessages')
  },

  sendMessage (context: ActionContext<ChatState, RootState>, message: MessageModel) {
    chatService.sendMessage(message)
  },

  handleMessages (context: ActionContext<ChatState, RootState>) {
    chatService.handleMessage((message: MessageModel) => {
      context.dispatch('onMessage', message)
    })
  },

  onMessage (context: ActionContext<ChatState, RootState>, message: MessageModel) {
    context.commit('addMessage', message)
  }
}

const mutations = {
  connect (context: ActionContext<ChatState, RootState>) {
    state.connected = false
    state.connectingInProcess = true
  },
  tooLongConnection (context: ActionContext<ChatState, RootState>) {
    state.tooLongConnection = true
  },
  connectIsOpened (context: ActionContext<ChatState, RootState>) {
    state.connected = true
    state.connectingInProcess = false
    state.tooLongConnection = false
  },
  addMessage (context: ActionContext<ChatState, RootState>, message: MessageModel) {
    state.messages.push(message)
  }
}

const chatModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default chatModule
