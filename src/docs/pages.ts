import { Component } from 'vue'

import type { WyrdPageDefinition } from '~/ui.types'

export const pages: WyrdPageDefinition[] = [
  {
    slug: 'docs',
    title: 'Wyrd UI',
    component: (): Component => import('./pages/RouteWrapper.vue'),
    redirect: { name: 'ui.docs.home' },
    children: [
      {
        slug: 'home',
        title: 'Home',
        component: (): Component => import('./pages/docs.home.md'),
      },
    ],
  },
  {
    slug: 'components',
    title: 'Components',
    component: (): Component => import('./pages/RouteWrapper.vue'),
    redirect: { name: 'ui.components.home' },
    children: [
      {
        slug: 'home',
        title: 'Home',
        component: (): Component => import('./pages/components.home.md'),
      },
      {
        slug: 'feedback',
        title: 'Feedback',
        component: (): Component => import('./pages/RouteWrapper.vue'),
        redirect: { name: 'ui.components.feedback.alert' },
        children: [
          {
            slug: 'alert',
            title: 'Alert',
            component: (): Component =>
              import('../components/alert/WuiAlertDoc.vue'),
          },
          {
            slug: 'drawer',
            title: 'Drawer',
            component: (): Component =>
              import('../components/drawer/WuiDrawerDoc.vue'),
          },
          {
            slug: 'modal',
            title: 'Modal',
            component: (): Component =>
              import('../components/modal/WuiModalDoc.vue'),
          },
          {
            slug: 'message',
            title: 'Message',
            component: (): Component =>
              import('../components/message/WuiMessageDoc.vue'),
          },
          {
            slug: 'notification',
            title: 'Notification',
            component: (): Component =>
              import('../components/notification/WuiNotificationDoc.vue'),
          },
          {
            slug: 'loading-bar',
            title: 'Loading bar',
            component: (): Component =>
              import('../components/loading-bar/WuiLoadingBarDoc.vue'),
          },
          {
            slug: 'tooltip',
            title: 'Tooltip',
            component: (): Component =>
              import('../components/tooltip/WuiTooltipDoc.vue'),
          },
          {
            slug: 'popover',
            title: 'Popover',
            component: (): Component =>
              import('../components/popover/WuiPopoverDoc.vue'),
          },
          {
            slug: 'progress-bar',
            title: 'Progress bar',
            component: (): Component =>
              import('../components/progress-bar/WuiProgressBarDoc.vue'),
          },
        ],
      },
      {
        slug: 'form',
        title: 'Form',
        component: (): Component => import('./pages/RouteWrapper.vue'),
        redirect: { name: 'ui.components.form.select' },
        children: [
          {
            slug: 'checkbox',
            title: 'Checkbox',
            component: (): Component =>
              import('../components/checkbox/WuiCheckboxDoc.vue'),
          },
          {
            slug: 'radio',
            title: 'Radio',
            component: (): Component =>
              import('../components/radio/WuiRadioDoc.vue'),
          },
          {
            slug: 'switch',
            title: 'switch',
            component: (): Component =>
              import('../components/switch/WuiSwitchDoc.vue'),
          },
          {
            slug: 'input',
            title: 'Input',
            component: (): Component =>
              import('../components/input/WuiInputDoc.vue'),
          },
          {
            slug: 'select',
            title: 'Select',
            component: (): Component =>
              import('../components/select/WuiSelectDoc.vue'),
          },
          {
            slug: 'button',
            title: 'Button',
            component: (): Component =>
              import('../components/button/WuiButtonDoc.vue'),
          },
          {
            slug: 'button-group',
            title: 'Button group',
            component: (): Component =>
              import('../components/button-group/WuiButtonGroupDoc.vue'),
          },
          {
            slug: 'slider',
            title: 'Slider',
            component: (): Component =>
              import('../components/slider/WuiSliderDoc.vue'),
          },
        ],
      },
      {
        slug: 'data-display',
        title: 'Data display',
        component: (): Component => import('./pages/RouteWrapper.vue'),
        redirect: { name: 'ui.components.data-display.avatar' },
        children: [
          {
            slug: 'avatar',
            title: 'Avatar',
            component: (): Component =>
              import('../components/avatar/WuiAvatarDoc.vue'),
          },
          {
            slug: 'badge',
            title: 'Badge',
            component: (): Component =>
              import('../components/badge/WuiBadgeDoc.vue'),
          },
          {
            slug: 'card',
            title: 'Card',
            component: (): Component =>
              import('../components/card/WuiCardDoc.vue'),
          },
          {
            slug: 'collapse',
            title: 'Collapse',
            component: (): Component =>
              import('../components/collapse/WuiCollapseDoc.vue'),
          },
          {
            slug: 'comment',
            title: 'Comment',
            component: (): Component =>
              import('../components/comment/WuiCommentDoc.vue'),
          },
          {
            slug: 'tag',
            title: 'Tag',
            component: (): Component =>
              import('../components/tag/WuiTagDoc.vue'),
          },
          {
            slug: 'hierarchy',
            title: 'Hierarchy',
            component: (): Component =>
              import('../components/hierarchy/WuiHierarchyDoc.vue'),
          },
        ],
      },
      {
        slug: 'navigation',
        title: 'Navigation',
        component: (): Component => import('./pages/RouteWrapper.vue'),
        redirect: { name: 'ui.components.navigation.breadcrumbs' },
        children: [
          {
            slug: 'breadcrumbs',
            title: 'Breadcrumbs',
            component: (): Component =>
              import('../components/breadcrumbs/WuiBreadcrumbsDoc.vue'),
          },
        ],
      },
    ],
  },
]
