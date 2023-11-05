<template>
  <temp-account-temp
    @accountSuccessCheck="accountSuccessCheck"></temp-account-temp>
</template>

<script setup>
const router = useRouter()
function accountSuccessCheck(result) {
  alert('page 지나감')
  if (result == 102) {
    router.push('/main')
  }
}
</script>

<style scoped></style>
