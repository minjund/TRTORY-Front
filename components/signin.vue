<template>
  <form class="container mt-8 w-72 place-content-center">
    <div class="mb-6">
      <label
        for="id"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >id</label
      >
      <input
        type="text"
        v-model="userId"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="name@flowbite.com"
        required />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >패스워드</label
      >
      <input
        type="password"
        v-model="userPw"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required />
    </div>
    <button
      type="submit"
      @click="signInCheck()"
      class="mb-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      로그인 하기
    </button>
    <button
      @click="$emit('signupClick')"
      class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 dark:hover:bg-blue-700">
      회원가입 하기
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

let paramsQuery = ref({})
const userId = ref('')
const userPw = ref('')

async function signInCheck() {
  try {
    paramsQuery.value = {
      userId: userId.value,
      userPw: userPw.value,
    }
    console.log(paramsQuery.value)
    alert('awd')
    const result = await $fetch(
      //'https://dbf4-121-138-48-50.ngrok-free.app/account/signIn',
      'localhost:8080/account/signIn',
      {
        method: 'get',
        params: paramsQuery.value,
      }
    )

    if (result) {
      //this.$router.push('/')
      alert('로그인 성공')
    } else {
      alert('회원 정보가 없습니다. 회원가입 해주세요')
    }
  } catch (err) {
    console.error('Axios 에러:', err)
    if (err.response) {
      // 서버가 응답한 경우 (상태 코드 확인)
      console.error('응답 데이터:', err.response.data)
      console.error('상태 코드:', err.response.status)
    } else if (err.request) {
      // 요청이 전송되지 않은 경우
      console.error('요청이 전송되지 않음')
    } else {
      console.error('에러 메시지:', err.message)
    }
    alert('에러난다 페이지 전환 왜 되는거지 이거')
  }
}
</script>

<style scoped></style>
