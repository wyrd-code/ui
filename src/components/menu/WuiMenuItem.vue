<template>
  <li
    v-if="isSeparator"
    class="wui-menu-separator"
    role="separator"
    tabindex="-1"
  />
  <li v-else-if="isGroup" class="wui-list-group" role="presentation">
    <WuiMenu :items="data.children" :trap-focus="false" />
  </li>
  <li v-else role="presentation">
    <button
      ref="button"
      class="wui-menu-item"
      :class="data.class"
      :disabled="data.disabled"
      role="menuitem"
      tabindex="0"
      @click="onItemSelected"
    >
      <slot name="icon" :item="data">
        <span
          v-if="data.icon"
          class="wui-menu-item-icon"
          :class="data.iconClass"
        >
          <span :class="data.icon" />
        </span>
      </slot>
      <span class="wui-menu-item-body">
        <slot name="label" :item="data">
          <span class="wui-menu-item-label">
            {{ data.label }}
          </span>
        </slot>
        <slot name="description" :item="data">
          <div v-if="data.description" class="wui-menu-item-description">
            {{ data.description }}
          </div>
        </slot>
      </span>
    </button>
    <WuiMenu
      v-if="showChildren && data.children && data.children.length"
      :items="data.children"
      :show-children="showChildren"
    />
  </li>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'

import { WyrdMenuItem, ensureObjectItem } from './menu'

const props = defineProps({
  showChildren: { type: Boolean, default: true },
  item: {
    type: [Object, String] as PropType<WyrdMenuItem | string>,
    required: true,
  },
})

const data = computed(() => ensureObjectItem(props.item))

const isSeparator = computed(() => data.value.role === 'separator')

const isGroup = computed(() => data.value.role === 'group')

const emit = defineEmits(['selected', 'focus', 'blur'])

const button = ref<HTMLElement | null>(null)

const onItemSelected = () => {
  const valueToEmit =
    data.value.value === undefined ? data.value.label : data.value.value
  emit('selected', valueToEmit)
}

const focus = () => {
  button.value?.focus()
}

defineExpose({
  focus,
})
</script>
