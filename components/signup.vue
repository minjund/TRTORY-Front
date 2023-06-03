<template>
  <form class="container mt-8 place-content-center w-72">
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
      <input type="email" id="email" class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">패스워드</label>
      <input type="password" id="password" class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
    </div>
    <div class="mb-6">
      <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">패스워드 확인</label>
      <input type="password" id="repeat-password" class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
    </div>
    <div class="mb-6">
      <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">디스코드 계정</label>
      <input type="password" id="repeat-password" class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
    </div>
<!--    <div class="mb-6">-->
<!--      <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일 인증 코드</label>-->
<!--      <input type="password" id="repeat-password" class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>-->
<!--    </div>-->
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
      </div>
      <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">아 <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">이용약관</a> 이거 동의 하면 뭐 좋은데 안해도 됨</label>
    </div>
    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6">회원가입 하기</button>
    <button @click="$emit('signupClick')" class="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700">로그인 하러 가기</button>
  </form>
</template>

<script setup>
</script>

<style scoped>

</style>