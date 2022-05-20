<template>
  <div class="bg-red-50 text-red-600 border-red-200 border px-4 py-2 rounded">
    <span>{{ error.message }}</span>
    <em class="text-sm leading-relaxed float-right ml-2">{{ error.type }}</em>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import type { FormMessage } from '../../ui.types'

export default defineComponent({
  props: {
    error: {
      required: true,
      type: Object as () => FormMessage,
    },
  },
})
</script>
