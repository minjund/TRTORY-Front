<template>
  <div class="container">
    <div class="flex flex-wrap items-center justify-center py-4 md:py-8">
      <button
        type="button"
        class="mb-3 mr-3 rounded-full border border-blue-600 bg-white px-5 py-2.5 text-center text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
        전체
      </button>
      <button
        type="button"
        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">
        신작 시나리오
      </button>
      <button
        type="button"
        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">
        인기 시나리오
      </button>
      <button
        type="button"
        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">
        티알 추천 시나리오
      </button>
      <button
        type="button"
        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">
        룰북 리스트
      </button>
      <nuxt-link
        v-if="showDetailYn"
        to="/scenarioUpload"
        class="ml-auto mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >시나리오 올리기</nuxt-link
      >
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <figure
        class="group relative cursor-pointer filter transition-all duration-300">
        <a href="#">
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description" />
        </a>
        <figcaption
          class="absolute bottom-0 hidden bg-black px-4 text-lg text-white group-hover:block">
          <p>아 슬라이딩 넣어줘 아래서 위로</p>
        </figcaption>
      </figure>
      <figure
        class="group relative cursor-pointer filter transition-all duration-300">
        <a href="#">
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description" />
        </a>
        <figcaption
          class="absolute bottom-6 hidden bg-gray-900 px-4 text-lg text-white group-hover:block">
          <p>
            Do you want to get notified when a new component is added to
            Flowbite?
          </p>
        </figcaption>
      </figure>
      <figure
        class="group relative cursor-pointer filter transition-all duration-300">
        <a href="#">
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description" />
        </a>
        <figcaption
          class="absolute bottom-6 hidden bg-gray-900 px-4 text-lg text-white group-hover:block">
          <p>
            Do you want to get notified when a new component is added to
            Flowbite?
          </p>
        </figcaption>
      </figure>
      <figure
        class="group relative cursor-pointer filter transition-all duration-300">
        <a href="#">
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description" />
        </a>
        <figcaption
          class="absolute bottom-6 hidden bg-gray-900 px-4 text-lg text-white group-hover:block">
          <p>
            Do you want to get notified when a new component is added to
            Flowbite?
          </p>
        </figcaption>
      </figure>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt="" />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showDetailYn: {
    type: Boolean,
    default() {
      return false
    },
  },
})
</script>

<style scoped></style>
