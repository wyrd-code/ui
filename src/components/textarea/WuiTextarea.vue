<template>
  <div>
    <transition name="fade">
      <div v-show="focus && mask" class="wui-textarea-mask" />
    </transition>
    <span v-if="labelTop" class="wui-input-label">{{ labelTop }}</span>
    <textarea
      ref="textarea"
      :value="modelValue"
      :disabled="disabled"
      class="wui-textarea"
      :placeholder="placeholder"
      :rows="rows"
      :style="{ resize }"
      :class="{ 'z-100': mask }"
      @input="onInput"
      @focus="focus = true"
      @blur="focus = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick, ref, computed } from 'vue'

export default defineComponent({
  name: 'WuiTextarea',
  props: {
    disabled: Boolean,
    resizable: Boolean,
    resizeOnWrite: Boolean,
    mask: Boolean,
    rows: { type: Number, default: 4 },
    placeholder: {
      type: String,
      default: null,
    },
    modelValue: {
      type: String,
      default: null,
    },
    labelTop: {
      type: String,
      default: null,
    },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    const textarea = ref(null)
    const focus = ref(false)

    const resize = computed(() =>
      props.resizable === true ? 'vertical' : 'none'
    )

    function onInput(e: InputEvent | any) {
      const target = e.target as HTMLTextAreaElement
      emit('update:model-value', target.value)

      if (props.resizeOnWrite) {
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
      }
    }

    onMounted(async () => {
      if (props.resizeOnWrite) {
        await nextTick()
        ;(textarea.value! as HTMLTextAreaElement).style.height =
          (textarea.value! as HTMLTextAreaElement).scrollHeight + 'px'
      }
    })

    return { textarea, onInput, resize, focus }
  },
})
</script>

<style lang="css" scoped>
@import url('textarea.css');
</style>
