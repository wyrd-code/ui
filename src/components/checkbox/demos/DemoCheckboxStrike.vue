<template>
  <WuiCheckbox v-model="terms" strike>
    <template #label>
      By signing this I agree with Terms and Conditions
    </template>
  </WuiCheckbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const terms = ref(false)
</script>
