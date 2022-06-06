<template>
  <span
    :class="[
      'wui-tag',
      type && `wui-tag--${type}`,
      filled && `wui-tag--${type}--filled`,
    ]"
  >
    <slot />
    <span
      v-if="closable"
      name="clear"
      class="wui-tag-close icon-ph-x"
      @click="close"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Colors } from '../../models/enums'
import { ALLOWED_TYPES } from './constants'

export default defineComponent({
  name: 'WuiTag',
  props: {
    type: {
      type: String,
      default: Colors.NEUTRAL,
      validator: (value: Colors) => ALLOWED_TYPES.includes(value),
    },
    closable: { type: Boolean },
    filled: { type: Boolean },
  },
  emits: ['close'],
  setup(props, { emit }) {
    function close() {
      if (!props.closable) {
        return
      }
      emit('close')
    }

    return { close }
  },
})
</script>

<style lang="css" scoped>
@import url('tag.css');
</style>
