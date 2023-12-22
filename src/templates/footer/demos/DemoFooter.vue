<template>
  <Footer
    :nav-items="navItems"
    brand-copy="WYRD UI"
    brand-link="#"
    brand-logo="/wyrd.svg"
    copyright-name="WYRD"
    description="Open-source web component library."
    copyright-date-start="2023"
  >
    <template #actions>
      <WuiDropdown
        :items="languages"
        class="bg-neutral-1 shadow-lg"
        rounded
        bordered
      >
        <template #button>
          <WuiButton size="sm" variant="secondary" ghost>
            <span>English</span>
            <span class="icon-ph-caret-down ml-2 text-lg" />
          </WuiButton>
        </template>
      </WuiDropdown>

      <WuiNav :items="actionItems" horizontal />
    </template>
  </Footer>
</template>

<script lang="ts" setup>
import type { WyrdNavItem } from '@/components/nav'

import Footer from '../Footer.vue'

const navItems = [
  {
    href: '/components/badge/badge.html',
    label: 'Badge',
  },
  {
    href: '/components/dialog/dialog.html',
    label: 'Dialog',
  },
  {
    href: '/components/nav/nav.html',
    label: 'Nav',
  },
  {
    href: '/components/drawer/drawer.html',
    label: 'Drawer',
  },
]

const languages: WyrdNavItem[] = [
  {
    href: '#en',
    label: 'English',
  },
  {
    href: '#de',
    label: 'German',
  },
  {
    href: '#es',
    label: 'Spanish',
  },
]

const actionItems = [
  {
    href: '#signIn',
    label: 'Sign in',
  },
  {
    href: '#signUp',
    label: 'Sign up',
  },
]
</script>
