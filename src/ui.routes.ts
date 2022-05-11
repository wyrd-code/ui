import { pages } from './docs/pages'
import { buildRouteItemFromPageDefinition } from './ui.helpers'

export default pages.map((p) => buildRouteItemFromPageDefinition(p, 'ui'))
