<template>
  <form class="wui-form" novalidate @submit.prevent>
    <slot name="header" :form="form" />
    <slot :form="form" />
    <slot name="footer" :form="form" />
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
    required: false,
  },
  onSuccess: {
    type: Function as PropType<FormSubmitHandler>,
    required: false,
  },
  onReset: {
    type: Function as PropType<FormSubmitHandler>,
    required: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const form = useForm(props, emit)
</script>
