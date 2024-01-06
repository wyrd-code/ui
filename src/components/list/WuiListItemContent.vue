<template>
  <slot
    name="image"
    :data="data"
  >
    <img
      v-if="data.image"
      class="wui-list-item-image"
      :src="data.image"
      :alt="`Image of ${data.label}`"
    />
  </slot>
  <slot
    name="icon"
    :data="data"
  >
    <span
      v-if="data.icon"
      class="wui-list-item-icon"
    >
      <span :class="data.icon" />
    </span>
  </slot>
  <span class="wui-list-item-body">
    <slot
      name="label"
      :data="data"
    >
      <span class="wui-list-item-label">
        {{ data.label }}
      </span>
    </slot>
    <slot
      name="description"
      :data="data"
    >
      <div
        v-if="data.description"
        class="wui-list-item-description"
      >
        {{ data.description }}
      </div>
    </slot>
  </span>
</template>

<script lang="ts" setup>
import { WyrdListItem } from './list'

defineProps({
  data: {
    type: Object as () => WyrdListItem,
    required: true,
  },
})
</script>
