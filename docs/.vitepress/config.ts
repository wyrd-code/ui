import { defineConfig } from 'vitepress'

export default defineConfig({
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
    editLink: {
      pattern: 'https://github.com/wyrd-code/ui/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
      { text: 'Changelog', link: 'https://github.com/...' },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'i18n', link: '/guide/i18n' },
          { text: 'Roadmap', link: '/guide/roadmap' },
        ],
      },
      {
        text: 'Styling',
        collapsible: true,
        items: [
          { text: 'Design system', link: '/styling/' },
          { text: 'The scales', link: '/styling/scales' },
          { text: 'Pallete composition', link: '/styling/pallete' },
          { text: 'Themes', link: '/styling/themes' },
        ],
      },
      {
        text: 'Components',
        collapsible: true,
        items: [
          { text: 'Forms & Input', link: '/components/forms-and-input' },
          { text: 'Display', link: '/components/display' },
          { text: 'Feedback', link: '/components/feedback' },
          { text: 'Navigation', link: '/components/navigation' },
          { text: 'Layout', link: '/templates/layouts' },
          { text: 'App', link: '/templates/app' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Wyrd Code',
    },
  },
})
