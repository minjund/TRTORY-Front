<template>
  <signin v-if="!isSingup" @signupClick="signupClick"></signin>
  <signup v-if="isSingup" @signupClick="signupClick"></signup>
</template>

<script setup>
import { ref } from 'vue'
const isSingup = ref(false)
function signupClick() {
  isSingup.value = !isSingup.value
}
</script>

<style scoped></style>
