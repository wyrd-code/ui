<template>
  <div class="ui-layout-wrapper">
    <div class="ui-layout-wrapper-inner">
      <aside class="ui-layout-aside">
        <WuiNav
          class="ui-layout-nav"
          :items="items"
          :show-children="true"
          item-class="font-bold"
          link-class="text-black hover:text-link-600"
          link-active-class="underline font-bold"
          link-exact-active-class="text-link-600"
          child-nav-class="mb-4 font-normal text-sm"
          child-nav-item-class="font-bold"
          child-nav-link-class="text-black hover:text-link-600"
        />
      </aside>
      <main class="ui-layout-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { buildNavFromPageDefinitions } from '../ui.helpers'
import { pages } from './pages'

export default defineComponent({
  name: 'UI',
  setup() {
    return {
      items: buildNavFromPageDefinitions(pages, 'ui'),
    }
  },
})
</script>

<style lang="css">
.ui-layout-wrapper {
  @apply max-w-1800px mx-auto;
}
.ui-layout-wrapper-inner {
  @apply relative;
}
.ui-layout-aside {
  @apply w-64 fixed top-0 flex;
  @apply h-screen overflow-y-scroll;
}
.ui-layout-nav {
  @apply w-full p-8 text-left;
}
.ui-layout-main {
  @apply ml-64 p-8;
}
</style>
