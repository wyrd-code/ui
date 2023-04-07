<template>
  <div class="flex flex-col space-y-4">
    <WuiButton
      v-for="variant in WUI_TOAST_VARIANTS"
      :key="variant"
      class="inline-flex space-x-2 justify-center"
      :variant="variant"
      @click="() => show(variant)"
      >{{ variant }}</WuiButton
    >
  </div>
</template>

<script lang="ts" setup>
import { useToast, ToastVariant, WUI_TOAST_VARIANTS } from '@/components/toast'

const { toast } = useToast()

const show = (variant: ToastVariant) => {
  toast.show({
    label: `${variant} message`,
    variant,
  })
}
</script>
