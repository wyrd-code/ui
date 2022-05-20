<template>
  <div class="flex flex-col min-h-screen">
    <slot name="header" />

    <div class="flex-grow flex flex-row justify-center">
      <div v-if="$slots.asidePrimary" class="flex w-1/4">
        <slot name="asidePrimary" />
      </div>

      <div class="flex-grow flex flex-col">
        <slot />
      </div>

      <div v-if="$slots.asideSecondary" class="flex w-1/4">
        <slot name="asideSecondary" />
      </div>
    </div>

    <slot name="footer" />
  </div>
</template>
