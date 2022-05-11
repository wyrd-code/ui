<template>
  <div :class="[isFocused ? 'border-primary-300' : '', classNames]">
    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script lang="ts">
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { useEditor, Editor, EditorContent } from '@tiptap/vue-3'
import { defineComponent, ref, toRefs, onBeforeUnmount, watch, Ref } from 'vue'

import IframeExtension from './tiptapIframeExtension'

export default defineComponent({
  components: {
    EditorContent,
  },
  props: {
    value: {
      type: String,
      default: '<p></p>',
    },
    placeholder: {
      type: String,
      default: '...',
    },
    classNames: {
      type: String,
      default: '',
    },
  },
  emits: ['changed'],
  setup(props, { emit }) {
    let editor = ref<any>(undefined as unknown as Editor)
    const { value: content, placeholder } = toRefs(props)
    const isFocused = ref(false)

    if (typeof document !== 'undefined') {
      editor = useEditor({
        content: content.value || '<p></p>',
        extensions: [
          StarterKit,
          Image,
          Link,
          IframeExtension,
          Placeholder.configure({
            placeholder: placeholder.value,
          }),
        ],
        onUpdate: () => {
          emit('changed', {
            json: editor.value.getJSON(),
            html: editor.value.getHTML(),
          })
        },
        onFocus: () => {
          isFocused.value = true
        },
        onBlur: () => {
          isFocused.value = false
        },
        editorProps: {
          attributes: {
            class: 'bg-white',
          },
        },
      }) as Ref<Editor>

      watch(
        content,
        (val) => {
          if (editor.value && val !== editor.value.getHTML()) {
            editor.value.commands.setContent(val)
          }
        },
        {
          immediate: true,
        }
      )

      onBeforeUnmount(() => {
        if (editor.value) {
          editor.value.destroy()
        }
      })
    }

    const embedDialogOpen = ref(false)
    const embedDialogRemoteUrl = ref('')
    const embedDialogAdd = () => {
      const extractYoutubeVideoIdFromUrl = (url: string) => {
        // eslint-disable-next-line
          const regExpYT = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        var match = url.match(regExpYT)
        if (match && match[2].length === 11) {
          return match[2]
        } else {
          return false
        }
      }
      const videoId = extractYoutubeVideoIdFromUrl(embedDialogRemoteUrl.value)
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`
        editor.value.chain().focus().setIframe({
          src: embedUrl,
        })
      }
      embedDialogOpen.value = false
    }

    const imageDialogOpen = ref(false)
    const imageDialogRemoteUrl = ref('')

    const imageDialogInsertUploadedMedia = (
      media: any // TODO: add MediaExpanded interface
    ) => {
      if (media.file && media.file.url) {
        editor.value
          .chain()
          .focus()
          .setImage({
            src: media.file.url,
          })
          .run()
      }
      imageDialogOpen.value = false
    }
    const imageDialogAddRemoteImage = () => {
      const url = imageDialogRemoteUrl.value
      if (url && url.length) {
        editor.value
          .chain()
          .focus()
          .setImage({
            src: url,
          })
          .run()
      }
    }

    const setLink = () => {
      if (!window) {
        return
      }

      const url = window.prompt('URL')
      if (url) {
        editor.value
          .chain()
          .focus()
          .setLink({
            href: url,
          })
          .run()
      }
    }

    const focusEditor = () => {
      editor.value?.commands.focus()
    }

    const clearContent = () => {
      editor.value?.commands.clearContent(true)
      editor.value?.commands.blur()
    }

    return {
      editor,
      setLink,
      isFocused,
      imageDialogOpen,
      imageDialogAddRemoteImage,
      imageDialogRemoteUrl,
      imageDialogInsertUploadedMedia,
      embedDialogOpen,
      embedDialogRemoteUrl,
      embedDialogAdd,
      focusEditor,
      clearContent,
    }
  },
})
</script>

<style lang="postcss" scoped>
/* https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md */

::v-deep(.editor__content .ProseMirror) {
  @apply bg-white px-3 py-2 w-full rounded border border-gray-300 hover:border-blue-300 focus:outline-none focus:border-blue-300 z-0 outline-none text-lg;
}
::v-deep(.ProseMirror p.is-editor-empty:first-child::before) {
  content: attr(data-placeholder);
  float: left;
  color: #a8a29e;
  pointer-events: none;
  height: 0;
}
::v-deep(.editor__content h1),
::v-deep(.editor__content h2),
::v-deep(.editor__content h3),
::v-deep(.editor__content h4),
::v-deep(.editor__content h5) {
  @apply text-gray-500;
}
::v-deep(.editor__content ul) {
  @apply list-disc p-0 pl-6 m-0 mb-4;
}
::v-deep(.editor__content ol) {
  @apply list-decimal p-0 pl-6 m-0 mb-4;
}
::v-deep(.editor__content ul > li),
::v-deep(.editor__content ol > li) {
  @apply pl-2;
}
::v-deep(.editor__content blockquote) {
  @apply bg-gray-200 border-gray-300 border-l-8 px-4 py-1 text-left;
}
</style>
