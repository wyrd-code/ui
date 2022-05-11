import { Node, Command, mergeAttributes } from '@tiptap/core'

export interface IframeOptions {
  allowFullscreen: boolean
  HTMLAttributes: {
    [key: string]: any
  }
}

declare module '@tiptap/core' {
  interface Commands {
    iframe: {
      /**
       * Add an iframe
       */
      setIframe: (options: { src: string }) => Command
    }
  }
}

export default Node.create<IframeOptions>({
  name: 'iframe',
  group: 'block',
  draggable: true,
  selectable: false,
  addOptions() {
    return {
      allowFullscreen: true,
      HTMLAttributes: {
        frameborder: 0,
        allowfullscreen: true,
        allow:
          'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
        width: '560',
        height: '315',
        src: '',
        class: 'embed-container',
      },
    }
  },
  addAttributes() {
    return {
      src: {
        default: null,
      },
      frameborder: {
        default: 0,
      },
    }
  },
  parseHTML() {
    return [
      {
        tag: 'iframe[src]',
      },
    ]
  },
  renderHTML({ HTMLAttributes }) {
    return [
      'iframe',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ]
  },
  addCommands() {
    return {
      setIframe:
        (options: { src: string }) =>
        ({ tr, dispatch }) => {
          const { selection } = tr
          const node = this.type.create(options)

          if (dispatch) {
            tr.replaceRangeWith(selection.from, selection.to, node)
          }

          return true
        },
    }
  },
})
