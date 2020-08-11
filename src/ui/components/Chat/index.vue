<template>
  <div class="chat">
    <div class="p-2">
      <chat-body
        :errorName="errorName"
        @update-name="updateName"
        @connect="connect" />
    </div>
    <chat-footer
      @connect="connect"
      @send-message="sendMessage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import ChatBody from './components/Body/index.vue'
import ChatFooter from './components/Footer/index.vue'

import MessageModel from './../../../application/models/MessageModel'

@Component({
  components: {
    ChatBody,
    ChatFooter
  }
})
export default class Chat extends Vue {
  protected name = ''
  protected errorName = false

  protected updateName (name: string) {
    this.name = name

    if (this.errorName && name) {
      this.errorName = false
    }
  }

  protected connect () {
    if (!this.name) {
      this.errorName = true
      return
    }

    this.$store.dispatch('Chat/connectByName', this.name)
  }

  protected sendMessage (messageText: string) {
    const message = new MessageModel({
      message: messageText,
      name: this.name
    })

    this.$store.dispatch('Chat/sendMessage', message)
  }
}
</script>

<style scoped>
.chat {
  width: 300px;
  border-radius: 10px;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
  background-color: white;
}
</style>
