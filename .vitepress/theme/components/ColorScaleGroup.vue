<template>
  <div class="wui-color-scale-group">
    <div class="wui-color-scale-group-header">
      <div class="wui-color-scale-group-label"></div>
      <WuiTooltip
        v-for="step in Object.values(WUI_COLOR_SPEC_STEPS)"
        :key="`step-${step.key}`"
        placement="top"
      >
        <template #content>
          <div class="bg-black p-4">
            <h3>{{step.title}}</h3>
            <p>{{step.description}}</p>
          </div>
        </template>
        <div
          class="wui-color-scale-group-step"
        >
          {{ step.key }}
        </div>
      </WuiTooltip>
    </div>
    <div class="wui-color-scale-group-scales">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WUI_COLOR_SPEC_STEPS } from '@/domain'
</script>

<style lang="css">
.wui-color-scale-group-header {
  @apply flex space-x-1 mb-2;
}
.wui-color-scale-group-label {
  @apply w-40;
}
.wui-color-scale-group-step {
  @apply w-11.65 h-10 text-center bg-black rounded-full flex items-center justify-center;
}
.wui-color-scale-group-scales {
  @apply flex flex-col space-y-1;
}
</style>
