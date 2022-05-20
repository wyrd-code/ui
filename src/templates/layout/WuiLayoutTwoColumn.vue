<template>
  <div>
    <slot name="header" />

    <div class="mx-auto">
      <div class="flex flex-row flex-wrap">
        <aside class="w-full sm:w-1/3 md:w-1/4">
          <slot name="aside" />
        </aside>

        <main role="main" class="w-full sm:w-2/3 md:w-3/4">
          <slot />
        </main>
      </div>
    </div>

    <slot name="footer" />
  </div>
</template>
