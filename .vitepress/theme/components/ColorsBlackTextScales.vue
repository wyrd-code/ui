<template>
  <ColorDisplayGrid
    class="grid-cols-5"
    :items="items"
    inner-class-name="text-black"
  />
</template>

<script setup>
import ColorDisplayGrid from './ColorDisplayGrid.vue'

const items = [
  {
    label: 'Sky',
    className: 'bg-sky-10',
  },
  {
    label: 'Mint',
    className: 'bg-mint-10',
  },
  {
    label: 'Lime',
    className: 'bg-lime-10',
  },
  {
    label: 'Yellow',
    className: 'bg-yellow-10',
  },
  {
    label: 'Amber',
    className: 'bg-amber-10',
  },
]
</script>
