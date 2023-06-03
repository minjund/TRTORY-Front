<template>
  <div class="container">
    <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">전체</button>
      <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">신작 시나리오</button>
      <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">인기 시나리오</button>
      <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">티알 추천 시나리오</button>
      <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">룰북 리스트</button>
       <nuxt-link v-if="showDetailYn" to="/scenarioUpload" class="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">시나리오 올리기</nuxt-link>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <figure class="relative group transition-all duration-300 cursor-pointer filter">
          <a href="#">
            <img class="rounded-lg h-auto" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
          </a>
          <figcaption class="hidden absolute group-hover:block px-4 text-lg text-white bottom-0 bg-black">
            <p>아 슬라이딩 넣어줘 아래서 위로</p>
          </figcaption>
        </figure>
        <figure class="relative group transition-all duration-300 cursor-pointer filter">
          <a href="#">
            <img class="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
          </a>
            <figcaption class="hidden absolute group-hover:block px-4 text-lg text-white bottom-6 bg-gray-900">
              <p>Do you want to get notified when a new component is added to Flowbite?</p>
            </figcaption>
        </figure>
        <figure class="relative group transition-all duration-300 cursor-pointer filter">
          <a href="#">
            <img class="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
          </a>
          <figcaption class="hidden absolute group-hover:block px-4 text-lg text-white bottom-6 bg-gray-900">
            <p>Do you want to get notified when a new component is added to Flowbite?</p>
          </figcaption>
        </figure>
        <figure class="relative group transition-all duration-300 cursor-pointer filter">
          <a href="#">
            <img class="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description">
          </a>
          <figcaption class="hidden absolute group-hover:block px-4 text-lg text-white bottom-6 bg-gray-900">
            <p>Do you want to get notified when a new component is added to Flowbite?</p>
          </figcaption>
        </figure>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="">
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showDetailYn: {
    type : Boolean,
    default (){
      return false
    }
  }
})
</script>

<style scoped>

</style>