// import { h } from 'vue'

import DefaultTheme from 'vitepress/theme'
import './style/vars.css'

// eslint-disable-next-line import/no-unresolved
import 'uno.css'

import ColorDisplayGrid from './components/ColorDisplayGrid.vue'
import ColorGrays from './components/ColorGrays.vue'
import ColorsGraysNaturalPairs from './components/ColorsGraysNaturalPairs.vue'
import ColorsWhiteTextScales from './components/ColorsWhiteTextScales.vue'
import ColorsBlackTextScales from './components/ColorsBlackTextScales.vue'
import DocsNote from './components/DocsNote.vue'
import DocsDescription from './components/DocsDescription.vue'

export default {
  ...DefaultTheme,
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     'home-features-after': () => h(HomeSponsors),
  //     'aside-ads-before': () => h(AsideSponsors)
  //   })
  // },
  enhanceApp({ app }) {
    app.component('ColorDisplayGrid', ColorDisplayGrid)
    app.component('ColorGrays', ColorGrays)
    app.component('ColorsWhiteTextScales', ColorsWhiteTextScales)
    app.component('ColorsBlackTextScales', ColorsBlackTextScales)
    app.component('ColorsGraysNaturalPairs', ColorsGraysNaturalPairs)
    app.component('DocsDescription', DocsDescription)
    app.component('DocsNote', DocsNote)
  },
}
