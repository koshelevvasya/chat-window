<template>
  <div :class="message.getType() + '-message'">
    <div :class="message.getType() + '-message-header'">
      {{ message.getSenderName() }}, {{ message.getCreated() }}
    </div>
    <div :class="message.getType() + '-message-body'">
      {{ message.getMessage() }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MessageModel from './../../../../../application/models/MessageModel'

const ChatMessageProps = Vue.extend({
  props: {
    message: {
      type: MessageModel,
      required: true
    }
  }
})

@Component({})
export default class ChatMessage extends ChatMessageProps {
}
</script>

<style scoped>
.input-message {
  display: flex;
  flex-direction: column;
}
.incoming-message-header {
  font-size: 12px;
  margin-top: 12px;
}
.incoming-message-body {
  font-size: 14px;
  padding: 8px;
  background-color: #f0f3f5;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
}
.outgoing-message {
  display: flex;
  flex-direction: column;
}
.outgoing-message-header {
  font-size: 12px;
  text-align: right;
  margin-top: 12px;
}
.outgoing-message-body {
  font-size: 14px;
  padding: 8px;
  background-color: #DEEBF3;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.service-message {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #6c757d!important
}
.service-message-header {
  display: none;
}
.service-message-body {
  font-size: 12px;
}
</style>
