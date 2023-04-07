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
    className: 'bg-mauve-4',
  },
]

const typesMauve = [
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
]

const slate = [
  {
    label: 'Slate',
    className: 'bg-slate-4',
  },
]

const typesSlate = [
  {
    label: 'Indigo',
    className: 'bg-indigo-10',
  },
  {
    label: 'Blue',
    className: 'bg-blue-10',
  },
  {
    label: 'Sky',
    className: 'bg-sky-10',
  },
  {
    label: 'Cyan',
    className: 'bg-cyan-10',
  },
]

const sage = [
  {
    label: 'Sage',
    className: 'bg-sage-4',
  },
]

const typesSage = [
  {
    label: 'Teal',
    className: 'bg-teal-10',
  },
  {
    label: 'Mint',
    className: 'bg-mint-10',
  },
  {
    label: 'Green',
    className: 'bg-green-10',
  },
]

const olive = [
  {
    label: 'Olive',
    className: 'bg-olive-4',
  },
]

const typesOlive = [
  {
    label: 'Grass',
    className: 'bg-grass-10',
  },
  {
    label: 'Lime',
    className: 'bg-lime-10',
  },
]

const sand = [
  {
    label: 'Sand',
    className: 'bg-sand-4',
  },
]

const typesSand = [
  {
    label: 'Yellow',
    className: 'bg-yellow-10',
  },
  {
    label: 'Amber',
    className: 'bg-amber-10',
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
