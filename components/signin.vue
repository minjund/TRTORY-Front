<template>
  <form class="container mt-8 w-72 place-content-center">
    <div class="mb-6">
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >id</label
      >
      <input
        type="email"
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
    <button
      type="submit"
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

<script setup></script>

<style scoped></style>
