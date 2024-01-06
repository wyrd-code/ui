<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="wui-code-demo vp-raw">
    <div
      class="wui-code-demo-content"
      :class="{
        'grid-overlay': showHorizontalGrid || showVerticalGrid,
        'grid-overlay-both': showHorizontalGrid && showVerticalGrid,
        'grid-overlay-horizontal': showHorizontalGrid && !showVerticalGrid,
        'grid-overlay-vertical': showVerticalGrid && !showHorizontalGrid,
      }"
    >
      <slot />
    </div>

    <div
      class="wui-code-demo-actions"
      :class="{ expanded: showCode }"
    >
      <WuiButton
        class="wui-code-demo-action-copy"
        size="sm"
        @click="handleClickCopy"
      >
        <span
          class="icon-ph-copy"
          title="Copy source to clipboard"
        />
      </WuiButton>
      <!--
      <WuiButton
        class="wui-code-demo-action-grid"
        size="sm"
        @click="toggleHorizontalGrid"
      >
        <span
          class="icon-ph-grid-four-thin"
          title="Toggle horizontal grid"
        />
      </WuiButton>

      <WuiButton
        class="wui-code-demo-action-grid"
        size="sm"
        @click="toggleVerticalGrid"
      >
        <span
          class="icon-ph-grid-four-thin"
          title="Toggle vertical grid"
        />
      </WuiButton>
-->

      <WuiButton
        size="sm"
        @click="toggleCode"
      >
        <span class="icon-ph-code" />
      </WuiButton>
    </div>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div
      v-if="showCode"
      class="language-vue"
      v-html="decodedSource"
    ></div>
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

const showVerticalGrid = ref(false)
// const toggleVerticalGrid = () => showVerticalGrid.value = !showVerticalGrid.value

const showHorizontalGrid = ref(false)
// const toggleHorizontalGrid = () => showHorizontalGrid.value = !showHorizontalGrid.value

const decodedSource = computed(() => decodeURIComponent(props.code))
const decodedRawSource = computed(() => decodeURIComponent(props.rawCode))
const handleClickCopy = () => copyToClipboard(decodedRawSource.value)
</script>

<style lang="css">
@import url('code-demo.css');
</style>
