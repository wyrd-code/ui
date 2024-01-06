<template>
  <footer
    class="w-full mx-auto flex flex-col justify-center text-center space-y-4 py-8"
  >
    <WuiLink
      class="mx-auto flex items-center font-bold space-x-2 text-xl"
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

    <div
      v-if="description"
      class=""
    >
      {{ description }}
    </div>

    <WuiNav
      class="flex flex-wrap justify-center items-center"
      horizontal
      :items="navItems"
    />

    <span class="text-sm">&copy; {{ copyrightDateStart }}-2022 {{ copyrightName }} ™. All Rights
      Reserved.</span>
  </footer>
</template>

<script lang="ts" setup>
defineProps({
  navItems: {
    type: Array,
    default: () => [],
  },
  brandLink: {
    type: [String, Object],
    default: () => undefined,
  },
  brandCopy: {
    type: String,
    default: () => undefined,
  },
  brandLogo: {
    type: String,
    default: () => undefined,
  },
  description: {
    type: String,
    default: () => undefined,
  },
  copyrightName: {
    type: String,
    default: () => undefined,
  },
  copyrightDateStart: {
    type: String,
    default: () => undefined,
  },
})
</script>

<style lang="css" scoped>
.header-actions {
  @apply flex;
}
</style>
