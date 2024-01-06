<template>
  <form
    class="wui-form"
    novalidate
    @submit.prevent
  >
    <slot
      name="header"
      :form="form"
    />
    <slot :form="form" />
    <slot
      name="actions"
      :form="form"
    />
  </form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import type { FormSubmitHandler } from './form.types'
import { useForm } from './useForm'

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
  onSubmit: {
    type: Function as PropType<FormSubmitHandler>,
    default: () => {},
  },
  onSuccess: {
    type: Function as PropType<FormSubmitHandler>,
    default: () => {},
  },
  onReset: {
    type: Function as PropType<FormSubmitHandler>,
    default: () => {},
  },
})

const emit = defineEmits(['update:modelValue'])

const form = useForm(props, emit)
</script>

<style lang="css">
@import url('./form.css');
</style>
