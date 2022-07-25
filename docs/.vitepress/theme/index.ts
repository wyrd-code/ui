import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import './custom.css'

import ColorDisplayGrid from '~/components/docs/ColorDisplayGrid.vue'
import ColorGrays from '~/components/docs/ColorGrays.vue'
import ColorsGraysNaturalPairs from '~/components/docs/ColorsGraysNaturalPairs.vue'
import ColorsWhiteTextScales from '~/components/docs/ColorsWhiteTextScales.vue'
import ColorsBlackTextScales from '~/components/docs/ColorsBlackTextScales.vue'
import DocsNote from '~/components/docs/DocsNote.vue'
import DocsDescription from '~/components/docs/DocsDescription.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ColorDisplayGrid', ColorDisplayGrid)
    app.component('ColorGrays', ColorGrays)
    app.component('ColorsWhiteTextScales', ColorsWhiteTextScales)
    app.component('ColorsBlackTextScales', ColorsBlackTextScales)
    app.component('ColorsGraysNaturalPairs', ColorsGraysNaturalPairs)
    app.component('DocsDescription', DocsDescription)
    app.component('DocsNote', DocsNote)
  }
}
