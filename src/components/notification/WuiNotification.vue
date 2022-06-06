<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div
      v-show="show"
      :style="positionPx"
      class="wui-notification"
      :class="[`wui-notification--${type}`]"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <div
        class="wui-notification-left"
        :style="{
          'background-image': backgroundImage,
          'background-color': emoji || image ? '#fdfdfd' : typeColor,
          'border-right': (emoji || image) && '1px solid #dfdfdf',
        }"
      >
        <span
          v-if="!image && !emoji"
          class="wui-notification-icon"
          :class="icon || typeIcon"
        />
        <span v-if="emoji && !image" class="wui-notification-emoji">{{
          emoji
        }}</span>
      </div>
      <div class="wui-notification-description-block">
        <span class="wui-notification-close">
          <span class="text-xl icon-ph-x" @click="destroy" />
        </span>

        <span v-if="title" class="wui-notification-description-block-title">{{
          title
        }}</span>
        <span>{{ description }}</span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { typeIcon } from '../../components/message/constants'
import { Colors, Positions } from '../../models/enums'
import type { Timeout } from '../../ui.types'

const colorTypes: { [key in Colors]?: string } = {
  [Colors.PRIMARY]: '#3051ff',
  [Colors.SUCCESS]: '#07d85b',
  [Colors.DANGER]: '#F93155',
  [Colors.WARNING]: '#ffba00',
}

export default defineComponent({
  name: 'WuiNotification',
  data() {
    return {
      id: null,
      show: false,
      description: '',
      title: '',
      icon: '',
      emoji: '',
      image: '',
      duration: 5000,
      position: {} as { [key: string]: string },
      placement: Positions.TR,
      type: Colors.PRIMARY,
      timer: null as unknown as Timeout,
      onClose: () => {},
    }
  },
  computed: {
    backgroundImage(): string {
      return this.image ? `url(${this.image})` : ''
    },
    typeColor(): string {
      if (this.emoji) {
        return '#fbfbfb'
      }
      return colorTypes[this.type]!
    },
    positionPx() {
      const posPx: { [key: string]: string } = {}
      for (const key in this.position) {
        if (Object.prototype.hasOwnProperty.call(this.position, key)) {
          posPx[key] = this.position[key] + 'px'
        }
      }
      return posPx
    },
    typeIcon(): string {
      return typeIcon[this.type]!
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
        }, this.duration) as any
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },
  },
})
</script>

<style lang="css" scoped>
@import url('notification.css');
</style>
