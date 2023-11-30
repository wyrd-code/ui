import escapeHtml from 'escape-html'
import path from 'path'
import fs from 'fs'
import mdContainer from 'markdown-it-container'
import { getHighlighter } from 'shiki'

const preRE = /^<pre.*?>/

function wrap(code: string, lang: string): string {
  if (lang === 'text') {
    code = escapeHtml(code)
  }

  return code.replace(preRE, '<pre v-pre>')
}

let shikiHighlighter

getHighlighter({
  themes: ['material-palenight'],
}).then(highlighter => {
  shikiHighlighter = highlighter
})

const highlight = (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  if (lang === 'text') {
    return wrap(str, 'text')
  }

  const code = shikiHighlighter.codeToHtml(str, { lang })
  return wrap(code, lang)
}

export const markdownDemoPlugin = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        const sourceFile = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]

        const filePath = path.resolve(process.cwd(), 'src', `${sourceFile}.vue`)
        let source = ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(filePath, 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<WuiCodeDemo code="${encodeURIComponent(highlight(source, 'vue'))}" raw-code="${encodeURIComponent(
          source
        )}" >`
      } else {
        return '</WuiCodeDemo>'
      }
    },
  })
}
