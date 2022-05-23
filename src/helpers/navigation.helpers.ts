import { RouteRecordRaw } from 'vue-router'

import type { WyrdPageDefinition, WyrdNavItem } from '../ui.types'

export const buildNavFromPageDefinitions = (
  pages: WyrdPageDefinition[],
  prefix?: string
): WyrdNavItem[] =>
  pages
    .filter((p) => p.meta?.nav !== false)
    .map((p) => buildNavItemFromPageDefinition(p, prefix))

export const buildNavItemFromPageDefinition = (
  page: WyrdPageDefinition,
  prefix?: string
): WyrdNavItem => {
  const { slug, title, redirect, icon } = page
  const name =
    (prefix && `${prefix}.${slug}`) || (slug?.length && slug) || page.name
  const children =
    page.children?.map((child) =>
      buildNavItemFromPageDefinition(child, name)
    ) || []

  let to
  if (redirect) {
    to = redirect
    if (children.length) {
      // Remove first child if parent redirects to it and it's name is 'home'
      const hasHomeRedirect = (item: WyrdNavItem) =>
        typeof item.to === 'object' &&
        (item.to as any).name === redirect.name &&
        redirect.name.endsWith('.home')

      const target = children.findIndex(hasHomeRedirect)
      if (target !== -1) {
        children.splice(target, 1)
      }
    }
  } else {
    to = { name }
  }

  return {
    to,
    label: title,
    children,
    icon,
  }
}

export const buildRoutesFromPageDefinitions = (
  pages: WyrdPageDefinition[],
  prefix?: string
): RouteRecordRaw[] =>
  pages.map((p) => buildRouteItemFromPageDefinition(p, prefix))

export const buildRouteItemFromPageDefinition = (
  page: WyrdPageDefinition,
  prefix?: string
): RouteRecordRaw => {
  const { slug, title, redirect, meta, component } = page
  const name =
    (prefix && `${prefix}.${slug}`) || (slug?.length && slug) || page.name

  const path = (prefix && slug) || `/${slug}`
  const children =
    page.children?.map((child) =>
      buildRouteItemFromPageDefinition(child, name)
    ) || []

  return {
    name,
    path,
    meta: {
      title,
      ...(meta || {}),
    },
    redirect,
    component,
    children,
  }
}
