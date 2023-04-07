<template>
  <div class="wui-color-picker">
    <p>{{ value }}</p>
    <div class="wui-color-picker-preview" :style="{ background: instance }">
      {{ instance }}
    </div>
    <div>
      <WuiInput
        :model-value="value"
        class="text-color-default"
        @update:model-value="(value) => $emit('save', value)"
      />

      <!-- <div
        v-for="type in Object.keys(valueObject)"
        :key="type"
        class="bg-neutral-3 p-3"
      >
        <strong>{{ type }}</strong>
        <WuiSlider
          v-model="valueObject.lightness"
          :step-points="true"
          :min="0"
          :max="20"
          :step="2"
        />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Color from 'colorjs.io'
import { PropType, computed } from 'vue'

const defaultColor = 'rgb(0,0,0)'

const props = defineProps({
  value: {
    type: String,
    default: () => 'rgb(0,0,0)',
  },
  variant: {
    type: [String, Boolean] as PropType<'light' | 'dark' | false>,
    default: false,
  },
  step: {
    type: Number,
    default: 0,
  },
})

defineEmits(['save'])

// Lightness Chroma Hue
// const valueLightness = ref(0)
// const valueChroma = ref(0)
// const valueHue = ref(0)

/*

prop -> any kind of value

computed color object


*/
// console.log(props.value)
const instance = computed(() => new Color(props.value || defaultColor))
// console.log(instance.value)

// const valueObject = reactive()

// const variants = computed(() => {
//   const lch = color
// })

// const background = computed(
//   () => `lch(${valueObject.lightness} ${valueObject.chroma} ${valueObject.hue})`
// )
</script>

<style lang="css">
.wui-palette-color-picker {
}
.wui-color-picker-preview {
  @apply w-full h-24 flex justify-center items-center;
}
</style>
