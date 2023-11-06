<template>
  <org-account-signin
    v-if="!isLogin"
    @loginClick="loginClick"></org-account-signin>
  <org-account-signup
    v-if="isLogin"
    @loginClick="loginClick"></org-account-signup>
</template>

<script setup>
import { ref } from 'vue'
const isLogin = ref(false)
function loginClick() {
  isLogin.value = !isLogin.value
}
</script>

<style scoped></style>
