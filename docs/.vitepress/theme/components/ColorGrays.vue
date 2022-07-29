<template>
  <ColorDisplayGrid class="grid-cols-3" :items="types" />
</template>

<script setup>
import ColorDisplayGrid from './ColorDisplayGrid.vue'

const types = [
  {
    label: 'Gray',
    className: 'bg-$gray10',
  },
  {
    label: 'Mauve',
    className: 'bg-$mauve10',
  },
  {
    label: 'Slate',
    className: 'bg-$slate10',
  },
  {
    label: 'Sage',
    className: 'bg-$sage10',
  },
  {
    label: 'Olive',
    className: 'bg-$olive10',
  },
  {
    label: 'Sand',
    className: 'bg-$sand10',
  },
]
</script>
