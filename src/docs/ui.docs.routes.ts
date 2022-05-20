import { buildRouteItemFromPageDefinition } from '../helpers'
import { pages } from './ui.docs.pages'

export const docsRoutes = pages.map((p) =>
  buildRouteItemFromPageDefinition(p, 'ui')
)
