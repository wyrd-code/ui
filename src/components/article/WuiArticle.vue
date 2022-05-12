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

<style lang="css">
.wui-article-wrapper {
  @apply min-h-screen flex flex-col justify-center relative overflow-hidden;
}
.wui-article {
  @apply relative w-full border border-neutral-200;
}
.wui-article > .prose {
  @apply mx-auto py-8 lg:(py-12);
}
.wui-article-cover {
  @apply -mx-8 -mt-8 overflow-y-hidden mb-8 relative overflow-y-hidden overflow-x-auto rounded;
}
.wui-article-cover-inner {
  @apply w-full;
}
.wui-article-cover-photo {
  @apply w-full;
}
.wui-article-lead {
  @apply text-xl font-bold;
}
.prose .wui-article-cover-photo > *:first-child {
  @apply m-0 w-full flex-grow rounded;
}
</style>
