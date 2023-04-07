<template>
  <div class="wui-palette-color-steps">
    <div
      v-for="step in steps"
      :key="`${color}-${step.key}`"
      class="wui-palette-color-steps-step"
    >
      <div
        class="wui-palette-color-steps-surface"
        :style="{ background: getColorValueAtStep(definition, step.key) }"
        @click="() => editColor(step.key)"
        @keyup.enter="() => editColor(step.key)"
      >
        <span class="wui-palette-color-steps-surface-number">{{
          step.key
        }}</span>

        <span class="text-xs">{{
          getColorValueAtStep(definition, step.key)
        }}</span>
      </div>
    </div>

    <WuiDialog v-model="colorModal">
      <template #header>
        <h3>{{ color.key }}-{{ editingStep }}</h3>
      </template>
      <template #body>
        <WuiColorPicker
          :value="data"
          :step="editingStep"
          :variant="variant"
          @save="saveColor"
        />
      </template>
      <template #actions>
        <WuiButton @click="colorModal = false"> Cancel </WuiButton>
        <WuiButton type="primary" @click="saveColor"> Save </WuiButton>
      </template>
    </WuiDialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, camelize, ref } from 'vue'

import { WuiThemeSpec, WUI_COLOR_SPEC, WuiColorDefinition } from '@/domain'

const colorModal = ref(false)

const data = ref<string>(null as unknown as string)
const editingStep = ref<number>(null as unknown as number)

const props = defineProps({
  color: {
    type: Object as PropType<WuiColorDefinition>,
    required: true,
  },
  variant: {
    type: [String, Boolean] as PropType<'light' | 'dark' | false>,
    default: false,
  },
  theme: {
    type: Object as PropType<WuiThemeSpec>,
    required: true,
  },
})

const steps = Object.values(WUI_COLOR_SPEC.steps)

const definition = computed(() => props.theme.color[camelize(props.color.key)])

const editColor = (stepKey: number) => {
  data.value = getColorValueAtStep(definition.value, stepKey)
  editingStep.value = stepKey
  colorModal.value = true
}

// const emit = defineEmits(['save'])

const saveColor = () => {
  // const patchTarget =
  //   props.theme.colors[props.color.key][props.variant][editingStep.value]
  console.log('BEFORE')
  console.log(props.theme.color[props.color.key][props.variant])

  Object.assign(props.theme.color[props.color.key][props.variant], {
    [editingStep.value]: data.value,
  })

  console.log('AFTER')
  console.log(props.theme.color[props.color.key][props.variant])

  // emit('save', {
  //   step: editingStep.value,
  //   value: data.value,
  //   variant: props.variant,
  //   colorKey: props.color.key,
  // })
}

const getColorValueAtStep = (
  colorDefinition: WuiColorDefinition,
  step: number
) => {
  if (
    typeof props.variant === 'string' &&
    Object.keys(colorDefinition).includes(props.variant)
  ) {
    return colorDefinition[props.variant][step]
  }
  return colorDefinition[step]
}
</script>

<style lang="css">
.wui-palette-color-steps {
  @apply w-full text-center flex flex-col;
}
.wui-palette-color-steps-step {
  @apply w-full text-center flex flex-col;
}
.wui-palette-color-steps-surface {
  @apply p-2 flex-grow w-full text-xs flex justify-between tracking-tighter;
}
.wui-palette-color-steps-surface-number {
  @apply font-bold;
}
</style>
