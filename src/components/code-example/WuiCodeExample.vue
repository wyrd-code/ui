<template>
  <div
    class="wui-code-example"
    :class="{ 'overflow-hidden': overflowHidden, horizontal }"
  >
    <strong class="wui-code-example-title">
      {{ title }}
    </strong>
    <div
      v-if="$slots.description"
      class="px-4 pb-4"
    >
      <slot name="description" />
    </div>
    <div class="wui-code-example-scene">
      <slot />
    </div>

    <div
      v-if="code"
      class="wui-code-example-code-toggle"
    >
      <WuiButton
        class="!rounded-none"
        type="ghost"
        icon="code"
        block
        @click="toggleExpand"
      >
        {{ expanded ? 'Hide code' : 'Show code' }}
      </WuiButton>

      <div
        class="w-full wui-code-example-code relative overflow-auto"
        :style="{
          'max-height': expandHeight,
        }"
      >
        <WuiTooltip
          ref="tooltip"
          :content="copyText"
          class="wui-code-example-code-copy"
          placement="left"
        >
          <WuiButton
            type="neutral"
            @click="clickCopy"
          >
            <template #iconPrefix>
              <div class="h-full icon-ph-spinner" />
            </template>
          </WuiButton>
        </WuiTooltip>
        <pre
          class="language-html"
        ><code class="language-html">{{ code }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  code: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  overflowHidden: {
    type: Boolean,
    default: false,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
})

const tooltip = ref(null)
const expandHeight = ref('0px')
const copyText = ref('Copy to clipboard')
const expanded = ref(false)

function toggleExpand() {
  expandHeight.value = expandHeight.value === '0px' ? '1000px' : '0px'
  expanded.value = !expanded.value
}

const clickCopy = async () => {
  copyText.value = 'Copied!'
  await navigator.clipboard.writeText(props.code)
  ;(tooltip.value as any).setPopoverPosition()
}
</script>

<style lang="css">
.wui-code-example {
  @apply rounded flex flex-col my-10 min-h-200px w-full box-border;
  @apply border;
  @apply bg-white border-neutral-200;
  @apply dark:(bg-neutral-900 border-neutral-800);
}

.wui-code-example-title {
  @apply font-bold text-xl leading-none p-4;
  @apply border-b;
  @apply border-neutral-200;
  @apply dark:(border-neutral-800);
}
.wui-code-example-title .wui-tag {
  @apply ml-2;
}

.wui-code-example-scene {
  @apply leading-none w-full py-6 px-6;
}

.wui-code-example.horizontal .wui-code-example-scene {
  @apply space-x-4;
}

.wui-code-example:not(.horizontal) .wui-code-example-scene {
  @apply space-y-4;
}

.wui-code-example-scene > * {
  @apply mb-4;
}

.wui-code-example-code-toggle,
.wui-code-example-code {
  @apply border-t;
  @apply border-neutral-200;
  @apply dark:(border-neutral-800);
}
.wui-code-example-code-copy {
  @apply !absolute top-10px right-10px;
}
</style>
