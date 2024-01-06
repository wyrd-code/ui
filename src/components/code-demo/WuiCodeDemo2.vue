<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="wui-code-demo">
    <div class="wui-code-demo-scene">
      <slot></slot>
    </div>

    <div
      v-show="title || description"
      class="demo-title-desc"
    >
      <span class="demo-title">{{ title }}</span>
      <span class="demo-description">{{ description }}</span>
    </div>

    <div class="demo-actions">
      <div class="demo-platforms"></div>
      <div class="demo-buttons">
        <div class="demo-actions-copy">
          <span
            class="icon-ph-copy"
            title="Copy code"
            @click="copyCode"
            @keyup.enter="copyCode"
          />
        </div>
        <span
          class="icon-ph-code"
          title="Toggle expand"
          @click="toggleExpand()"
          @keyup.enter="toggleExpand()"
        />
      </div>
    </div>
    <div
      v-show="expand"
      :class="`language-${lang} extra-class`"
      v-html="decodedCode"
    ></div>
  </article>
</template>

<script lang="ts" setup>
import { readFileSync } from 'fs-extra'
import { computed, ref } from 'vue'

import { useCopyToClipboard } from '@/composables'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  lang: {
    type: String,
    default: 'vue',
  },
})

// const srcPath = resolve()
const code = readFileSync(props.src, 'utf-8')

const { copyToClipboard } = useCopyToClipboard()

const copyCode = () => copyToClipboard(code)

const decodedCode = computed(() => decodeURIComponent(code))

const expand = ref(false)
const toggleExpand = () => (expand.value = !expand.value)
</script>

<style lang="css">
.wui-code-demo {
  @apply border-neutral-200 min-h-200px bg-white border border-solid rounded flex;
}
html.dark .wui-code-demo {
  @apply bg-neutral-900 border-neutral-800;
}

.wui-code-demo-scene {
  @apply: flex flex-wrap p-4 justify-center items-center;
}
</style>
