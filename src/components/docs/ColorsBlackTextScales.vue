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
    className: 'bg-$sky10',
  },
  {
    label: 'Mint',
    className: 'bg-$mint10',
  },
  {
    label: 'Lime',
    className: 'bg-$lime10',
  },
  {
    label: 'Yellow',
    className: 'bg-$yellow10',
  },
  {
    label: 'Amber',
    className: 'bg-$amber10',
  },
]
</script>
