<template>
  <div class="wui-color-scale" :class="{ dark: !!dark, light: !dark }">
    <div class="wui-color-scale-label">
      <strong>{{ name }}</strong>
      <small v-if="dark">dark</small>
    </div>
    <div class="wui-color-scale-wrapper">
      <div
        v-for="step in Object.values(WUI_COLOR_SPEC_STEPS)"
        :key="`${name}-${step.key}`"
        class="wui-color-scale-item"
      >
        <div
          class="wui-color-scale-item-surface"
          :class="`bg-${kebabName}-${step.key}`"
        >
        &nbsp;
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { camelToKebabCase } from '@/utilities'
import { WUI_COLOR_SPEC_STEPS } from '@/domain'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  dark: {
    type: Boolean,
  },
})

const kebabName = computed(() => camelToKebabCase(props.name))
</script>

<style lang="css">
.wui-color-scale {
  @apply flex space-x-1;
}
.wui-color-scale-label {
  @apply w-40 space-x-2;
}
.wui-color-scale-wrapper {
  @apply grid grid-cols-12 gap-1 w-full;
}
.wui-color-scale-item {
  background-color: transparent;
  background-size: 14px 14px;
  background-position: 0px 0px, 7px 0px, 7px -7px, 0px 7px;
  background-image:
    linear-gradient(45deg, var(--wui-color-gray-6) 25%, transparent 25%),
    linear-gradient(135deg, var(--wui-color-gray-6) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--wui-color-gray-6) 75%),
    linear-gradient(135deg, transparent 75%, var(--wui-color-gray-6) 75%);
}
.wui-color-scale-item-surface {
  @apply w-full h-10;
}
</style>
