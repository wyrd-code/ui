<template>
  <div class="wui-article-layout-wrapper">
    <div v-if="$slots.wrapperHeader" class="wui-article-layout-wrapper-header">
      <slot name="wrapperHeader" v-bind="props" />
    </div>

    <article class="wui-article">
      <div v-if="$slots.header" class="wui-article-layout-header">
        <slot name="header" v-bind="props" />
        <slot name="meta" v-bind="props" />
      </div>

      <main class="wui-article-layout-main">
        <slot name="intro" v-bind="props" />

        <slot />
      </main>
    </article>
  </div>
</template>

<script lang="ts" setup>
const props = {
  header: '',
  intro: 'text-lg',
  heading: 'text-2xl',
}
</script>

<style lang="css">
.wui-article-layout {
  @apply flex flex-col flex-grow;
}
.wui-article-layout-wrapper {
  @apply flex flex-col p-6;
}
.wui-article-layout-header {
  @apply text-center;
}
.wui-article-layout-main {
  @apply mx-auto max-w-prose;
}
</style>
