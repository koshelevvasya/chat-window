<template>
  <button class="btn btn-light m-2 w-100" @click="$emit('click')">Присоединиться</button>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class ChatConnectingButton extends Vue {
}
</script>

<style scoped>
</style>
