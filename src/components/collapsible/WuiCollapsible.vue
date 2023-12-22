<template>
  <CollapsibleRoot v-model:open="open" class="wui-collapsible">
    <div class="wui-collapsible-header">
      <slot name="header" />

      <CollapsibleTrigger class="wui-collapsible-trigger" as-child>
        <WuiButton icon shape="round" size="sm">
          <span v-if="!open" class="icon-ph-arrows-out-line-vertical"></span>
          <span v-else class="icon-ph-x"></span>
        </WuiButton>
      </CollapsibleTrigger>
    </div>

    <div class="wui-collapsible-preview">
      <slot name="preview" />
    </div>

    <CollapsibleContent class="wui-collapsible-content">
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>

<script lang="ts" setup>
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from 'radix-vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<style lang="css">
@import url('collapsible.css');
</style>
