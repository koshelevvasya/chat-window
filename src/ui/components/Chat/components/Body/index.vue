<template>
  <div>
    <div class="chat-messages">
      <connecting-input
        v-if="!isConnected && !connectingInProcess"
        :errorName="errorName"
        @update="updateName"
        @connect="$emit('connect')" />
      <messages-container
        v-if="isConnected"/>
      <connecting-in-process
        v-if="connectingInProcess" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ConnectingInput from './ConnectingInput.vue'
import MessagesContainer from './Messages.vue'
import ConnectingInProcess from './ConnectingInProcess.vue'

const ChatBodyProps = Vue.extend({
  props: {
    errorName: {
      type: Boolean,
      required: true
    }
  }
})

@Component({
  components: {
    ConnectingInput,
    MessagesContainer,
    ConnectingInProcess
  }
})
export default class ChatBody extends ChatBodyProps {
  protected name = ''

  get isConnected () {
    return this.$store.getters['Chat/isConnected']
  }

  get connectingInProcess () {
    return this.$store.getters['Chat/connectingInProcess']
  }

  protected updateName (name: string) {
    this.$emit('update-name', name)
  }
}
</script>

<style scoped>
.chat-messages {
  height: 325px;
  display: flex;
}
</style>
