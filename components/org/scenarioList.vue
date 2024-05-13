<template>
  <div class="container">
    <div class="flex flex-wrap items-center justify-center py-4 md:py-8">
      <button
        type="button"
        class="mb-3 mr-3 rounded-full border border-blue-600 bg-white px-5 py-2.5 text-center text-base font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        v-for="boardType in boardTypeList"
        :key="boardType"
        :class="buttonClass(boardType)"
        @click="setActiveBoardType(boardType)">
        {{ boardType }}
      </button>
      <!--      <button-->
      <!--        type="button"-->
      <!--        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">-->
      <!--        신작 시나리오-->
      <!--      </button>-->
      <!--      <button-->
      <!--        type="button"-->
      <!--        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">-->
      <!--        인기 시나리오-->
      <!--      </button>-->
      <!--      <button-->
      <!--        type="button"-->
      <!--        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">-->
      <!--        티알 추천 시나리오-->
      <!--      </button>-->
      <!--      <button-->
      <!--        type="button"-->
      <!--        class="mb-3 mr-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-gray-800">-->
      <!--        룰북 리스트-->
      <!--      </button>-->
      <nuxt-link
        v-if="showDetailYn"
        to="/scenarioUpload"
        class="ml-auto mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >시나리오 올리기</nuxt-link
      >
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <figure class="group relative cursor-pointer filter">
        <a href="#">
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="image description" />
        </a>
        <figcaption
          class="absolute bottom-0 hidden w-full bg-black px-4 text-lg text-white group-hover:block group-hover:decoration-8">
          <p>
            가나다라마바사아자차카타파s;flkdsf;kljads;lfkjas;dlkfja;sdklfja;dsklfj하
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
import { ref } from 'vue'

const buttonClass = (boardType) => {
  return [
    'mb-3',
    'mr-3',
    'rounded-full',
    'px-5',
    'py-2.5',
    'text-center',
    'text-base',
    'font-medium',
    'focus:outline-none',
    'focus:ring-4',
    boardType === activeBoardType.value
      ? {
          'border-blue-600': true,
          'bg-white': true,
          'text-blue-700': true,
          'hover:bg-blue-700': true,
          'hover:text-white': true,
          'focus:ring-blue-300': true,
          'dark:border-blue-500': true,
          'dark:bg-gray-900': true,
          'dark:text-blue-500': true,
          'dark:hover:bg-blue-500': true,
          'dark:hover:text-white': true,
          'dark:focus:ring-blue-800': true,
        }
      : {
          'border-white': true,
          'bg-white': true,
          'text-gray-900': true,
          'hover:border-gray-200': true,
          'focus:ring-gray-300': true,
          'dark:border-gray-900': true,
          'dark:bg-gray-900': true,
          'dark:text-white': true,
          'dark:hover:border-gray-700': true,
          'dark:focus:ring-gray-800': true,
        },
  ]
}

const props = defineProps({
  showDetailYn: {
    type: Boolean,
    default() {
      return false
    },
  },
})

let boardTypeList = ref([])
let boardList = ref([])
async function getBoardType() {
  try {
    await $fetch('http://localhost:8080/api/v1/boards/board-type', {
      method: 'get',
    }).then(async (data) => {
      // Vue Router의 push 메서드를 사용하여 페이지 이동
      if (data.code == 200) {
        boardTypeList.value = data.item
      } else {
        console.log('게시판 타입 조회 실패' + data.message)
      }
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

let activeBoardType = ref('ALL') // 클릭된 버튼의 boardType을 저장할 ref

async function setActiveBoardType(boardType) {
  activeBoardType.value = boardType // 클릭된 버튼의 boardType을 activeBoardType에 할당

  try {
    await $fetch('http://localhost:8080/api/v1/boards/board-list', {
      method: 'get',
    }).then(async (data) => {
      // Vue Router의 push 메서드를 사용하여 페이지 이동
      if (data.code == 200) {
        boardList.value = data.item
      } else {
        console.log('게시판 타입 조회 실패' + data.message)
      }
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

onMounted(() => {
  getBoardType()
  setActiveBoardType('ALL') // 컴포넌트가 마운트될 때 호출
})
</script>

<style></style>
