<template>
  <component :is="tag" v-bind="customProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { routerLinkProps } from '@/domain'

const props = defineProps(routerLinkProps)

const tag = computed(() => {
  if (props.href) {
    return 'a'
  }
  if (props.to) {
    return 'router-link'
  }
  return 'span'
})

const customProps = computed(() => {
  if (props.href) {
    return {
      href: props.href,
      target: props.target,
    }
  }
  if (props.to) {
    return {
      to: props.to,
      replace: props.replace,
      append: props.append,
      exact: props.exact,
      activeClass: props.activeClass,
      exactActiveClass: props.exactActiveClass,
      disabled: props.disabled,
    }
  }
  return {}
})
</script>
