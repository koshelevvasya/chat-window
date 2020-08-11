<template>
  <div class="message-input-container">
    <div class="message-textarea">
      <textarea
        class="message"
        v-model="message"
        ref="messageTextArea"
        placeholder="Сообщение..."
        @keydown.enter.exact.prevent
        @keyup.enter.exact="sendMessage"></textarea>
    </div>
    <div class="message-button">
      <i class="fa fa-send send-button" @click="sendMessage" :class="{'text-muted': !message}"></i>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class ChatMessageInput extends Vue {
  protected message = ''

  protected mounted () {
    this.$nextTick(() => {
      (this.$refs.messageTextArea as any).focus()
    })
  }

  protected sendMessage () {
    if (!this.message.trim()) {
      return false
    }

    this.$emit('send-message', this.message.trim())
    this.message = ''
  }
}
</script>

<style scoped>
.message-input-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #f0f3f5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.message-textarea {
  width: 100%;
  padding: 4px 0px 4px 4px;
}
.message-button {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  display: block;
  width: 100%;
  height: 100%;
  padding: .375rem .75rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  overflow: auto;
  resize: none;
  box-sizing: border-box;
}
.message:focus {
  outline:none;
}
.send-button {
  cursor: pointer;
}
</style>
