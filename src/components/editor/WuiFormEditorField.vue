<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
    }"
    class="wui-input-editor"
  >
    <WuiFormEditor
      class="wui-input-editor-inner"
      :model-value="modelValue"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WuiFormEditor from './WuiFormEditor.vue'
// import { wuiFormInputPropsBase } from '../form/field.props'
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'

export default defineComponent({
  components: {
    WuiFormFieldWrapper,
    WuiFormEditor,
  },
  props: {
    // ...wuiFormInputPropsBase,
    schema: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
      default: null,
    },
  },
})
</script>
