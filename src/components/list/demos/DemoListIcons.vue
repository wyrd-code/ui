<template>
  <WuiList
    :items="items"
    rounded
    divided
    class="bg-neutral-1 shadow-lg"
  />
</template>

<script lang="ts" setup>
import WuiList from '../WuiList.vue'

// @unocss-include

const items = [
  {
    label: 'Richard the Lionheart',
    description: '100 Smith st, London',
    icon: 'icon-ph-square',
    children: {
      size: 'sm',
      items: [
        {
          label: 'Joan of Arc',
          icon: 'icon-ph-triangle',
        },
      ],
    },
  },
  {
    label: 'Robin Hood',
    description: 'The forrest, Nottingham',
    icon: 'icon-ph-circle',
  },
]
</script>
