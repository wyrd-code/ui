<template>
  <div class="wui-article-wrapper">
    <!-- <div class="absolute inset-0 bg-[url(../assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,black,rgba(255,255,255,0.5))]" /> -->
    <div class="wui-article">
      <div class="prose prose-zinc prose-invert" :class="sizeClass">
        <div
          v-if="$slots.coverPhoto"
          class="wui-article-cover"
          :class="`h-${coverHeight}`"
        >
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
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'WuiArticle',
  props: {
    size: {
      type: String,
      default: 'base',
    },
    coverHeight: {
      type: String,
      default: '128',
    },
    responsive: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const sizeClass = computed(() => {
      const classes: string[] = []
      const allowed = ['sm', 'lg', 'xl', '2xl']
      const responsive = ['sm', 'lg', 'xl']

      if (allowed.includes(props.size)) {
        classes.push(`prose-${props.size} `)
      }
      if (props.responsive) {
        classes.push(...responsive.map((s) => `${s}:prose-${s}`))
      }
      return classes
    })

    return {
      sizeClass,
    }
  },
})
</script>

<style lang="css">
.wui-article-wrapper {
  @apply min-h-screen flex flex-col justify-center relative overflow-hidden;
}
.wui-article {
  @apply relative w-full;
}
.wui-article > .prose {
  @apply mx-auto py-8 lg:(py-12);
}
.wui-article-cover {
  @apply w-full overflow-y-hidden mb-8;
}
.wui-article-cover-inner {
  @apply absolute left-0 right-0 top-0 w-full;
}
.wui-article-cover-photo {
  @apply relative overflow-y-hidden overflow-x-auto rounded;
  @apply flex items-center justify-center align-middle w-full;
}
.prose .wui-article-cover-photo > *:first-child {
  @apply m-0 w-full flex-grow rounded;
}
</style>
