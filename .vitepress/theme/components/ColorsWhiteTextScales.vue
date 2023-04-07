<template>
  <ColorDisplayGrid class="grid-cols-5" :items="items" />
</template>

<script setup>
import ColorDisplayGrid from './ColorDisplayGrid.vue'

const items = [
  {
    label: 'Tomato',
    className: 'bg-tomato-10',
  },
  {
    label: 'Red',
    className: 'bg-red-10',
  },
  {
    label: 'Crimson',
    className: 'bg-crimson-10',
  },
  {
    label: 'Pink',
    className: 'bg-pink-10',
  },
  {
    label: 'Plum',
    className: 'bg-plum-10',
  },
  {
    label: 'Purple',
    className: 'bg-purple-10',
  },
  {
    label: 'Violet',
    className: 'bg-violet-10',
  },
  {
    label: 'Indigo',
    className: 'bg-indigo-10',
  },
  {
    label: 'Blue',
    className: 'bg-blue-10',
  },
  {
    label: 'Cyan',
    className: 'bg-cyan-10',
  },
  {
    label: 'Teal',
    className: 'bg-teal-10',
  },
  {
    label: 'Green',
    className: 'bg-green-10',
  },
  {
    label: 'Grass',
    className: 'bg-grass-10',
  },
  {
    label: 'Orange',
    className: 'bg-orange-10',
  },
  {
    label: 'Brown',
    className: 'bg-brown-10',
  },
]
</script>
