<template>
  <component
    :is="tag"
    v-bind="customProps"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { routerLinkProps } from '@/domain'

const props = defineProps({
  ...routerLinkProps,
  link: {
    type: [String, Object],
  },
})

const tag = computed(() => {
  if (props.link) {
    return typeof props.link === 'string' ? 'a' : 'router-link'
  }

  if (props.href) {
    return 'a'
  }
  if (props.to) {
    return 'router-link'
  }
  return 'span'
})

const customProps = computed(() => {
  if (props.link) {
    if (typeof props.link === 'string') {
      return {
        href: props.link,
        target: props.target,
      }
    }

    return {
      to: props.link,
      replace: props.replace,
      append: props.append,
      exact: props.exact,
      activeClass: props.activeClass,
      exactActiveClass: props.exactActiveClass,
      disabled: props.disabled,
    }
  }

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
