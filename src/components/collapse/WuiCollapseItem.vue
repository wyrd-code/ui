<template>
  <div
    class="wui-collapse-item"
    :class="[active && 'wui-collapse-item--expanded']"
  >
    <button
      class="wui-collapse-item-header"
      :aria-expanded="active"
      @click="active = !active"
    >
      <div
        v-if="active"
        class="wui-collapse-item-header-icon icon-ph-caret-down"
      />
      <div v-else class="wui-collapse-item-header-icon icon-ph-caret-right" />
      <slot name="header">
        <span>{{ title }}</span>
      </slot>
    </button>
    <transition name="fade">
      <div v-show="active" class="wui-collapse-item-body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WuiCollapseItem',
  props: {
    title: {
      type: String,
      default: null,
    },
    opened: { type: Boolean },
  },
  setup(props) {
    const active = ref(props.opened)
    return { active }
  },
})
</script>
