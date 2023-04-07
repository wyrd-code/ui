import { defineConfig } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItChecbox from 'markdown-it-colorful-checkbox'
import { version  } from './../package.json';
import { join } from 'path';
import viteConfig from './../vite.config.base'

import { markdownDemoPlugin } from './markdown-demo/markdown-demo-plugin'

export default defineConfig({
  srcDir: join(__dirname, '/../src/'),
  vite: {
    plugins: viteConfig.plugins,
    css: viteConfig.css,
    resolve: {
      alias: {
        '@': join(__dirname, '/../src/'),
      },
    },
  },
  title: 'WyrdUI',
  description: 'Vite, Vue & UnoCSS based user interface library',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png?v=1',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png?v=1',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=1',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.json?v=1' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.json?v=1',
        color: '#e31e00',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico?v=1' }],
    ['link', { rel: 'msapplication-TileColor', content: '#b91d47' }],
    ['link', { rel: 'theme-color', content: '#ffffff' }],
    [
      'meta',
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: light)',
        content: '#e31e00',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        media: '(prefers-color-scheme: dark)',
        content: 'black',
      },
    ],
  ],
  themeConfig: {
    logo: '/wyrd.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/wyrd-code/ui' }],
    outline: 'deep',
    editLink: {
      pattern: 'https://github.com/wyrd-code/ui/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Patterns', link: '/patterns/patterns.html' },
      { text: 'Components', link: '/components/components.html' },
      { text: 'Templates', link: '/templates/templates.html' },
      { text: `v${version}`, link: '/CHANGELOG.html' },
      { text: 'Roadmap', link: '/ROADMAP.html' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Getting started', link: '/guide/getting-started' },
            // { text: 'Configuration', link: '/guide/configuration' },
            // { text: 'i18n', link: '/guide/i18n' },
            { text: 'Accessibility', link: '/guide/a11y.html' },
            { text: 'Typography Preview', link: '/guide/typography-preview' },
            { text: 'Styleguide', link: '/guide/styleguide' },
          ],
        },
        {
          text: 'Architecture',
          collapsible: true,
          items: [
            { text: 'Architecture', link: '/guide/architecture' },
            { text: 'Atomic design', link: '/guide/design-system/atomic-design' },
          ],
        },
        {
          text: 'Design system',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/guide/design-system/' },
            {
              text: 'Tokens',
              items: [
                { text: 'Design Tokens', link: '/guide/design-system/tokens' },
                { text: 'Elevation', link: '/guide/design-system/elevation' },
                { text: 'Shape', link: '/guide/design-system/shape' },
                { text: 'Spacing', link: '/guide/design-system/spacing' },
                { text: 'Tokens', link: '/guide/design-system/tokens' },
                { text: 'Typography', link: '/guide/design-system/typography' },
              ],
            },
            {
              text: 'Color theory',
              items: [
                { text: 'Color', link: '/guide/design-system/color' },
                { text: 'Color scales', link: '/guide/design-system/color-scales' },
                { text: 'Understanding the scale', link: '/guide/design-system/understanding-the-scale' },
                { text: 'Palette composition', link: '/guide/design-system/color-palette-composition' },
              ],
            },
            {
              text: 'Other',
              items: [
                { text: 'Animation', link: '/guide/design-system/animation' },
                { text: 'Haptics', link: '/guide/design-system/haptics' },
                { text: 'Sound', link: '/guide/design-system/sound' },
                { text: 'Iconography', link: '/guide/design-system/iconography' },
                { text: 'Theme editor', link: '/guide/design-system/theme-editor' },
              ],
            },
          ],
        },
      ],
      '/patterns/': [
        {
          text: 'Patterns',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/patterns/' },
            { text: 'Transitions', link: '/patterns/transitions.html' },
          ],
        },
        {
          text: 'Composables',
          collapsible: true,
          items: [
            // { text: 'useRouterLink', link: '/patterns/composables/use-router-link.html' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/components/components.html' },
            { text: 'Alert', link: '/components/alert/alert.html' },
            { text: 'Avatar group', link: '/components/avatar-group/avatar-group.html' },
            { text: 'Avatar', link: '/components/avatar/avatar.html' },
            { text: 'Badge', link: '/components/badge/badge.html' },
            { text: 'Breadcrumbs', link: '/components/breadcrumbs/breadcrumbs.html' },
            { text: 'Button group', link: '/components/button-group/button-group.html' },
            { text: 'Button', link: '/components/button/button.html' },
            { text: 'Card', link: '/components/card/card.html' },
            { text: 'Collapse', link: '/components/collapse/collapse.html' },
            { text: 'Dialog', link: '/components/dialog/dialog.html' },
            { text: 'Divider', link: '/components/divider/divider.html' },
            { text: 'Drawer', link: '/components/drawer/drawer.html' },
            // {
            //   text: 'Forms & Input',
            //   items: [
            //     { text: 'Form', link: '/components/form/form.html' },
            //     { text: 'Checkbox', link: '/components/checkbox/checkbox.html' },
            //     { text: 'Radio', link: '/components/radio/radio.html' },
            //     { text: 'Input', link: '/components/input/input.html' },
            //     // { text: 'Password', link: '/components/input/password.html' },
            //     // { text: 'Number', link: '/components/number-input/number-input.html' },
            //     // { text: 'Select', link: '/components/select/select.html' },
            //     // { text: 'Textarea', link: '/components/textarea/textarea.html' },
            //     // { text: 'Upload', link: '/components/upload/upload.html' },
            //   ],
            // },
            { text: 'List', link: '/components/list/list.html' },
            { text: 'Link', link: '/components/link/link.html' },
            { text: 'Loading Bar', link: '/components/loading-bar/loading-bar.html' },
            { text: 'Menu', link: '/components/menu/menu.html' },
            { text: 'Menu Dropdown', link: '/components/menu-dropdown/menu-dropdown.html' },
            { text: 'Nav', link: '/components/nav/nav.html' },
            { text: 'Paging', link: '/components/paging/paging.html' },
            { text: 'Popover', link: '/components/popover/popover.html' },
            { text: 'Progress Bar', link: '/components/progress-bar/progress-bar.html' },
            { text: 'Scroll up', link: '/components/scroll-up/scroll-up.html' },
            { text: 'Slider', link: '/components/slider/slider.html' },
            { text: 'Spinner', link: '/components/spinner/spinner.html' },
            { text: 'Switch', link: '/components/switch/switch.html' },
            { text: 'Tabs', link: '/components/tabs/tabs.html' },
            { text: 'Tag', link: '/components/tag/tag.html' },
            { text: 'Toast', link: '/components/toast/toast.html' },
            { text: 'Tooltip', link: '/components/tooltip/tooltip.html' },
          ],
        },
        {
          text: 'Pending',
          collapsible: true,
          items: [
            { text: 'Tray', link: '/components/tray/tray.html' },
            { text: 'Theme', link: '/components/theme/theme.html' },
            { text: 'Transition', link: '/components/transition/transition.html' },
            { text: 'Routing', link: '/components/routing/routing.html' },
            { text: 'Table', link: '/components/table/table.html' },
            { text: 'Comment', link: '/components/comment/comment.html' },
          ],
        },
      ],
      '/templates/': [
        {
          text: 'Templates',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/templates/' },
          ],
        },
      ],
    },
    footer: {
      message: 'Built with 💓 in Croatia. Released under the MIT License.',
      copyright: 'Copyright 2022 Wyrd Code',
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
      md.use(markdownItChecbox)
      md.use(markdownDemoPlugin)

      // customizes footnotes for epub books
      // const backrefLabel = 'back to text';

      // const epubRules = {
      //   footnote_ref: ['<a', '<a epub:type="noteref"'],
      //   footnote_open: ['<li', '<li epub:type="footnote"'],
      //   footnote_anchor: ['<a', `<a aria-label="${backrefLabel}"`],
      // }

      // Object.keys(epubRules).map(rule => {
      //   let defaultRender = md.renderer.rules[rule];
      //   md.renderer.rules[rule] = (tokens, idx, options, env, self) => {
      //     return defaultRender(tokens, idx, options, env, self).replace(...epubRules[rule]);
      //   }
      // })

      // // Customize footnotes header
      // md.renderer.rules.footnote_block_open = () => (
      //   '<h4 class="mt-3">Footnotes</h4>\n' +
      //   '<section class="footnotes">\n' +
      //   '<ol class="footnotes-list">\n'
      // )
    }
  },
})
