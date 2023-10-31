<template>
  <signin v-if="!isLogin" @loginClick="loginClick"></signin>
  <signup v-if="isLogin" @loginClick="loginClick"></signup>
</template>

<script setup>
import { ref } from 'vue'
const isLogin = ref(false)
function loginClick() {
  isLogin.value = !isLogin.value
}
</script>

<style scoped></style>
