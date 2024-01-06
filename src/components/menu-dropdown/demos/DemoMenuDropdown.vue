<template>
  <WuiMenuDropdown>
    <template #button="{ attrs }">
      <WuiButton
        variant="secondary"
        v-bind="attrs"
      >
        <span>{{ value }}</span>
        <span class="icon-ph-caret-down ml-2 text-lg" />
      </WuiButton>
    </template>
    <template #menu="menuProps">
      <WuiMenu
        :items="items"
        v-bind="menuProps"
        @selected="onSelected"
      />
    </template>
  </WuiMenuDropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Click me')

const items = [
  'Edit',
  'Duplicate',
  'Archive',
  'Move',
  'Share',
  'Add to favorites',
  'Delete',
]

const onSelected = (newValue: string) => (value.value = newValue)
</script>
