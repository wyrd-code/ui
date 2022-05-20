<template>
  <component :is="as" class="wui-nav">
    <slot name="before" />

    <component
      :is="itemAs"
      v-for="(item, idx) in items"
      :key="`nav-item-${idx}`"
      :class="itemClass"
    >
      <slot name="beforeItem" />

      <router-link
        v-if="!isStatic && item.to"
        :to="item.to"
        :active-class="linkActiveClass"
        :exact-active-class="linkExactActiveClass"
        :class="linkClass"
        @click="() => emitGo(item.to)"
      >
        <div
          v-if="item.icon"
          class="wui-nav-item-icon"
          :class="[item.icon, iconClass]"
        />
        <span class="wui-nav-item-label">
          {{ item.label }}
        </span>
      </router-link>
      <span v-else :class="nonLinkClass" @click="() => emitGo(item.to)">
        <div
          v-if="item.icon"
          class="wui-nav-item-icon"
          :class="[item.icon, iconClass]"
        />
        <span class="wui-nav-item-label">
          {{ item.label }}
        </span>
      </span>

      <WuiNav
        v-if="showChildren && item.children && item.children.length"
        :class="childNavClass"
        :as="as"
        :item-as="itemAs"
        :items="item.children"
        :is-static="isStatic"
        :item-class="childNavItemClass"
        :icon-class="iconClass"
        :link-class="childNavLinkClass"
        :non-link-class="nonLinkClass"
        :show-children="showChildren"
        :link-active-class="linkActiveClass"
        :link-exact-active-class="linkExactActiveClass"
        :child-nav-class="childNavClass"
        :child-nav-link-class="childNavLinkClass"
      />
    </component>
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import type { WyrdNavItem } from '../../ui.types'

export default defineComponent({
  name: 'WuiNav',
  props: {
    as: {
      type: String,
      default: 'nav',
    },
    itemAs: {
      type: String,
      default: 'div',
    },
    itemClass: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      default: '',
    },
    linkClass: {
      type: String,
      default: '',
    },
    nonLinkClass: {
      type: String,
      default: '',
    },
    linkActiveClass: {
      type: String,
      default: '',
    },
    linkExactActiveClass: {
      type: String,
      default: '',
    },
    showChildren: {
      type: Boolean,
      default: false,
    },
    childNavClass: {
      type: String,
      default: '',
    },
    childNavItemClass: {
      type: String,
      default: '',
    },
    childNavLinkClass: {
      type: String,
      default: '',
    },
    isStatic: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array as () => WyrdNavItem[],
      default: () => [],
    },
    useItemWithRouteName: {
      type: String,
      default: undefined,
    },
  },
  emits: ['go'],
  setup(_props, { emit }) {
    const emitGo = (to: any) => emit('go', to)
    const navsVisible = ref<Record<string, any>>({})
    const setNavVisibility = (key: string, value: boolean) =>
      (navsVisible.value[key] = value)

    return {
      emitGo,
      navsVisible,
      setNavVisibility,
    }
  },
})
</script>
