<template>
  <WuiButton @click="isActive = !isActive">Decision toast</WuiButton>
  <WuiToast
    v-if="isActive"
    variant="primary"
    placement="bottom"
    :icon="false"
    :duration="0"
    :closable="false"
    @close="isActive = false"
  >
    <template #icon><WuiAvatar name="John Doe" /></template>
    <template #label>John Doe</template>
    <template #description>Sent an invite</template>
    <template #actions="{ close }">
      <WuiButtonGroup
        condensed
        @click.stop="close"
      >
        <WuiButton
          label="Accept"
          variant="primary"
        />
        <WuiButton label="Decline" />
      </WuiButtonGroup>
    </template>
  </WuiToast>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>
