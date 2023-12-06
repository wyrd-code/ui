<template>
  <section class="relative max-h-full w-full py-8">

    <div class="max-w-md mx-auto flex flex-col space-y-4">
      <slot name="brand" />

      <main class="bg-white border border-neutral-5 rounded-lg shadow-lg">
        <slot />
      </main>
    </div>
  </section>
</template>
