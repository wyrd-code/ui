<!--
<template>
  <li :class="classNames" v-bind="wrapperAttributes">
    <component
      :is="tagComputed"
      v-bind="itemAttributes"
      :role="data.role || role"
    >
    </component>
  </li>
</template>
-->

<script lang="ts">
import { h } from 'vue'

export default {
  props: {},
  setup() {
    return () => h('li', ['hello', h('span', 'hello')])
  },
}
</script>
