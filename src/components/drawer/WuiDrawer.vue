<template>
  <teleport to="body">
    <div
      ref="focusRef"
      class="wui-drawer"
    >
      <transition name="fade">
        <div
          v-show="modelValue && !hideMask"
          class="wui-drawer-mask"
          tabindex="0"
          role="presentation"
          :style="{ cursor: closableMask ? 'pointer' : 'default' }"
          @click.self="maskClick"
          @keyup.esc="maskClick"
        />
      </transition>
      <transition :name="`drop-${transitionSide}`">
        <div
          v-show="modelValue"
          v-bind="$attrs"
          ref="drawerRef"
          :style="{ width }"
          class="wui-drawer-body"
          :class="`wui-drawer-body--${placement}`"
        >
          <slot />
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts">
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  toRefs,
  watch,
} from 'vue'

import { Placement } from '@/domain'

export default defineComponent({
  name: 'WuiDrawer',
  inheritAttrs: false,
  props: {
    modelValue: { type: Boolean, default: false },
    width: { type: String, default: '500px' },
    closableMask: { type: Boolean, default: true },
    hideMask: Boolean,
    placement: {
      type: String,
      default: Placement.Right,
      validator: (value: Placement) =>
        [Placement.Left, Placement.Right].includes(value),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props)
    const appInstance = getCurrentInstance()
    const drawerRef = ref<HTMLElement>()
    const focusRef = ref<HTMLElement>()

    const toggleDrawer = async (active: boolean) => {
      const method = active ? openDrawer : closeDrawer
      return method(getDrawersList())
    }

    const openDrawer = async (drawersList) => {
      drawersList.push(drawerRef.value)
      updateDrawersStack(drawersList, false)
      await nextTick()
      if (!props.hideMask) {
        disableBodyScroll(focusRef.value!, { reserveScrollBarGap: true })
      }
    }

    const closeDrawer = async (drawersList) => {
      drawersList.splice(drawersList.indexOf(drawerRef.value), 1)
      updateDrawersStack(drawersList, true)
      await nextTick()
      if (!props.hideMask) {
        enableBodyScroll(focusRef.value!)
      }
    }

    const getDrawersList = () => {
      return (
        appInstance!.appContext.config.globalProperties.$WyrdUI?.drawers || []
      )
    }
    const updateDrawersStack = (drawersList, closing) => {
      const offset = closing ? 10 : -10
      const scaleDiff = closing ? 0.05 : -0.05
      drawersList
        .slice(0, drawersList.indexOf(drawerRef.value))
        .forEach((drawerEl: HTMLElement) => {
          let scale = 0.9
          let translate = props.placement === Placement.Right ? -15 : 15
          if (drawerEl.style.transform !== '') {
            const scaleAndTranslate = drawerEl.style.transform
              .match(/[-+]?[0-9]*\.?[0-9]+/g)
              ?.map((val) => parseFloat(val))
            scale = scaleAndTranslate![0] + scaleDiff
            translate =
              scaleAndTranslate![1] +
              (props.placement === Placement.Right ? offset : -offset)
          }
          drawerEl.style.transform = `scale(${scale}) translateX(${translate}%)`
        })
    }

    watch(() => modelValue.value, toggleDrawer)

    const maskClick = () => {
      if (props.closableMask) {
        close()
      }
    }

    const close = () => {
      emit('update:modelValue', false)
    }

    const transitionSide = computed(() => {
      return props.placement === Placement.Right
        ? Placement.Left
        : Placement.Right
    })

    return {
      maskClick,
      transitionSide,
      drawerRef,
      focusRef,
    }
  },
})
</script>

<style lang="css">
@import url('drawer.css');
</style>
