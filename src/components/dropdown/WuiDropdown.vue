<template>
  <VDropdown :distance="6" v-bind="$attrs" class="wui-dropdown">
    <slot name="button">
      <!-- This will be the popover reference (for the events and position) -->
      <button>Click me</button>
    </slot>

    <template #popper>
      <slot
        item-class="wui-dropdown-item"
        item-active-class="wui-dropdown-item-active"
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
  @apply dark:(bg-neutral-900 border-neutral-800 text-neutral-300);
}
.wui-dropdown-item-active {
}
</style>
