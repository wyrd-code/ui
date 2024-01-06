<template>
  <div class="max-w-72 border border-dotted">
    <WuiList
      marker="none"
      :items="items"
    />
    <WuiList
      marker="circle"
      :items="items"
    />
    <WuiList
      marker="square"
      :items="items"
      marker-position="inside"
    />
  </div>
</template>

<script lang="ts" setup>
const items = ['Richard the Lionheart', 'Joan of Arc']
</script>
