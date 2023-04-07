<template>
  <div class="wui-code-demo vp-raw">
    <div class="wui-code-demo-content grid-overlay">
      <slot />
    </div>

    <div class="wui-code-demo-actions" :class="{ expanded: showCode }">
      <WuiButton
        class="wui-code-demo-action-copy"
        size="sm"
        @click="handleClickCopy"
      >
        <span class="icon-ph-copy" title="Copy source to clipboard" />
      </WuiButton>

      <WuiButton size="sm" @click="toggleCode">
        <span class="icon-ph-code" />
      </WuiButton>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="showCode" class="language-vue" v-html="decodedSource"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { useCopyToClipboard } from '@/composables'

const { copyToClipboard } = useCopyToClipboard()

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  rawCode: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  desc: {
    type: String,
    default: null,
  },
})

const showCode = ref(false)
const toggleCode = () => (showCode.value = !showCode.value)

const decodedSource = computed(() => decodeURIComponent(props.code))
const decodedRawSource = computed(() => decodeURIComponent(props.rawCode))
const handleClickCopy = () => copyToClipboard(decodedRawSource.value)
</script>

<style lang="css">
@import url('code-demo.css');
</style>
