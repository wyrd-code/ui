<template>
  <div :class="classNames">
    <div v-if="editor" class="menubar">
      <span class="menubar_button_group">
        <button
          class="menubar__button"
          :class="{ active: editor.isActive('bold') }"
          @click="editor.chain().toggleBold().focus().run()"
        >
          <strong>B</strong>
        </button>

        <button
          class="menubar__button"
          :class="{ active: editor.isActive('italic') }"
          @click="editor.chain().toggleItalic().focus().run()"
        >
          <em>I</em>
        </button>

        <button
          class="menubar__button"
          :class="{ active: editor.isActive('strike') }"
          @click="editor.chain().toggleStrike().focus().run()"
        >
          <span class="line-through">str</span>
        </button>
      </span>
      <span class="menubar_button_group">
        <button
          class="menubar__button"
          :class="{
            active: editor.isActive('heading', {
              level: 2,
            }),
          }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          h2
        </button>
        <button
          class="menubar__button"
          :class="{
            active: editor.isActive('heading', {
              level: 3,
            }),
          }"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          h3
        </button>
        <button
          class="menubar__button"
          :class="{
            active: editor.isActive('heading', {
              level: 4,
            }),
          }"
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        >
          h4
        </button>
        <button
          class="menubar__button"
          :class="{
            active: editor.isActive('heading', {
              level: 5,
            }),
          }"
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        >
          h5
        </button>
      </span>

      <span class="menubar_button_group">
        <button class="menubar__button" @click="imageDialogOpen = true">
          <span>Image</span>
        </button>
        <button class="menubar__button" @click="embedDialogOpen = true">
          <span>Embed</span>
        </button>
      </span>
      <WuiModal v-model="imageDialogOpen">
        <WuiUpload
          class="border-b border-gray-300 p-8"
          @uploaded="imageDialogInsertUploadedMedia"
        />
      </WuiModal>

      <WuiModal v-model="embedDialogOpen">
        <p>
          <label> Youtube video url </label>
          <input
            v-model="embedDialogRemoteUrl"
            type="text"
            name="embedUrl"
            class="border rounded-sm border-gray-300 w-full p-2"
          />
        </p>
        <button class="btn btn-primary" @click="embedDialogAdd">
          Insert video
        </button>
      </WuiModal>

      <button
        class="menubar__button"
        :class="{ active: editor.isActive('link') }"
        @click="setLink"
      >
        link
      </button>
      <button
        v-if="editor.isActive('link')"
        class="menubar__button"
        @click="editor.chain().focus().unsetLink().run()"
      >
        remove
      </button>

      <span class="menubar_button_group">
        <button
          class="menubar__button"
          :class="{ active: editor.isActive('blockquote') }"
          @click="editor.chain().toggleBlockquote().focus().run()"
        >
          <span>Blockquote</span>
        </button>

        <button
          class="menubar__button"
          :class="{ active: editor.isActive('bulletList') }"
          @click="editor.chain().toggleBulletList().focus().run()"
        >
          <span>Bullet List</span>
        </button>

        <button
          class="menubar__button"
          :class="{
            active: editor.isActive('orderedList'),
          }"
          @click="editor.chain().toggleOrderedList().focus().run()"
        >
          <span>Number List</span>
        </button>
      </span>

      <span class="menubar_button_group">
        <button
          class="menubar__button"
          :class="{ active: editor.isActive('code') }"
          @click="editor.chain().toggleCode().focus().run()"
        >
          <span>Code</span>
        </button>

        <button
          class="menubar__button"
          :class="{ active: editor.isActive('codeBlock') }"
          @click="editor.chain().toggleCodeBlock().focus().run()"
        >
          <span>Code block</span>
        </button>
      </span>

      <span class="menubar_button_group">
        <button
          class="ml-auto menubar__button"
          @click="editor.chain().focus().undo().run()"
        >
          <span>Undo</span>
        </button>
        <button
          class="menubar__button"
          @click="editor.chain().focus().redo().run()"
        >
          <span>Redo</span>
        </button>
      </span>
    </div>
    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script lang="ts">
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent, Editor } from '@tiptap/vue-3'
import { defineComponent, ref, toRefs, onBeforeUnmount, watch, Ref } from 'vue'

import IframeExtension from './tiptapIframeExtension'

export default defineComponent({
  components: {
    EditorContent,
  },
  props: {
    modelValue: {
      type: String,
      default: '<p></p>',
    },
    classNames: {
      type: String,
      default: '',
    },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    let editor = ref<any>(undefined as unknown as Editor)
    const content = toRefs(props).modelValue

    if (typeof document !== 'undefined') {
      editor = useEditor({
        content: content.value || '<p></p>',
        extensions: [StarterKit, Image, Link, IframeExtension],
        onUpdate: () => {
          emit('update:model-value', editor.value.getHTML())
        },
        editorProps: {
          attributes: {
            class:
              'bg-white text-gray-500 max-w-screen-lg mx-auto p-4 prose-lg focus:outline-none',
          },
        },
      }) as Ref<Editor>
    }

    watch(
      content,
      (val) => {
        if (editor.value?.getHTML && val !== editor.value.getHTML()) {
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

    return {
      editor,
      setLink,
      imageDialogOpen,
      imageDialogAddRemoteImage,
      imageDialogRemoteUrl,
      imageDialogInsertUploadedMedia,
      embedDialogOpen,
      embedDialogRemoteUrl,
      embedDialogAdd,
    }
  },
})
</script>

<style lang="postcss" scoped>
.menubar {
  @apply border bg-gray-200 border-gray-300 -m-2 text-sm mb-2 p-2 pb-0;
}
.menubar__button {
  @apply border rounded-sm bg-gray-100 border-gray-300 mr-1 mb-2 py-1 px-2 text-gray-600;
}
.menubar_button_group {
  @apply mr-2;
}
.menubar_button_group .menubar__button {
  @apply -mr-0;
}
.menubar__button.active {
  @apply border-gray-500 text-gray-800 underline;
}

.editor__content {
  @apply bg-gray-100;
}
.editor__content .ProseMirror {
  @apply outline-none text-base;
}
.editor__content h1,
h2,
h3,
h4,
h5 {
  @apply text-gray-500;
}
.editor__content ul {
  @apply list-disc m-0 mb-4 p-0 pl-6;
}
.editor__content ol {
  @apply list-decimal m-0 mb-4 p-0 pl-6;
}
.editor__content ul > li,
.editor__content ol > li {
  @apply pl-2;
}
.editor__content blockquote {
  @apply bg-gray-200 border-gray-300 border-l-8 text-left py-1 px-4;
}
</style>
