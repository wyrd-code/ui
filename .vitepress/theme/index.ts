import DefaultTheme from 'vitepress/theme'
import { WyrdUI } from '../../src/plugin'
import './customize-vitepress.css'
import 'uno.css'

import WuiCodeDemo from '../../src/components/code-demo/WuiCodeDemo.vue'
import TemplateLayout from './components/TemplateLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WuiCodeDemo', WuiCodeDemo)
    app.component('TemplateLayout', TemplateLayout)
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
