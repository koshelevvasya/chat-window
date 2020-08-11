<template>
  <div class="welcome w-100 text-center">
    <div v-if="tooLongConnection" class="" style="font-size: 14px;">
      <span>Соединение выполняется дольше обычного, перезагрузите страницу и попробуйте снова или обратитесь к администратору</span>
      <div v-if="webSocketConnectionURL" class="pt-2">{{ webSocketConnectionURL }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({})
export default class ChatConnectingInput extends Vue {
  protected webSocketConnectionURL = ''

  get tooLongConnection (): boolean {
    return this.$store.getters['Chat/tooLongConnection']
  }

  @Watch('tooLongConnection')
  protected getWebSocketConnectionURL () {
    this.$store.dispatch('Chat/getWebSocketConnectionURL')
      .then((url: string) => {
        this.webSocketConnectionURL = url
      })
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
