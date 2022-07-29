<template>
  <div class="wui-article-wrapper">
    <div class="wui-article" :class="sizeClass">
      <div class="prose dark:prose-invert" :class="proseClass">
        <div v-if="$slots.coverPhoto" class="wui-article-cover">
          <div class="wui-article-cover-inner">
            <div class="wui-article-cover-photo" :class="`h-${coverHeight}`">
              <slot name="coverPhoto" />
            </div>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiArticle',
  props: {
    sizeClass: {
      type: String,
      default: 'xl:text-lg',
    },
    proseClass: {
      type: String,
      default: 'prose-truegray',
    },
    coverHeight: {
      type: String,
      default: '128',
    },
  },
})
</script>

<style lang="css" scoped>
@import url('article.css');
</style>
