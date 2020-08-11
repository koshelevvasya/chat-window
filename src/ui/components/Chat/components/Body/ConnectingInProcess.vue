<template>
  <div class="welcome w-100 text-center">
    <div v-if="tooLongConnection" class="" style="font-size: 14px;">
      <span>Соединение выполняется дольше обычного, перезагрузите страницу и попробуйте снова или обратитесь к администратору</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class ChatConnectingInput extends Vue {
  get tooLongConnection (): boolean {
    return this.$store.getters['Chat/tooLongConnection']
  }
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
