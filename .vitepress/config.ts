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
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Guide', link: '/docs/guide/' },
      { text: 'Patterns', link: '/docs/patterns/patterns.html' },
      { text: 'Components', link: '/components/components.html' },
      { text: 'Templates', link: '/templates/templates.html' },
      { text: `v${version}`, link: '/CHANGELOG.html' },
      { text: 'Roadmap', link: '/ROADMAP.html' },
    ],
    sidebar: {
      '/docs/guide/': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/docs/guide/' },
            { text: 'Getting started', link: '/docs/guide/getting-started' },
            { text: 'Accessibility', link: '/docs/guide/a11y.html' },
            { text: 'Typography Preview', link: '/docs/guide/typography-preview' },
            { text: 'Styleguide', link: '/docs/guide/styleguide' },
          ],
        },
        {
          text: 'Architecture',
          collapsed: false,
          items: [
            { text: 'Architecture', link: '/docs/guide/architecture' },
            { text: 'Atomic design', link: '/docs/guide/design-system/atomic-design' },
          ],
        },
        {
          text: 'Design system',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/docs/guide/design-system/' },
            {
              text: 'Tokens',
              items: [
                { text: 'Design Tokens', link: '/docs/guide/design-system/tokens' },
                { text: 'Elevation', link: '/docs/guide/design-system/elevation' },
                { text: 'Shape', link: '/docs/guide/design-system/shape' },
                { text: 'Spacing', link: '/docs/guide/design-system/spacing' },
                { text: 'Tokens', link: '/docs/guide/design-system/tokens' },
                { text: 'Typography', link: '/docs/guide/design-system/typography' },
              ],
            },
            {
              text: 'Color theory',
              items: [
                { text: 'Color', link: '/docs/guide/design-system/color' },
                { text: 'Color scales', link: '/docs/guide/design-system/color-scales' },
                { text: 'Understanding the scale', link: '/docs/guide/design-system/understanding-the-scale' },
                { text: 'Palette composition', link: '/docs/guide/design-system/color-palette-composition' },
              ],
            },
            {
              text: 'Other',
              items: [
                { text: 'Animation', link: '/docs/guide/design-system/animation' },
                { text: 'Haptics', link: '/docs/guide/design-system/haptics' },
                { text: 'Sound', link: '/docs/guide/design-system/sound' },
                { text: 'Iconography', link: '/docs/guide/design-system/iconography' },
                { text: 'Theme editor', link: '/docs/guide/design-system/theme-editor' },
              ],
            },
          ],
        },
      ],
      '/docs/patterns/': [
        {
          text: 'Patterns',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/docs/patterns/' },
            { text: 'Transitions', link: '/docs/patterns/transitions.html' },
          ],
        },
        {
          text: 'Composables',
          collapsed: false,
          items: [
            { text: 'useRouterLink', link: '/docs/patterns/use-router-link.html' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Components',
          link: '/components/components.html',
          items: [
            { text: 'Accordion', link: '/components/accordion/accordion.html' },
            { text: 'Alert', link: '/components/alert/alert.html' },
            { text: 'Avatar group', link: '/components/avatar-group/avatar-group.html' },
            { text: 'Avatar', link: '/components/avatar/avatar.html' },
            { text: 'Badge', link: '/components/badge/badge.html' },
            { text: 'Breadcrumbs', link: '/components/breadcrumbs/breadcrumbs.html' },
            { text: 'Button group', link: '/components/button-group/button-group.html' },
            { text: 'Button', link: '/components/button/button.html' },
            { text: 'Card', link: '/components/card/card.html' },
            { text: 'Collapsible', link: '/components/collapsible/collapsible.html' },
            { text: 'Dialog', link: '/components/dialog/dialog.html' },
            { text: 'Divider', link: '/components/divider/divider.html' },
            { text: 'Drawer', link: '/components/drawer/drawer.html' },
            { text: 'Dropdown', link: '/components/dropdown/dropdown.html' },
            {
              text: 'Forms & Input',
              items: [
                { text: 'Form', link: '/components/form/form.html' },
                { text: 'Input', link: '/components/input/input.html' },
                { text: 'Checkbox', link: '/components/checkbox/checkbox.html' },
                { text: 'Radio', link: '/components/radio/radio.html' },
                { text: 'Switch', link: '/components/switch/switch.html' },
                { text: 'Select', link: '/components/select/select.html' },
                { text: 'Textarea', link: '/components/textarea/textarea.html' },
                // { text: 'Upload', link: '/components/upload/upload.html' },
              ],
            },
            { text: 'Link', link: '/components/link/link.html' },
            { text: 'List', link: '/components/list/list.html' },
            { text: 'Loading Bar', link: '/components/loading-bar/loading-bar.html' },
            { text: 'Menu Dropdown', link: '/components/menu-dropdown/menu-dropdown.html' },
            { text: 'Menu', link: '/components/menu/menu.html' },
            { text: 'Nav', link: '/components/nav/nav.html' },
            { text: 'Paging', link: '/components/paging/paging.html' },
            { text: 'Popover', link: '/components/popover/popover.html' },
            { text: 'Progress Bar', link: '/components/progress-bar/progress-bar.html' },
            { text: 'Scroll up', link: '/components/scroll-up/scroll-up.html' },
            { text: 'Slider', link: '/components/slider/slider.html' },
            { text: 'Spinner', link: '/components/spinner/spinner.html' },
            { text: 'Tabs', link: '/components/tabs/tabs.html' },
            { text: 'Tag', link: '/components/tag/tag.html' },
            { text: 'Toast', link: '/components/toast/toast.html' },
            { text: 'Tooltip', link: '/components/tooltip/tooltip.html' },
            {
              text: 'Pending',
              collapsed: false,
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
        },
      ],
      '/templates/': [
        {
          text: 'Templates',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/templates/' },
            {
              text: 'Auth',
              collapsed: false,
              items: [
                { text: 'Layouts', link: '/templates/auth/layouts/layouts.html' },
                { text: 'Forms', link: '/templates/auth/forms/forms.html' },
              ],
            },
            { text: 'Header', link: '/templates/header/header.html' },
            { text: 'Footer', link: '/templates/footer/footer.html' },
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
  transformPageData(pageData) {
    if (pageData.frontmatter.sidebar != null) return
    pageData.frontmatter.sidebar = pageData.frontmatter.layout !== 'TemplateLayout'
  }
})
