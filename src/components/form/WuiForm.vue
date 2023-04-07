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
  data: {
    type: Object,
    default: null,
  },
  onSubmit: {
    type: Function as PropType<FormSubmitHandler>,
    required: true,
  },
  onSuccess: {
    type: Function as PropType<FormSubmitHandler>,
    required: true,
  },
})

const form = useForm(props)
</script>
