import DefaultTheme from 'vitepress/theme'
import { WyrdUI } from '../../src/plugin'
import './customize-vitepress.css'

// eslint-disable-next-line import/no-unresolved
import 'uno.css'

import WuiCodeDemo from '../../src/components/code-demo/WuiCodeDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('WuiCodeDemo', WuiCodeDemo)
    app.use(WyrdUI)
    // app.component('dynamic-link', {
    //   template: '<component v-bind:is="transformed"></component>',
    //   props: ['text'],
    //   computed: {
    //     transformed () {
    //       return {
    //         template: (this  as any).text,
    //         props: (this  as any).$options.props
    //       }
    //     }
    //   }
    // })
  },
}
