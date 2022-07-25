import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'WyrdUI',
  description: 'Vite, Vue & UnoCSS based user interface library',
  themeConfig: {
    logo: '/wyrd.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wyrd-code/ui' },
    ],
    editLink: {
      pattern: 'https://github.com/wyrd-code/ui/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
          {
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' },
            ],
          },
        ],
      },
      { text: 'Changelog', link: 'https://github.com/...' },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Install', link: '/guide/install' },
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
