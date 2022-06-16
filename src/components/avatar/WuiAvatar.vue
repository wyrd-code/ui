<template>
  <span class="wui-avatar" :class="rootClasses" :style="rootStyles">
    <img v-if="src" class="wui-avatar-img" :src="src" alt="" />
    <span v-else-if="name" class="wui-avatar-text">{{ avatarText }}</span>
    <span v-else class="wui-avatar-icon icon-ph-user" />
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { getUpperFirstLettersWords } from '../../helpers/getUpperFirstLettersWords'

export default defineComponent({
  name: 'WuiAvatar',
  props: {
    src: { type: String, default: null },
    color: { type: String, default: null },
    size: { type: String, default: '40px' },
    square: { type: Boolean },
    name: { type: String, default: null },
  },
  setup(props) {
    const avatarText = computed(() => getUpperFirstLettersWords(props.name, 2))
    const totalSize = computed(() => props.size)
    const rootClasses = computed(() => ({
      'wui-avatar--square': props.square,
    }))

    const rootStyles = computed(() => ({
      'background-color': props.color || '',
      'line-height': totalSize.value,
      width: totalSize.value,
      height: totalSize.value,
    }))

    return { rootClasses, rootStyles, avatarText }
  },
})
</script>

<style lang="css" scoped>
@import url('avatar.css');
</style>
