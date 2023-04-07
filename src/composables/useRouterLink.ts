import { computed, getCurrentInstance } from 'vue'

import { RouterLinkProps } from '@/domain/navigation'

export { routerLinkProps } from '@/domain/navigation'

export const useRouterLink = (props: RouterLinkProps) => {
  const globalProperties = computed(
    () => getCurrentInstance()?.appContext.config.globalProperties
  )
  // const isNuxt = computed(() => !!globalProperties.value?.$nuxt)
  const vueRouter = computed(() => globalProperties.value?.$router)
  const vueRoute = computed(() => globalProperties.value?.$route)

  const getLinkTagOrFallback = (href, to, fallback) => {
    if (href) {
      return 'a'
    }

    if (to && vueRouter.value) {
      return 'router-link'
    }

    return fallback
  }

  const tagComputed = computed(() => {
    const defaultTag = props.tag || 'div'
    if (props.disabled) {
      return defaultTag
    }

    // TODO check vitepress integration?
    // TODO check nuxt integration?
    // if (props.to) { return isNuxt.value ? 'nuxt-link' : 'router-link' }
    // https://github.com/nuxt/framework/issues/6747
    return props.disabled
      ? defaultTag
      : getLinkTagOrFallback(props.href, props.to, defaultTag)
  })

  const isLinkTag = computed(() =>
    ['a', 'router-link', 'nuxt-link'].includes(tagComputed.value)
  )

  const linkAttributesComputed = computed(() => {
    if (!isLinkTag.value) {
      return {}
    }

    return tagComputed.value === 'a'
      ? {
          target: props.target,
          href: hrefComputed.value,
        }
      : {
          target: props.target,
          to: props.to,
          disabled: props.disabled,
          replace: props.replace,
          append: props.append,
          activeClass: props.activeClass,
          exact: props.exact,
          exactActiveClass: props.exactActiveClass,
        }
  })

  const isActiveRouterLink = computed(() => {
    if (!vueRouter.value || !props.to) {
      return false
    }

    const to = vueRouter.value.resolve(props.to).href
    const currentHref = vueRouter.value.currentRoute.value.path

    return to.replace('#', '') === currentHref.replace('#', '')
  })

  const hrefComputed = computed(() => {
    // to resolve href on server for SEO optimization
    // https://github.com/nuxt/nuxt.js/issues/8204

    return (
      props.href ||
      (props.to ? vueRouter.value?.resolve(props.to, vueRoute.value).href : '')
    )
  })

  return {
    isLinkTag,
    tagComputed,
    hrefComputed,
    isActiveRouterLink,
    linkAttributesComputed,
  }
}
