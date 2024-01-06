<template>
  <WuiAlert
    class="form-message"
    :type="alertType"
  >
    <span class="text">
      {{ message.message }}
    </span>
  </WuiAlert>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

import type { FormMessage } from './form.types'

export default defineComponent({
  props: {
    message: {
      type: Object as () => FormMessage,
      required: true,
    },
  },
  setup(props) {
    const { message } = toRefs(props)

    const alertType = computed(() => {
      const map: Record<string, string> = {
        primary: 'primary',
        neutral: 'neutral',
        info: 'info',
        success: 'success',
        warning: 'warning',
        error: 'danger',
      }

      return map[message.value.type as unknown as string] || 'primary'
    })

    return {
      alertType,
    }
  },
})
</script>
