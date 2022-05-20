<template>
  <div class="h-screen">
    <slot name="header" />

    <main
      v-if="$slots.default"
      role="main"
      class="mx-auto flex flex-wrap flex-col md:flex-row items-center bg-blue-200"
    >
      <slot />
    </main>

    <slot name="footer" />
  </div>
</template>
