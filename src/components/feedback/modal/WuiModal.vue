<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-show="modelValue"
        v-bind="$attrs"
        ref="modalRef"
        class="wui-modal-mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
      >
        <transition name="drop-top">
          <div v-show="modelValue" class="wui-modal-wrap">
            <div
              class="wui-modal-wrap-inner"
              tabindex="0"
              @click.self="maskClick"
            >
              <div
                ref="modalBody"
                class="wui-modal-body"
                :class="{
                  'wui-modal-body--has-image':
                    $slots.image &&
                    !($slots.header || $slots.body || $slots.actions),
                  [width]:
                    !$slots.image &&
                    ($slots.header || $slots.body || $slots.actions),
                }"
              >
                <slot name="image" />
                <slot />
                <div v-if="$slots.header" class="wui-modal-header">
                  <slot name="header" />
                </div>
                <div v-if="$slots.body" class="wui-modal-content">
                  <slot name="body" />
                </div>
                <div v-if="$slots.actions" class="wui-modal-footer">
                  <slot name="actions" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { defineComponent, watch, ref, nextTick, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'WuiModal',
  inheritAttrs: false,
  props: {
    modelValue: { type: Boolean, default: false },
    width: { type: String, default: 'max-w-128' },
    closableMask: { type: Boolean, default: true },
    closeOnEsc: { type: Boolean, default: true },
  },
  emits: ['update:model-value'],
  setup(props, { emit, slots }) {
    const modalRef = ref<HTMLElement | null>()
    const modalBody = ref<HTMLElement | null>()
    const Equal = getCurrentInstance()

    function close() {
      emit('update:model-value', false)
    }

    function maskClick() {
      if (props.closableMask) {
        close()
      }
    }

    function pressEsc(e: KeyboardEvent) {
      e.code === 'Escape' && close()
    }

    watch(
      () => props.modelValue,
      async (active: boolean) => {
        await nextTick()
        const modalsList =
          Equal!.appContext.config.globalProperties.$WyrdUI.modals
        if (modalRef.value) {
          if (active) {
            modalsList.push(modalBody.value)

            modalsList
              .slice(0, modalsList.indexOf(modalBody.value))
              .forEach((modalEl: HTMLElement) => {
                if (modalEl.style.transform !== '') {
                  const scaleAndTranslate = modalEl.style.transform
                    .match(/[-+]?[0-9]*\.?[0-9]+/g)
                    ?.map((ittt) => parseFloat(ittt))
                  modalEl.style.transform = `scale(${
                    scaleAndTranslate![0] - 0.05
                  }) translateY(${scaleAndTranslate![1] - 5}%)`
                } else {
                  modalEl.style.transform = `scale(0.9) translateY(5%)`
                }
              })

            disableBodyScroll(modalRef.value, { reserveScrollBarGap: true })
            if (props.closeOnEsc) {
              document.addEventListener('keydown', pressEsc)
            }
          } else {
            modalsList.splice(modalsList.indexOf(modalBody.value), 1)

            modalsList.forEach((modalEl: HTMLElement, i: number) => {
              if (i === modalsList.length - 1) {
                modalEl.style.transform = ''
                return
              }
              const scaleAndTranslate = modalEl.style.transform
                .match(/[-+]?[0-9]*\.?[0-9]+/g)
                ?.map((val) => parseFloat(val))
              modalEl.style.transform = `scale(${
                scaleAndTranslate![0] + 0.05
              }) translateY(${scaleAndTranslate![1] + 5}%)`
            })

            if (modalBody.value) {
              modalBody.value.style.transform = ''
            }

            if (!modalsList.length) {
              setTimeout(enableBodyScroll.bind(this, modalRef.value), 150)
            }
            document.removeEventListener('keydown', pressEsc)
          }
        }
      }
    )

    return {
      modalRef,
      modalBody,
      maskClick,
      close,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('modal.css');
</style>
