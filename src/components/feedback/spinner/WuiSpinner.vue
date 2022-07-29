<template>
  <span class="spinner animate-spin animate-loop icon-ph-spinner-thin" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiSpinner',
  props: {
    name: {
      default: '',
      type: String,
    },
    type: {
      default: 'number',
      type: String as () => 'number' | 'text',
    },
  },
})
</script>
