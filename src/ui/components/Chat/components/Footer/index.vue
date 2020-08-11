<template>
  <div class="chat-footer">
    <connecting-button
      v-if="!isConnected && !connectingInProcess"
      @click="$emit('connect')" />
    <connecting-in-process
      v-if="connectingInProcess"/>
    <message-input
      v-if="isConnected"
      @send-message="sendMessage" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ConnectingButton from './ConnectingButton.vue'
import ConnectingInProcess from './ConnectingInProcess.vue'
import MessageInput from './MessageInput.vue'

@Component({
  components: {
    ConnectingButton,
    ConnectingInProcess,
    MessageInput
  }
})
export default class ChatFooter extends Vue {
  get isConnected () {
    return this.$store.getters['Chat/isConnected']
  }

  get connectingInProcess () {
    return this.$store.getters['Chat/connectingInProcess']
  }

  protected sendMessage (message: string) {
    return this.$emit('send-message', message)
  }
}
</script>

<style scoped>
.chat-footer {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #f0f3f5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
