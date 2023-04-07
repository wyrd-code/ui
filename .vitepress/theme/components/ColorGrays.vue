<template>
  <ColorDisplayGrid class="grid-cols-3" :items="types" />
</template>

<script setup>
import ColorDisplayGrid from './ColorDisplayGrid.vue'

const types = [
  {
    label: 'Gray',
    className: 'bg-gray-10',
  },
  {
    label: 'Mauve',
    className: 'bg-mauve-10',
  },
  {
    label: 'Slate',
    className: 'bg-slate-10',
  },
  {
    label: 'Sage',
    className: 'bg-sage-10',
  },
  {
    label: 'Olive',
    className: 'bg-olive-10',
  },
  {
    label: 'Sand',
    className: 'bg-sand-10',
  },
]
</script>
