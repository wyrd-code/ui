<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class=""
      v-html="contentToDisplay"
    />
    <p
      v-if="trimText"
      class="bg-red-50"
    >
      <button
        class="btn btn-outline-primary block w-full mt-4"
        @click="() => showFullText = true"
      >
        Prikaži cijeli sadržaj
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import clip from "text-clipper";
import { defineComponent, ref, computed, toRefs } from 'vue'

export default defineComponent({
  name: 'WuiTextClipped',
  props: {
    content: {
      type: String,
      required: true,
    },
    limitChars: {
      type: Number,
      default: 2000,
    },
    maxLines: {
      type: Number,
      default: 10,
    },
    isHtml: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { content, limitChars, isHtml, maxLines } = toRefs(props)
    const showFullText = ref(false)
    const trimText = computed(() => !showFullText.value && content.value.length > limitChars.value)

    const contentToDisplay = computed(() => {
      if (showFullText.value) {
        return content.value
      }
      return clip(content.value, limitChars.value, {
        html: isHtml.value,
        maxLines: maxLines.value,
      });
    })

    return {
      contentToDisplay,
      trimText,
      showFullText,
    }
  },
})
</script>
