<template>
  <div class="ui-layout-wrapper">
    <div class="ui-layout-wrapper-inner">
      <aside class="ui-layout-aside">
        <WuiLink
          class="w-full flex items-center space-x-2 mb-4"
          :to="{ name: 'ui.home' }"
        >
          <img
            src="/wyrd.svg"
            class="w-5 h-5"
            alt="Wyrd logo"
          />
          <strong>WyrdUI</strong>
        </WuiLink>

        <button
          class="toggle"
          title="Toggle dark theme"
          @click="toggleDark"
        >
          <span class="text-xl icon-ph-sun dark:icon-ph-moon" />
        </button>
        <WuiMenu
          class="ui-layout-nav"
          :items="[]"
          :show-children="true"
          item-class="font-bold"
          link-class="link"
          link-active-class="underline"
          link-exact-active-class="underline"
          child-nav-class="pb-4 font-normal leading-relaxed"
          child-nav-item-class="font-bold"
          child-nav-link-class="link"
        />
      </aside>
      <main class="ui-layout-main">
        <slot>
          <RouterView />
        </slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WuiLink, WuiMenu } from '@/components'
import { useDarkTheme } from '@/composables'

const { toggleDark } = useDarkTheme()
</script>

<style lang="css">
.ui-layout-wrapper {
  @apply max-w-screen-3xl mx-auto;
}
.ui-layout-wrapper-inner {
  @apply ml-64 flex flex-grow justify-center;
  @apply min-h-screen;
}
.ui-layout-aside {
  @apply w-64 fixed top-0 left-0 p-8 space-y-8;
  @apply h-screen overflow-y-scroll;
}
.ui-layout-nav {
  @apply w-full text-left;
}
.ui-layout-main {
  @apply p-8 flex-grow max-w-screen-xl;
}
.toggle {
  @apply rounded-full flex p-1 items-center justify-center;
  @apply border border-neutral-200;
  @apply hover:(border-neutral-300);
}
html.dark .toggle {
  @apply border-neutral-600;
  @apply hover:(border-neutral-500);
}
</style>
