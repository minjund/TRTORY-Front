<script setup>
const isLastItem = (index) => index === props.contents.length - 1
const props = defineProps({
  step: {
    type: String,
    default: '',
  },
  contents: {
    type: Array,
    default() {
      return []
    },
  },
})
</script>

<template>
  <ol
    class="mb-5 flex items-center justify-center space-x-2 rounded-lg text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:text-base">
    <li
      v-for="(content, indx) in contents"
      :key="indx"
      :class="[
        'flex items-center',
        props.step === content.step ? 'text-blue-600 dark:text-blue-500' : '',
      ]">
      <span
        :class="[
          'mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs',
          props.step === content.step ? 'border-blue-600' : '',
        ]">
        {{ indx + 1 }}
      </span>
      {{ content.title }}
      <div v-if="!isLastItem(indx)">
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
      </div>
    </li>
  </ol>
</template>

<style scoped></style>
