<script setup>
import { ref } from 'vue'

const step = ref('1')
function fnStepChange(stepChange) {
  this.step = stepChange
}
</script>

<template>
  <div class="container mt-6">
    <ato-step-bar
      :step="step"
      :contents="[
        { step: '1', title: '게임 설정' },
        { step: '2', title: '게임 내용 작성' },
        { step: '3', title: '작성 내용 확인' },
      ]" />
    <org-scenario-game-setting></org-scenario-game-setting>
    <org-scenario-senario-contents></org-scenario-senario-contents>
    <org-scenario-senario-confirm></org-scenario-senario-confirm>
  </div>
</template>

<style scoped></style>
