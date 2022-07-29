<template>
  <div class="flex flex-col space-y-4">
    <div>
      <ColorDisplayGrid class="grid-cols-1" :items="mauve" />
      <ColorDisplayGrid class="grid-cols-7" :items="typesMauve" />
    </div>
    <div>
      <ColorDisplayGrid class="grid-cols-1" :items="slate" />
      <ColorDisplayGrid class="grid-cols-4" :items="typesSlate" />
    </div>
    <div>
      <ColorDisplayGrid class="grid-cols-1" :items="sage" />
      <ColorDisplayGrid class="grid-cols-3" :items="typesSage" />
    </div>
    <div>
      <ColorDisplayGrid class="grid-cols-1" :items="olive" />
      <ColorDisplayGrid class="grid-cols-2" :items="typesOlive" />
    </div>
    <div>
      <ColorDisplayGrid class="grid-cols-1" :items="sand" />
      <ColorDisplayGrid class="grid-cols-4" :items="typesSand" />
    </div>
  </div>
</template>

<script setup>
import ColorDisplayGrid from './ColorDisplayGrid.vue'

const mauve = [
  {
    label: 'Mauve',
    className: 'bg-$mauve4',
  },
]

const typesMauve = [
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
]

const slate = [
  {
    label: 'Slate',
    className: 'bg-$slate4',
  },
]

const typesSlate = [
  {
    label: 'Indigo',
    className: 'bg-$indigo10',
  },
  {
    label: 'Blue',
    className: 'bg-$blue10',
  },
  {
    label: 'Sky',
    className: 'bg-$sky10',
  },
  {
    label: 'Cyan',
    className: 'bg-$cyan10',
  },
]

const sage = [
  {
    label: 'Sage',
    className: 'bg-$sage4',
  },
]

const typesSage = [
  {
    label: 'Teal',
    className: 'bg-$teal10',
  },
  {
    label: 'Mint',
    className: 'bg-$mint10',
  },
  {
    label: 'Green',
    className: 'bg-$green10',
  },
]

const olive = [
  {
    label: 'Olive',
    className: 'bg-$olive4',
  },
]

const typesOlive = [
  {
    label: 'Grass',
    className: 'bg-$grass10',
  },
  {
    label: 'Lime',
    className: 'bg-$lime10',
  },
]

const sand = [
  {
    label: 'Sand',
    className: 'bg-$sand4',
  },
]

const typesSand = [
  {
    label: 'Yellow',
    className: 'bg-$yellow10',
  },
  {
    label: 'Amber',
    className: 'bg-$amber10',
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
