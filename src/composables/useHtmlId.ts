let idNumber = 0
const prefix = 'wui_id_'

export const useHtmlId = () => `${prefix}${++idNumber}`
