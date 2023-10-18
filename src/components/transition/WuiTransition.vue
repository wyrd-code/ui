<template>
  <transition
    appear
    :name="transitionName"
    :mode="transitionMode"
    :duration="duration"
  >
    <slot />
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'fade',
  },
  duration: {
    type: Number,
    default: 150,
  },
})

const DEFAULT_TRANSITION_MODE = 'out-in'

const transitionName = computed(() => props.name)
const transitionMode = ref<'out-in' | 'in-out' | 'default' | undefined>(
  DEFAULT_TRANSITION_MODE
)

// const prevHeight = ref('0')

// const beforeEnter = (element: any) => {
//   if (transitionName.value === 'fade')
//     prevHeight.value = getComputedStyle(element).height
// }

// const enter = (element: any) => {
//   if (transitionName.value === 'fade') {
//     const { height } = getComputedStyle(element)

//     element.style.height = prevHeight.value
//     prevHeight.value = getComputedStyle(element).height

//     setTimeout(() => {
//       element.style.height = height
//     })
//   }
// }

// const afterEnter = (element: any) => {
//   if (transitionName.value === 'fade') {
//     element.style.height = 'auto'
//   }
// }

// const beforeLeave = (element: any) => {
//   prevHeight.value = getComputedStyle(element).height
// }
</script>

<style scoped lang="postcss">
@import './transitions.css';
</style>
