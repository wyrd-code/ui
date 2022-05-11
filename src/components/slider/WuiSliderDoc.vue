<template>
  <div>
    <h1>Slider</h1>

    <WuiCodeDemo>
      <div class="w-full px-10">
        <WuiSlider
          v-model="sliderValue"
          :step-points="sliderStepPoints"
          :disabled="sliderDisabled"
          :min="sliderMin"
          :max="sliderMax"
          :step="sliderStep"
          :numbers="sliderNumbers"
        />
      </div>

      <template #props>
        <WuiNumberInput v-model="sliderMin" label-top="Min" />
        <WuiNumberInput v-model="sliderMax" label-top="Max" />
        <WuiNumberInput v-model="sliderStep" label-top="Step" />
        <WuiCheckbox v-model="sliderNumbers" label="Numbers" />
        <WuiCheckbox v-model="sliderStepPoints" label="Step points" />
        <WuiCheckbox v-model="sliderDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample :code="stepCode" title="Step points">
      <WuiSlider
        v-model="stepSliderValue"
        :step-points="true"
        :min="0"
        :max="20"
        :step="2"
      />
    </WuiCodeExample>

    <WuiCodeExample :code="numbersCode" title="Numbers">
      <WuiSlider v-model="numberSliderValue" numbers :min="0" :max="42" />
    </WuiCodeExample>

    <WuiCodeExample :code="disabledCode" title="Disabled">
      <WuiSlider v-model="stepSliderValue" disabled :min="0" :max="20" />
    </WuiCodeExample>

    <WuiPropsTable :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WuiPropsTable from '../props-table/WuiPropsTable.vue'

export default defineComponent({
  components: { WuiPropsTable },
  data: () => ({
    sliderValue: 14,
    stepSliderValue: 10,
    numberSliderValue: 10,
    sliderMin: 0,
    sliderMax: 42,
    sliderStep: 1,
    sliderStepPoints: false,
    sliderDisabled: false,
    sliderNumbers: false,
    stepCode: `<WuiSlider v-model="stepSliderValue" :stepPoints="true" :min="0" :max="12" :step="2" />`,
    disabledCode: `<WuiSlider v-model="stepSliderValue" disabled :min="0" :max="20" />`,
    numbersCode: `<WuiSlider v-model="numberSliderValue" numbers :min="0" :max="42"/>`,
    dataSheet: [
      {
        property: 'min',
        type: ['Number'],
        default: 0,
        values: [],
        description: 'Minimal value',
      },
      {
        property: 'max',
        type: ['Number'],
        default: 100,
        values: [],
        description: 'Maximal value',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes slider disabled',
      },
      {
        property: 'step-points',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show step points',
      },
      {
        property: 'numbers',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show min/max value numbers',
      },
      {
        property: 'step',
        type: ['Number'],
        default: 1,
        values: [],
        description: 'Step size',
      },
      {
        property: 'value (v-model)',
        type: ['Number'],
        default: 0,
        values: [],
        description: 'Slider value',
      },
    ],
  }),
})
</script>
