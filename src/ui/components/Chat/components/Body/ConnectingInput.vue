<template>
  <div class="welcome w-100">
    <div class="" style="font-size: 14px;">
      <span>Представьтесь, пожалуйста</span>
    </div>
    <div>
      <input
        type="text"
        class="form-control w-100 name"
        :class="{ 'is-invalid' : errorName }"
        maxlength="50"
        @change="$emit('update', $event.target.value)"
        @keypress="$emit('update', $event.target.value)"
        @keyup.enter="$emit('connect')"
        placeholder="Ваше имя" >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const ChatConnectingInputProps = Vue.extend({
  props: {
    errorName: {
      type: Boolean,
      required: true
    }
  }
})

@Component({})
export default class ChatConnectingInput extends ChatConnectingInputProps {
}
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name {
  font-size: 14px;
}
</style>
