<template>
  <form class="container mt-8 w-72 place-content-center">
    <div class="mb-6">
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >이메일</label
      >
      <input
        type="email"
        id="email"
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
        id="password"
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
        id="repeat-password"
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
        type="password"
        id="repeat-password"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required />
    </div>
    <!--    <div class="mb-6">-->
    <!--      <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일 인증 코드</label>-->
    <!--      <input type="password" id="repeat-password" class="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>-->
    <!--    </div>-->
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
        >아
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
          >이용약관</a
        >
        이거 동의 하면 뭐 좋은데 안해도 됨</label
      >
    </div>
    <button
      type="submit"
      class="mb-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      회원가입 하기
    </button>
    <button
      @click="$emit('signupClick')"
      class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 dark:hover:bg-blue-700">
      로그인 하러 가기
    </button>
  </form>
</template>

<script setup></script>

<style scoped></style>
