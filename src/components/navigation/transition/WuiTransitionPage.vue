<template>
  <transition
    appear
    :name="name || 'fade'"
    :mode="mode || 'out-in'"
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

defineProps<{
  name?: string
  mode?: 'out-in' | 'in-out' | 'default' | undefined
}>()
// import { useRouter } from 'vue-router'

// const DEFAULT_TRANSITION = 'fade';
// const DEFAULT_TRANSITION_MODE = 'out-in';

// const transitionName = ref(DEFAULT_TRANSITION)
// const transitionMode = ref<'out-in' | 'in-out' | 'default' | undefined>(DEFAULT_TRANSITION_MODE)
// const transitionEnterActiveClass = ref('')

// const router = useRouter()

// router.beforeEach((to, from, next) => {
//   // todo move this client routing middleware to a plugin install method (attach only one)
//   let name = String(to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION);
//   transitionMode.value = DEFAULT_TRANSITION_MODE;
//   if (name === 'slide') {
//     const toDepth = to.path.split('/').length;
//     const fromDepth = from.path.split('/').length;
//     name = toDepth < fromDepth ? 'slide-right' : 'slide-left';
//   }

//   if (name === 'slide-screen') {
//     const toDepth = to.path.split('/').length;
//     const fromDepth = from.path.split('/').length;
//     name = toDepth < fromDepth ? 'slide-screen-right' : 'slide-screen-left';
//     document.body.style.overflow = 'hidden';
//   }

//   if (to.meta.transitionName === 'zoom') {
//     transitionMode.value = 'in-out';
//     document.body.style.overflow = 'hidden';
//   }

//   transitionEnterActiveClass.value = `${name}-enter-active`;
//   transitionName.value = name;

//   next();
// });

// router.afterEach((to, from, next) => {
//   if (from.meta.transitionName === 'slide-screen') {
//     document.body.style.overflow = '';
//   }
//   if (from.meta.transitionName === 'zoom') {
//     transitionMode.value = undefined;
//     transitionEnterActiveClass.value = '';
//     document.body.style.overflow = '';
//   }
// })

const prevHeight = ref('0')

const beforeEnter = (element: any) => {
  prevHeight.value = getComputedStyle(element).height
}

const afterEnter = (element: any) => {
  element.style.height = 'auto'
}

const enter = (element: any) => {
  const { height } = getComputedStyle(element)

  element.style.height = prevHeight.value
  prevHeight.value = getComputedStyle(element).height

  setTimeout(() => {
    element.style.height = height
  })
}

const beforeLeave = (element: any) => {
  prevHeight.value = getComputedStyle(element).height
}
</script>

<style scoped lang="postcss">
@import './transitions.css';
</style>
