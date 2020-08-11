<template>
  <div id="app">
    <chat />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Chat } from './components'

@Component({
  components: {
    Chat
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';
  @import '~bootstrap/dist/css/bootstrap.min.css';
</style>
