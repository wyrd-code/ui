<template>
  <div class="ui-layout-wrapper">
    <div class="ui-layout-wrapper-inner">
      <aside class="ui-layout-aside">
        <WuiNav
          class="ui-layout-nav"
          :items="items"
          :show-children="true"
          item-class="font-bold"
          link-class="link"
          link-active-class="underline font-bold"
          link-exact-active-class="underline"
          child-nav-class="pl-4 font-normal text-sm leading-relaxed"
          child-nav-item-class="font-bold"
          child-nav-link-class="link"
        >
          <template #before>
            <WuiLink
              class="w-full flex items-center space-x-2 mb-4"
              :to="{ name: 'ui.home' }"
            >
              <WyrdLogoSVG class="w-5 h-5" />
              <strong>WYRD.UI</strong>
            </WuiLink>
          </template>
        </WuiNav>
      </aside>
      <main class="ui-layout-main">
        <slot>
          <RouterView />
        </slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WyrdLogoSVG from '../assets/wyrd-logo.svg'
import { WuiLink, WuiNav } from '../components'
import { buildNavFromPageDefinitions } from '../helpers'
import { pages } from './ui.docs.pages'

export default defineComponent({
  name: 'UiLayout',
  components: {
    WuiLink,
    WuiNav,
    WyrdLogoSVG: WyrdLogoSVG as any,
  },
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
