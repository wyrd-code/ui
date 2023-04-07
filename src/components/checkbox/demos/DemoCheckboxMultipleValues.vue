<template>
  <div class="flex flex-col space-y-2">
    <WuiCheckbox
      v-model="parent"
      label="All interests"
      @update:model-value="onUpdate"
    />
    <WuiCard condensed>
      <WuiCheckbox
        v-for="key in Object.keys(children)"
        :key="key"
        v-model="children[key]"
        :label="key"
        @update:model-value="onChildUpdate"
      />
    </WuiCard>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const parent = ref<'mixed' | boolean>('mixed')

const children = reactive({
  Travel: false,
  Music: true,
  Sport: false,
})

const setChildren = (value: boolean) =>
  Object.keys(children).map((key) => (children[key] = value))

const onUpdate = (value: boolean | 'mixed') =>
  value !== 'mixed' && setChildren(value)

const calculateParentValue = (
  selectedChildren: number,
  numberOfKeys: number
) => {
  if (selectedChildren === numberOfKeys) {
    return true
  }
  if (selectedChildren === 0 && numberOfKeys > 0) {
    return false
  }
  return 'mixed'
}

const onChildUpdate = () => {
  let checked = 0
  const keys = Object.keys(children)

  for (const key of keys) {
    if (children[key]) {
      checked++
    }
  }

  parent.value = calculateParentValue(checked, keys.length)
}
</script>
