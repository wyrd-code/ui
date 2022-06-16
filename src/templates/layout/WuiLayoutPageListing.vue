<template>
  <div class="page">
    <slot name="headerWrapper" v-bind="props">
      <header v-if="$slots.header" class="page-header">
        <slot name="header" v-bind="props" />
      </header>
    </slot>

    <article v-if="$slots.default || $slots.aside" class="page-content">
      <aside v-if="$slots.aside" class="page-content-aside">
        <slot name="aside" v-bind="props" />
      </aside>

      <main v-if="$slots.default" class="page-content-main">
        <slot />
      </main>
    </article>
  </div>
</template>

<script lang="ts" setup>
const props = {
  header: 'p4',
  intro: 'text-lg font-bold mb-4',
  heading: 'text-2xl font-bold mb-4',
  marginBottom: 'mb-4',
}
</script>

<style lang="css" scoped>
.page {
  @apply w-full;
}
.page-header {
  @apply space-x-4 p-4;
}
.page-content {
  @apply flex w-full max-w-full;
}
.page-content-aside {
  @apply order-last lg:w-64 p-4;
}
.page-content-main {
  @apply max-w-full w-full;
}
</style>
