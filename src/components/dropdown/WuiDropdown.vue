<template>
  <VDropdown :distance="6" v-bind="$attrs" class="wui-dropdown">
    <slot name="button">
      <!-- This will be the popover reference (for the events and position) -->
      <button>Click me</button>
    </slot>

    <template #popper="{ toggle }">
      <slot
        item-class="wui-dropdown-item"
        item-active-class="wui-dropdown-item-active"
        :toggle="toggle"
      />
    </template>
  </VDropdown>
</template>

<style lang="css">
.wui-dropdown {
  @apply relative text-left leading-none;
}
.wui-dropdown-item {
  @apply flex items-center space-x-2 px-3 py-3 leading-tight cursor-pointer;
  @apply border-b;
  @apply last:(border-none rounded-b-md) first:rounded-t-md hover:(underline);
  @apply bg-neutral-50 border-neutral-200 text-neutral-700;
  @apply dark:(bg-neutral-800 border-neutral-700 text-neutral-300);
}
.wui-dropdown-item-active {
}
.v-popper--theme-dropdown .v-popper__wrapper .v-popper__inner {
  @apply shadow-lg;
  @apply bg-neutral-100 border-neutral-200;
  @apply dark:(bg-neutral-800 border-neutral-700);
  @apply dark:(shadow-black);
}
.v-popper--theme-dropdown .v-popper__arrow-container {
}
.v-popper--theme-dropdown .v-popper__arrow-container .v-popper__arrow-inner {
  @apply border-neutral-100;
  @apply dark:border-neutral-800;
}
.v-popper--theme-dropdown .v-popper__arrow-container .v-popper__arrow-outer {
  @apply border-neutral-200;
  @apply dark:border-neutral-700;
}

/* Transition */

/*
.v-popper--theme-dropdown.v-popper__popper--hidden {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.v-popper--theme-dropdown.v-popper__popper--shown {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}

.v-popper--theme-dropdown.v-popper__popper--skip-transition {
  transition: none !important;
}
*/
</style>
