<template>
  <org-account-signin @signInCheck="loginClick"></org-account-signin>
</template>

<script setup>
import { ref } from 'vue'
const isLogin = ref(false)
function loginClick(result) {
  alert('temp 지나감' + result)
  if (result == 102) {
    //main화면으로 이동
    this.$emit('accountSuccessCheck', 102)
  } else if (result == 100) {
    isLogin.value = false
  } else {
    isLogin.value = !isLogin.value
  }
}
</script>

<style scoped></style>
