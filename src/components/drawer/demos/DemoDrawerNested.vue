<template>
  <WuiButton variant="primary" @click="isParentVisible = true"
    >Show drawer</WuiButton
  >

  <WuiDrawer v-model="isParentVisible" class="text-center p-4">
    <h3>Drawer 1</h3>
    <WuiButton type="primary" @click="isChildVisible = true">
      Show a nested drawer
    </WuiButton>
  </WuiDrawer>

  <WuiDrawer v-model="isChildVisible" class="text-center p-4">
    <h3>Drawer 2</h3>
    <WuiButton type="primary" @click="isGrandChildVisible = true">
      Show another
    </WuiButton>
  </WuiDrawer>

  <WuiDrawer v-model="isGrandChildVisible" class="text-center p-4">
    <h3>Drawer 3</h3>
  </WuiDrawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isParentVisible = ref(false)
const isChildVisible = ref(false)
const isGrandChildVisible = ref(false)
</script>

<style lang="css">
h3 {
  @apply font-bold text-2xl my-4;
}
</style>
