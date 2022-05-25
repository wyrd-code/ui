<template>
  <transition
    appear
    :name="transitionName"
    :mode="transitionMode"
    @before-enter="beforeEnter"
    @before-leave="beforeLeave"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

defineProps<{ name?: string }>()

const DEFAULT_TRANSITION = 'fade'
const DEFAULT_TRANSITION_MODE = 'out-in'

const transitionName = ref(DEFAULT_TRANSITION)
const transitionMode = ref<'out-in' | 'in-out' | 'default' | undefined>(
  DEFAULT_TRANSITION_MODE
)

const prevHeight = ref('0')

const beforeEnter = (element: any) => {
  if (transitionName.value === 'fade')
    prevHeight.value = getComputedStyle(element).height
}

const enter = (element: any) => {
  if (transitionName.value === 'fade') {
    const { height } = getComputedStyle(element)

    element.style.height = prevHeight.value
    prevHeight.value = getComputedStyle(element).height

    setTimeout(() => {
      element.style.height = height
    })
  }
}

const afterEnter = (element: any) => {
  if (transitionName.value === 'fade') {
    element.style.height = 'auto'
  }
}

const beforeLeave = (element: any) => {
  prevHeight.value = getComputedStyle(element).height
}
</script>

<style scoped lang="postcss">
@import './transitions.css';
</style>
