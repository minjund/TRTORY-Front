<script setup>
import { ref } from 'vue'

const step = ref('1')
function fnStepChange(stepChange) {
  this.step = stepChange
}
</script>

<template>
  <div class="container mt-6">
    <ato-tiptap-editor></ato-tiptap-editor>
    <button
      type="submit"
      class="mt-2 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
      다음 단계
    </button>
  </div>
</template>

<style scoped></style>
