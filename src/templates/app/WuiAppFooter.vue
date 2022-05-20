<template>
  <div class="flex">
    <p class="flex-grow text-base text-left">
      &copy; {{ date }}
      {{ copyrightName }}
      <br />
    </p>
    <p class>
      <a
        class="inline-flex items-center justify-center text-gray-500 border-gray-300 border rounded-full px-3 py-3"
        href="#app"
      >
        <icon-fa-chevron-up class="block h-4 w-4" aria-hidden="true" />
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    copyrightName: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      date: new Date().getFullYear(),
    }
  },
})
</script>
