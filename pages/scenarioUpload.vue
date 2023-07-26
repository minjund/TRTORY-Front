<template>
  <div class="container mt-6">
    <ol
      class="mb-5 flex items-center justify-center space-x-2 rounded-lg text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:text-base">
      <li class="flex items-center text-blue-600 dark:text-blue-500">
        <span
          class="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-600 text-xs dark:border-blue-500">
          1
        </span>
        게임 설정
        <svg
          class="ml-2 h-3 w-3 sm:ml-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4" />
        </svg>
      </li>
      <li class="flex items-center">
        <span
          class="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
          2
        </span>
        게임
        <span class="hidden sm:ml-2 sm:inline-flex">내용 작성</span>
        <svg
          class="ml-2 h-3 w-3 sm:ml-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4" />
        </svg>
      </li>
      <li class="flex items-center">
        <span
          class="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
          3
        </span>
        작성 내용 확인
      </li>
    </ol>

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
          placeholder="게임 종류"
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
          >플레이 난이도</label
        >
        <div class="flex items-center space-x-1">
          <svg
            class="h-4 w-4"
            v-for="(star, index) in stars"
            :key="index"
            :class="
              isStarSelected(index)
                ? 'text-yellow-300'
                : 'text-gray-300 dark:text-gray-500'
            "
            @click="toggleStar(index)"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >키퍼링 난이도</label
        >
        <div class="flex items-center space-x-1">
          <svg
            class="h-4 w-4"
            v-for="(star, index) in stars"
            :key="index"
            :class="
              isKeeperSelect(index)
                ? 'text-yellow-300'
                : 'text-gray-300 dark:text-gray-500'
            "
            @click="keeperToggle(index)"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >예상 플레이 시간</label
        >
        <input
          type="text"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="예상 플레이 시간"
          required />
      </div>
      <div class="mb-6">
        <label
          for="confirm_password"
          class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >추천 기능</label
        >
        <input
          type="text"
          id="confirm_password"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder=""
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
          >이 시나리오는
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
            >무료 배포</a
          >에 동의 합니다.</label
        >
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
        다음 단계
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const stars = ref(5)
const selectedStars = ref(0)
const keeperingLevel = ref(0)
function isStarSelected(index) {
  return index < this.selectedStars
}
// 별표 클릭 이벤트를 처리합니다.
function toggleStar(index) {
  this.selectedStars = index + 1
}
function isKeeperSelect(index) {
  return index < this.keeperingLevel
}
// 별표 클릭 이벤트를 처리합니다.

function keeperToggle(index) {
  this.keeperingLevel = index + 1
}
</script>

<style scoped></style>
