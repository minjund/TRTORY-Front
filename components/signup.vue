<template>
  <form class="container mt-8 w-72 place-content-center">
    <div class="mb-6">
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >ID</label
      >
      <input
        type="text"
        v-model="userId"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required />
    </div>
    <div class="mb-6">
      <label
        for="repeat-password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >패스워드 확인</label
      >
      <input
        type="password"
        v-model="userPw"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required />
    </div>
    <div class="mb-6">
      <label
        for="repeat-password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >닉네임</label
      >
      <input
        type="text"
        v-model="userNickname"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required />
    </div>
    <div class="mb-6">
      <label
        for="repeat-password"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >디스코드 계정</label
      >
      <input
        type="text"
        v-model="userDiscordId"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500" />
    </div>
    <div class="mb-6 flex items-start">
      <div class="flex h-5 items-center">
        <input
          id="terms"
          type="checkbox"
          value=""
          class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
          required />
      </div>
      <label
        for="terms"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >티알토리
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
          >이용약관</a
        >
      </label>
    </div>
    <button
      type="submit"
      @click="signup()"
      class="mb-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      회원가입 하기
    </button>
    <button
      @click="$emit('loginClick')"
      class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 dark:hover:bg-blue-700">
      로그인 하러 가기
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
let paramsQuery = ref({})
let userId = ref('')
let userPw = ref('')
let userDiscordId = ref('')
let userNickname = ref('')

async function signup() {
  try {
    paramsQuery.value = {
      userId: userId.value,
      userPw: userPw.value,
      userDiscordId: userDiscordId.value,
      userNickname: userNickname.value,
    }
    await $fetch('http://localhost:8080/account/signup', {
      method: 'post',
      body: paramsQuery.value,
    }).then((data) => {
      // 데이터 처리 로직
      alert(data)
      // Vue Router의 push 메서드를 사용하여 페이지 이동
      alert(data == 100 ? '회원가입 되었습니다.' : '회원가입 안되었습니다.')
    })
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
  }
}
</script>

<style scoped></style>
