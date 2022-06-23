<template>
  <div
    class="wui-code-example"
    :class="{ 'overflow-hidden': overflowHidden, horizontal }"
  >
    <h2 class="font-bold leading-none py-4 px-4 wui-code-example-title">
      {{ title }}
    </h2>
    <div v-if="$slots.description" class="px-4 pb-4">
      <slot name="description" />
    </div>
    <div class="wui-code-example-scene">
      <slot />
    </div>

    <div v-if="code" style="border-top: 1px solid #d3dae6">
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
          <WuiButton type="neutral" @click="clickCopy">
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

<script lang="ts">
import { defineComponent } from 'vue'

import WuiButton from '../button/WuiButton.vue'
import WuiTooltip from '../tooltip/WuiTooltip.vue'

export default defineComponent({
  name: 'WuiCodeExample',
  components: {
    WuiTooltip,
    WuiButton,
  },
  props: {
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
  },
  data: () => ({
    expandHeight: '0px',
    copyText: 'Copy to clipboard',
    expanded: false,
  }),
  methods: {
    toggleExpand() {
      this.expandHeight = this.expandHeight === '0px' ? '1000px' : '0px'
      this.expanded = !this.expanded
    },

    async clickCopy() {
      this.copyText = 'Copied!'
      await navigator.clipboard.writeText(this.code)
      ;(this.$refs.tooltip as any).setPopoverPosition()
    },
  },
})
</script>

<style lang="css">
.wui-code-example {
  @apply rounded flex flex-col my-10 min-h-200px w-full box-border;
  @apply bg-white border-neutral-200;
}
html.dark .wui-code-example {
  @apply bg-neutral-900 border-neutral-800;
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

.wui-code-example-code {
  @apply border-t border-neutral-200;
  transition: max-height 0.4s;
}

.wui-code-example-code-copy {
  @apply !absolute top-10px right-10px;
}
</style>
