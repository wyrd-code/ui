<template>
  <component
    :is="as"
    class="wui-divider"
    :class="{
      'wui-divider--vertical': vertical,
    }"
    role="separator"
  >
    <slot
      v-if="$slots.icon || icon"
      name="icon"
    >
      <span class="wui-divider-icon">
        <span :class="icon" />
      </span>
    </slot>
  </component>
</template>

<script lang="ts" setup>
defineProps({
  vertical: { type: Boolean },
  icon: { type: String, default: null },
  as: { type: String, default: 'div' },
})
</script>

<style lang="css">
@import url('divider.css');
</style>
