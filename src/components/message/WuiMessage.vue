<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div
      v-show="show"
      :style="{ top: `${top}px` }"
      class="wui-message"
      :class="[`wui-message--${type}`]"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <div class="wui-message-icon" :class="icon || computedIcon" />
      <span class="wui-message-text">{{ text }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Colors } from '../../models/enums'
import type { Timeout } from '../../ui.types'

const typeIcon: { [key in Colors]?: string } = {
  [Colors.PRIMARY]: 'icon-ph-info_outline',
  [Colors.SUCCESS]: 'icon-ph-done',
  [Colors.WARNING]: 'icon-ph-error_outline',
  [Colors.DANGER]: 'icon-ph-clear',
}

export default defineComponent({
  name: 'WuiMessage',
  data() {
    return {
      id: null,
      show: false,
      text: '',
      icon: '',
      duration: 4000,
      onClose: () => {},
      top: 6,
      type: Colors.PRIMARY,
      timer: null as unknown as Timeout,
    }
  },
  computed: {
    computedIcon(): string {
      return typeIcon[this.type] as string
    },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    destroy() {
      this.$el.parentNode!.removeChild(this.$el)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.show = false
          if (this.onClose) {
            this.onClose()
          }
        }, this.duration)
      }
    },

    clearTimer() {
      clearTimeout(this.timer!)
    },
  },
})
</script>

<style lang="css" scoped>
@import url('message.css');
</style>
