<template>
  <div
    v-show="isActive"
    ref="LoadingBar"
    class="wui-loadingbar"
    :style="{
      width: progress + '%',
    }"
  />
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'

import { portal } from '@/helpers'
import { delay } from '@/utilities'

const LoadingBar = ref<HTMLDivElement>()
const containerClassName = 'wui-loading-bar-container'

const emit = defineEmits(['close'])

const { close } = portal({
  ref: LoadingBar,
  containerClassName,
  emit,
})

const isActive = ref(false)
const progress = ref(0)

const closeDelay = 500 // seconds
const setProgress = (value: number) => {
  progress.value = value

  if (value) {
    isActive.value = true
  }

  if (value === 100) {
    const onClose = () => {
      isActive.value = false
      emit('close')
    }
    delay(closeDelay, onClose)
  }
}

defineExpose({ setProgress })

onUnmounted(close)
</script>

<style lang="css">
@import url('loading-bar.css');
</style>
