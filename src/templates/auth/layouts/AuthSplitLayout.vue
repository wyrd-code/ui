<template>
  <section
    class="relative grid lg:grid-cols-2 max-h-full w-full overflow-hidden"
  >
    <main class="bg-white">
      <div class="max-w-md mx-auto">
        <slot />
      </div>
    </main>
    <aside class="bg-neutral-2 p-8 flex justify-center items-center">
      <slot name="brand" />
    </aside>
  </section>
</template>
