<template>
  <div>
    <scenario-list :show-detail-yn="true"></scenario-list>
  </div>
  <!--  <div class="relative left-5 top-80 mx-auto">-->
  <!--    <img-->
  <!--      v-for="(image, index) in backgroundImages"-->
  <!--      :key="index"-->
  <!--      :src="image"-->
  <!--      alt="Background Image"-->
  <!--      :class="{-->
  <!--        'h-full': false,-->
  <!--        'background-image': true,-->
  <!--        visible: currentIndex === index,-->
  <!--      }" />-->
  <!--    <div class="z-1 relative">-->
  <!--      <h1-->
  <!--        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-white md:text-5xl lg:text-6xl">-->
  <!--        <mark class="rounded bg-blue-600 px-2 text-white dark:bg-blue-500"-->
  <!--          >TRPG</mark-->
  <!--        >-->
  <!--        가 생소해서 알아 보고 한번 해보고 싶으신 분들,-->
  <!--      </h1>-->
  <!--      <p-->
  <!--        class="text-lg font-normal text-gray-500 text-white dark:text-gray-400 lg:text-xl">-->
  <!--        티알에서 시나리오를 찾거나 등록하여 당신의 <br />시나리오를 쓰고-->
  <!--        게임하는 사람들의 후기를 들을 수 있습니다!-->
  <!--      </p>-->
  <!--    </div>-->
  <!--    <div class="absolute flex w-full justify-center">-->
  <!--      <NuxtLink class="" to="/main">-->
  <!--        <button-->
  <!--          class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800">-->
  <!--          <span-->
  <!--            class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">-->
  <!--            TRPG 캐릭터 생성-->
  <!--          </span>-->
  <!--        </button>-->
  <!--      </NuxtLink>-->
  <!--      &lt;!&ndash;      <NuxtLink class="" to="/main">&ndash;&gt;-->
  <!--      &lt;!&ndash;        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">&ndash;&gt;-->
  <!--      &lt;!&ndash;          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">&ndash;&gt;-->
  <!--      &lt;!&ndash;              회원가입&ndash;&gt;-->
  <!--      &lt;!&ndash;          </span>&ndash;&gt;-->
  <!--      &lt;!&ndash;      </button>&ndash;&gt;-->
  <!--      &lt;!&ndash;      </NuxtLink>&ndash;&gt;-->
  <!--      <NuxtLink class="" to="/main">-->
  <!--        <button-->
  <!--          class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">-->
  <!--          <span-->
  <!--            class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">-->
  <!--            둘러보기-->
  <!--          </span>-->
  <!--        </button>-->
  <!--      </NuxtLink>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script setup>
import ScenarioList from '~/components/org/scenarioList.vue'

// import { ref, watch } from 'vue'
//
// const backgroundImages = ref([
//   '/images/1.jpg',
//   '/images/trpgImg01.jpeg',
//   '/images/trpgImg02.webp',
//   // 추가 이미지 경로
// ])
//
// const currentIndex = ref(0)
// const intervalId = ref(null)
//
// const startSlideshow = () => {
//   intervalId.value = setInterval(() => {
//     currentIndex.value =
//       (currentIndex.value + 1) % backgroundImages.value.length
//   }, 5000)
// }
//
// // 컴포넌트가 마운트된 후 자동 전환 시작
// onMounted(() => {
//   startSlideshow()
// })
//
// // 이미지 전환 효과를 위한 감시
// watch(currentIndex, (newIndex, oldIndex) => {
//   const images = document.querySelectorAll('.background-image')
//   images[oldIndex].classList.remove('visible')
//   images[newIndex].classList.add('visible')
// })

// 이미지 전환 로직 추가
</script>

<style>
.background-image {
  position: fixed;
  filter: brightness(40%);
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: opacity 5s ease;
}

.background-image.visible {
  opacity: 1;
}
</style>
