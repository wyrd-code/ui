<template>
  <span class="wui-avatar" :class="classnames">
    <img v-if="src" class="wui-avatar-img" :src="src" alt="" />
    <span v-else-if="label || name" class="wui-avatar-label">{{
      label || avatarText
    }}</span>
    <span v-else class="wui-avatar-placeholder-icon icon-ph-user-fill" />
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { getUpperFirstLettersWords } from '@/utilities'

import { WUI_AVATAR_PROPS } from './avatar'

export default defineComponent({
  name: 'WuiAvatar',
  props: WUI_AVATAR_PROPS,
  setup(props) {
    const avatarText = computed(() => getUpperFirstLettersWords(props.name, 3))
    const classnames = computed(() => ({
      'wui-avatar--square': props.square,
      [`wui-avatar--size-${props.size}`]: props.size,
    }))

    return {
      avatarText,
      classnames,
    }
  },
})
</script>

<style lang="css">
@import url('avatar.css');
</style>
