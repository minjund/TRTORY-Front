<template>
  <!--  <div class="ml-6 mr-6">-->
  <!--    <div-->
  <!--      id="custom-controls-gallery"-->
  <!--      class="relative w-full"-->
  <!--      data-carousel="slide">-->
  <!--      &lt;!&ndash; Carousel wrapper &ndash;&gt;-->
  <!--      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">-->
  <!--        &lt;!&ndash; Item 1 &ndash;&gt;-->
  <!--        <div-->
  <!--          class="hidden duration-1000 ease-in-out"-->
  <!--          data-carousel-item="active">-->
  <!--          <img-->
  <!--            src="/images/trpgImg02.webp"-->
  <!--            class="absolute left-1/2 top-1/2 block max-w-full -translate-x-1/2 -translate-y-1/2"-->
  <!--            alt="" />-->
  <!--        </div>-->
  <!--        &lt;!&ndash; Item 2 &ndash;&gt;-->
  <!--        <div class="hidden duration-1000 ease-in-out" data-carousel-item>-->
  <!--          <img-->
  <!--            src="/images/trpgImg01.jpeg"-->
  <!--            class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"-->
  <!--            alt="" />-->
  <!--        </div>-->
  <!--        &lt;!&ndash; Item 3 &ndash;&gt;-->
  <!--        <div class="hidden duration-1000 ease-in-out" data-carousel-item>-->
  <!--          <img-->
  <!--            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"-->
  <!--            class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"-->
  <!--            alt="" />-->
  <!--        </div>-->
  <!--        &lt;!&ndash; Item 4 &ndash;&gt;-->
  <!--        <div class="hidden duration-1000 ease-in-out" data-carousel-item>-->
  <!--          <img-->
  <!--            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"-->
  <!--            class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"-->
  <!--            alt="" />-->
  <!--        </div>-->
  <!--        &lt;!&ndash; Item 5 &ndash;&gt;-->
  <!--        <div class="hidden duration-1000 ease-in-out" data-carousel-item>-->
  <!--          <img-->
  <!--            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"-->
  <!--            class="absolute left-1/2 top-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2"-->
  <!--            alt="" />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="flex items-center justify-center pt-4">-->
  <!--        <button-->
  <!--          type="button"-->
  <!--          class="group mr-4 flex h-full cursor-pointer items-center justify-center focus:outline-none"-->
  <!--          data-carousel-prev>-->
  <!--          <span-->
  <!--            class="text-gray-400 hover:text-gray-900 group-focus:text-gray-900 dark:hover:text-white dark:group-focus:text-white">-->
  <!--            <svg-->
  <!--              aria-hidden="true"-->
  <!--              class="h-6 w-6"-->
  <!--              fill="currentColor"-->
  <!--              viewBox="0 0 20 20"-->
  <!--              xmlns="http://www.w3.org/2000/svg">-->
  <!--              <path-->
  <!--                fill-rule="evenodd"-->
  <!--                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"-->
  <!--                clip-rule="evenodd"></path>-->
  <!--            </svg>-->
  <!--            <span class="sr-only">Previous</span>-->
  <!--          </span>-->
  <!--        </button>-->
  <!--        <button-->
  <!--          type="button"-->
  <!--          class="group flex h-full cursor-pointer items-center justify-center focus:outline-none"-->
  <!--          data-carousel-next>-->
  <!--          <span-->
  <!--            class="text-gray-400 hover:text-gray-900 group-focus:text-gray-900 dark:hover:text-white dark:group-focus:text-white">-->
  <!--            <svg-->
  <!--              aria-hidden="true"-->
  <!--              class="h-6 w-6"-->
  <!--              fill="currentColor"-->
  <!--              viewBox="0 0 20 20"-->
  <!--              xmlns="http://www.w3.org/2000/svg">-->
  <!--              <path-->
  <!--                fill-rule="evenodd"-->
  <!--                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"-->
  <!--                clip-rule="evenodd"></path>-->
  <!--            </svg>-->
  <!--            <span class="sr-only">Next</span>-->
  <!--          </span>-->
  <!--        </button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <org-scenario-list :show-detail-yn="false"></org-scenario-list>
</template>
<script setup></script>
<style scoped></style>
