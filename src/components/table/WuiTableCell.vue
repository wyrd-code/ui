<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    v-if="[FormFieldType.Editor].includes(field.type)"
    class="py-2 px-4"
    v-html="value"
  />
  <div v-else-if="field.linkTo">
    <router-link :to="field.linkTo(row)" class="underline">
      {{ value }}
    </router-link>
  </div>
  <div v-else-if="field.type === FormFieldType.DateTime">
    <UseTimeAgo v-slot="{ timeAgo }" :time="value">
      <WuiTooltip :content="value">
        <span class="sm underline">
          {{ timeAgo }}
        </span>
      </WuiTooltip>
    </UseTimeAgo>
  </div>
  <div v-else>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { UseTimeAgo } from '@vueuse/components'
import { computed, toRefs, defineComponent } from 'vue'

import { FieldPublicMeta, FormFieldType } from '../../ui.types'
import { get } from '../../utilities'
import WuiTooltip from '../tooltip/WuiTooltip.vue'

export default defineComponent({
  name: 'WuiTableCell',
  components: {
    UseTimeAgo,
    WuiTooltip,
  },
  props: {
    row: {
      type: Object,
      required: true,
    },
    field: {
      type: Object as () => FieldPublicMeta,
      required: true,
    },
  },
  setup(props) {
    const limitTextLength = 100
    const { row, field } = toRefs(props)

    const value = computed(() => {
      const { path, key } = field.value
      const value = get(row.value, path || key, '')

      return value && value.length > limitTextLength
        ? `${value.slice(0, limitTextLength)}...`
        : value
    })

    return {
      value,
      FormFieldType,
    }
  },
})
</script>
