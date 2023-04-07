let counter = 0

export const uniqueId = (prefix: string = 'wui_id_') =>
  `wui_id_${prefix}-${counter++}`
