<template>
  <teleport to="body">
    <FocusLoop :is-visible="modelValue">
      <WuiTransition name="fade" :duration="300">
        <div
          v-show="modelValue"
          ref="mask"
          class="wui-dialog-mask"
          @click.self="maskClick"
          @keyup.esc="maskClick"
        />
      </WuiTransition>

      <WuiTransition name="zoom">
        <div
          v-show="modelValue"
          class="wui-dialog-wrapper"
          :class="{ active: modelValue }"
          @keydown.esc.prevent="onEsc"
          @click.self="maskClick"
        >
          <div
            ref="dialog"
            class="wui-dialog"
            :class="classNames"
            tabindex="-1"
          >
            <span class="wui-dialog-close">
              <slot v-if="closable" name="close" :close="close">
                <WuiButton
                  variant="secondary"
                  shape="round"
                  icon
                  @click="close"
                >
                  <span class="icon-ph-x-bold" />
                </WuiButton>
              </slot>
            </span>

            <div
              class="wui-dialog-body"
              :role="closable ? 'dialog' : 'alertdialog'"
              :aria-modal="modelValue"
              :aria-label="title"
              v-bind="$attrs"
            >
              <div v-if="$slots.media" class="wui-dialog-media">
                <slot name="media" :close="close" />
              </div>

              <div v-if="$slots.header || title" class="wui-dialog-header">
                <slot name="header" :close="close">
                  <h3 class="text-lg font-bold">{{ title }}</h3>
                </slot>
              </div>

              <div
                v-if="$slots.default || description"
                class="wui-dialog-content"
              >
                <slot :close="close">
                  <div>{{ description }}</div>
                </slot>
              </div>

              <div v-if="$slots.actions" class="wui-dialog-footer">
                <slot name="actions" :close="close" />
              </div>
            </div>
          </div>
        </div>
      </WuiTransition>
    </FocusLoop>
  </teleport>
</template>

<script lang="ts">
import { FocusLoop } from '@vue-a11y/focus-loop'
import {
  defineComponent,
  watch,
  ref,
  nextTick,
  getCurrentInstance,
  computed,
} from 'vue'

import { WUI_DIALOG_SIZE_DEFAULT, WUI_DIALOG_SIZES } from './dialog'

const disableBodyScroll = () => {
  document.body.style.overflowY = 'hidden'
}

const enableBodyScroll = () => {
  document.body.style.overflowY = 'auto'
}

export default defineComponent({
  name: 'WuiDialog',
  components: { FocusLoop },
  directives: {
    focus,
  },
  inheritAttrs: false,
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: null },
    description: { type: String, default: null },
    pinned: { type: Boolean, default: false },
    closable: { type: Boolean, default: true },
    closableMask: { type: Boolean, default: true },
    size: {
      type: String,
      default: WUI_DIALOG_SIZE_DEFAULT,
      validator: (value: string) => WUI_DIALOG_SIZES.includes(value),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const mask = ref<HTMLElement | null>(null)
    const dialog = ref<HTMLElement | null>(null)
    const appInstance = getCurrentInstance()

    function close() {
      emit('update:modelValue', false)
    }

    function maskClick() {
      if (props.closableMask) {
        onEsc()
      }
    }

    function onEsc() {
      if (props.closable) {
        close()
      }
    }

    watch(
      () => props.modelValue,
      async (active: boolean) => {
        await nextTick()
        const dialogsList =
          appInstance!.appContext.config.globalProperties.$WyrdUI?.dialogs || []

        function onActiveDialog() {
          dialogsList.push(dialog.value)

          dialogsList
            .slice(0, dialogsList.indexOf(dialog.value))
            .forEach((dialogEl: HTMLElement) => {
              if (dialogEl.style.transform !== '') {
                const scaleAndTranslate = dialogEl.style.transform
                  .match(/[-+]?[0-9]*\.?[0-9]+/g)
                  ?.map((ittt) => parseFloat(ittt))
                dialogEl.style.transform = `scale(${
                  scaleAndTranslate![0] - 0.05
                }) translateY(${scaleAndTranslate![1] - 5}%)`
              } else {
                dialogEl.style.transform = `scale(0.9) translateY(5%)`
              }
            })

          disableBodyScroll()

          dialog.value?.focus()
        }

        function onInactiveDialog() {
          dialogsList.splice(dialogsList.indexOf(dialog.value), 1)

          dialogsList.forEach((dialogEl: HTMLElement, i: number) => {
            if (i === dialogsList.length - 1) {
              dialogEl.style.transform = ''
              return
            }
            const scaleAndTranslate = dialogEl.style.transform
              .match(/[-+]?[0-9]*\.?[0-9]+/g)
              ?.map((val) => parseFloat(val))
            dialogEl.style.transform = `scale(${
              scaleAndTranslate![0] + 0.05
            }) translateY(${scaleAndTranslate![1] + 5}%)`
          })

          if (dialog.value) {
            dialog.value.style.transform = ''
          }

          if (!dialogsList.length) {
            enableBodyScroll()
          }
        }

        if (active) {
          onActiveDialog()
        } else {
          onInactiveDialog()
        }
      }
    )

    const classNames = computed(() => ({
      'wui-dialog--pinned': props.pinned,
      [`wui-dialog--size-${props.size}`]: true,
    }))

    return {
      classNames,
      mask,
      dialog,
      maskClick,
      onEsc,
      close,
    }
  },
})
</script>

<style lang="css">
@import url('dialog.css');
</style>
