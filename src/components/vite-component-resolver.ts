export const WuiComponentResolver = (componentName) => {
  if (componentName.startsWith('Wui')) {
    return { name: componentName, from: 'wyrd-ui' }
  }
}
