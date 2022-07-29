<template>
  <div class="grid grid-cols-2 gap-4">
    <textarea
      class=""
      :class="classNames"
      :value="value"
      :name="name"
      @change="handleChange"
    />

    <!-- eslint-disable vue/no-v-html -->
    <div class="prose" :class="classNames" v-html="rendered" />
  </div>
</template>

<script lang="ts">
import MarkdownIt from 'markdown-it'
import { defineComponent, ref, toRefs, watch } from 'vue'

export default defineComponent({
  props: {
    value: {
      default: '',
      type: String,
    },
    classNames: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    breaks: {
      type: Boolean,
      default: true,
    },
    linkify: {
      type: Boolean,
      default: true,
    },
    typographer: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['changed'],
  setup(props, { emit }) {
    const { value, breaks, linkify, typographer } = toRefs(props)
    const rendered = ref('')

    const mdInstance = new MarkdownIt().set({
      breaks: breaks.value,
      linkify: linkify.value,
      typographer: typographer.value,
    })

    const renderMarkdown = () => {
      rendered.value = mdInstance.render(value.value)
    }

    watch([value], renderMarkdown)

    const handleChange = (evt: Event) => {
      emit('changed', (evt.target as HTMLInputElement).value)
    }

    return {
      emit,
      handleChange,
      renderMarkdown,
      rendered,
    }
  },
})
</script>
