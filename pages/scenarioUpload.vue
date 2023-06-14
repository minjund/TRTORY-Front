<template>
  <div class="container mt-6">
    <label
      for="first_name"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >썸네일러
    </label>
    <div class="flex items-center justify-center">
      <label
        for="dropzone-file"
        class="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            aria-hidden="true"
            class="mb-3 h-10 w-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>

    <form class="mt-2">
      <div class="mb-6">
        <label
          for="gameType"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >게임 종류</label
        >
        <input
          type="text"
          id="gameType"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >시나리오 내용(마크다운 에디터로)</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >사용되는 룰</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >필요한 인원 수</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >키퍼링 난이도</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >키퍼링 난이도</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >키퍼링 난이도</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="이 게임은 아주 좋은 게임 입니다."
          required />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >제작자의 주의 사항</label
        >
        <input
          type="password"
          id="password"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="•••••••••"
          required />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >Confirm password</label
        >
        <input
          type="password"
          id="confirm_password"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="•••••••••"
          required />
      </div>
      <div class="mb-6 flex items-start">
        <div class="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            required />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >I agree with the
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
            >terms and conditions</a
          >.</label
        >
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
        Submit
      </button>
    </form>
  </div>
</template>
<script setup></script>

<style scoped></style>
