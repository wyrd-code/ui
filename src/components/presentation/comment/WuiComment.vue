<template>
  <div class="wui-comment">
    <div class="wui-comment-header">
      <slot name="header">
        {{ comment.author }}
      </slot>
    </div>
    <div class="wui-comment-body">
      <slot />
      <pre>{{ comment }}</pre>
    </div>
    <div v-if="$slots.footer" class="wui-comment-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiComment',
  props: {
    comment: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>

<style lang="css" scoped>
@import url('comment.css');
</style>
