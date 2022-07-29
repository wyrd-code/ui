<template>
  <div
    class="wui-loadingbar"
    :style="{
      width: progress + '%',
      height: height + 'px',
    }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiLoadingbar',
  data() {
    return {
      id: 0,
      progress: 0,
      height: 2,
    }
  },
  watch: {
    progress(newValue) {
      if (newValue === 100) {
        setTimeout(() => {
          this.progress = 0
          this.height = 2
        }, 600)
      }
    },
  },
})
</script>

<style lang="css" scoped>
@import url('loading-bar.css');
</style>
