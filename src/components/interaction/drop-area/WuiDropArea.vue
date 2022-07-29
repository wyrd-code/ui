<template>
  <div
    class="upload border-4 border-b-4 border-dotted relative overflow-hidden"
    :class="{
      'border-green-500 bg-green-100': dropActive,
      'border-yellow-500 ': dropActive,
    }"
  >
    <div
      v-if="active"
      class="absolute left-0 top-0 right-0 bottom-0 bg-black opacity-50"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiDropArea',
  props: {
    dropActive: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
