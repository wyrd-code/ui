<template>
  <header class="w-full flex items-center justify-between">
    <div class="flex">
      <WuiLink
        class="flex items-center font-bold space-x-2"
        :link="brandLink"
      >
        <slot name="brandLogo">
          <img
            v-if="brandLogo"
            class="h-8 w-auto"
            :src="brandLogo"
            :alt="brandCopy || 'Logo'"
          />
        </slot>
        <span class="">{{ brandCopy }}</span>
      </WuiLink>
    </div>

    <WuiNav
      :items="navItems"
      horizontal
    />

    <div class="header-actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
  brandLink: {
    type: [String, Object],
  },
  brandCopy: {
    type: String,
  },
  brandLogo: {
    type: String,
  },
})
</script>

<style lang="css" scoped>
.header-actions {
  @apply flex;
}
</style>
