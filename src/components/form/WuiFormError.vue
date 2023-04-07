<template>
  <div
    class="mb-4 bg-red-100 border-red-300 border text-red-900 px-4 py-1 rounded"
  >
    <span>{{ errors.message }}</span>

    <div v-if="showChildErrors">
      <p v-for="(child, i) in errors.data || []" :key="`child-message-${i}`">
        {{ child.message }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    errors: {
      required: true,
      type: Object,
    },
    showChildErrors: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
