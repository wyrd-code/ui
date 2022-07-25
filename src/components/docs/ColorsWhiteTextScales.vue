<template>
  <ColorDisplayGrid class="grid-cols-5" :items="items" />
</template>

<script setup>
import ColorDisplayGrid from './ColorDisplayGrid.vue'

const items = [
  {
    label: 'Tomato',
    className: 'bg-$tomato10',
  },
  {
    label: 'Red',
    className: 'bg-$red10',
  },
  {
    label: 'Crimson',
    className: 'bg-$crimson10',
  },
  {
    label: 'Pink',
    className: 'bg-$pink10',
  },
  {
    label: 'Plum',
    className: 'bg-$plum10',
  },
  {
    label: 'Purple',
    className: 'bg-$purple10',
  },
  {
    label: 'Violet',
    className: 'bg-$violet10',
  },
  {
    label: 'Indigo',
    className: 'bg-$indigo10',
  },
  {
    label: 'Blue',
    className: 'bg-$blue10',
  },
  {
    label: 'Cyan',
    className: 'bg-$cyan10',
  },
  {
    label: 'Teal',
    className: 'bg-$teal10',
  },
  {
    label: 'Green',
    className: 'bg-$green10',
  },
  {
    label: 'Grass',
    className: 'bg-$grass10',
  },
  {
    label: 'Orange',
    className: 'bg-$orange10',
  },
  {
    label: 'Brown',
    className: 'bg-$brown10',
  },
]
</script>
