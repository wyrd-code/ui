<template>
  <WuiFormFieldWrapper
    class="wui-form-text"
    :label="label"
    :id="id"
    :help="help"
    :validation="validation"
  >
    <WuiInput
      :type="type"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :prefix="prefix"
      v-model="value"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { inputProps } from '@/components/form/form.props'
import { useFormInstance } from '@/components/form/useFormInstance'
import WuiFormFieldWrapper from '@/components/form/WuiFormFieldWrapper.vue'
import WuiInput from '@/components/input/WuiInput.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    WuiFormFieldWrapper,
    WuiInput,
  },
  props: {
    ...inputProps,
    type: {
      type: String,
      default: 'text',
      validator: (value: string) => ['text'].includes(value),
    },
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    prefixIcon: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const form = useFormInstance()
    const value = form.getFieldValue<string | number | undefined>(props.name)

    return {
      form,
      value,
    }
  }
})
</script>
