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
      <slot v-if="active" name="icon-contracted">
        <span class="wui-collapse-item-header-icon icon-ph-caret-down" />
      </slot>
      <slot v-else name="icon-expanded">
        <span class="wui-collapse-item-header-icon icon-ph-caret-right" />
      </slot>
      <slot name="header">
        <span class="wui-collapse-item-title">{{ title }}</span>
      </slot>
    </button>
    <transition name="fade">
      <div v-show="active" class="wui-collapse-item-body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

// @unocss-include

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  opened: { type: Boolean },
})

const active = ref(props.opened)
</script>
