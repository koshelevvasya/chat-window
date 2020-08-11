<template>
  <div class="chat-messages w-100" :class="messages.length ? 'messages' : 'empty'" ref="messagesList">
    <div v-if="!messages.length">
      <span>Сообщений ещё нет</span>
    </div>
    <template v-else v-for="(message, index) in messages">
      <message :key="index" :message="message" />
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import MessageModel from './../../../../../application/models/MessageModel'
import Message from './Message.vue'

@Component({
  components: {
    Message
  }
})
export default class ChatMessages extends Vue {
  get messages (): MessageModel[] {
    return this.$store.getters['Chat/messages']
  }

  @Watch('messages')
  protected onMessagesChange () {
    this.$nextTick(() => {
      this.scrollToBottom()
    })
  }

  protected scrollToBottom () {
    if (this.$refs.messagesList) {
      const element: any = this.$refs.messagesList
      const { scrollHeight } = element
      element.scrollTop = scrollHeight
    }
  }
}
</script>

<style scoped>
.chat-messages {
  height: 325px;
  display: flex;
}
.chat-messages.empty {
  justify-content: center;
  align-items: center;
  color: #888888;
}
.chat-messages.messages {
  flex-direction: column;
  overflow: auto;
}
.chat-messages.messages::-webkit-scrollbar {
  width: 2px;
}
</style>
