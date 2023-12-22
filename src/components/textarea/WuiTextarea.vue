<template>
  <textarea
    :id="id"
    ref="textarea"
    :value="modelValue"
    :disabled="disabled"
    class="wui-textarea"
    :placeholder="placeholder"
    :rows="rows"
    :style="{ resize }"
    @input="onInput"
    @focus="focus = true"
    @blur="focus = false"
  />
</template>

<script lang="ts" setup>
import { onMounted, nextTick, ref, computed } from 'vue'

import { WUI_TEXTAREA_PROPS } from '@/components/textarea/textarea'

const props = defineProps(WUI_TEXTAREA_PROPS)
const emit = defineEmits(['update:modelValue'])

const textarea = ref(null)
const focus = ref(false)

const resize = computed(() => (props.resizable === true ? 'vertical' : 'none'))

function onInput(e: InputEvent | any) {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)

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
</script>

<style lang="css">
@import url('textarea.css');
</style>
