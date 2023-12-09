<template>
  <button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive : null }"
    @click="action"
    :title="title">
    <svg class="remix">
      <use :xlink:href="`${remixiconUr}#ri-${icon}`" />
    </svg>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

let remixiconUr = ref(remixiconUrl)

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  action: {
    type: Function,
    required: true,
  },

  isActive: {
    type: Function,
    default: null,
  },
})

console.log(props.action)
</script>

<style lang="scss">
.menu-item {
  background: transparent;
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  &.is-active,
  &:hover {
    background-color: #303030;
  }
}
</style>
