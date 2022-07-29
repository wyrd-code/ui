<template>
  <div>
    <h1>Progress Bar</h1>

    <WuiCodeDemo>
      <div class="w-full px-8">
        <WuiProgressBar
          :show-tooltip="progressShowTooltip"
          :height="progressHeight"
          :progress="progressValue"
          :tooltip="progressTooltip"
        />
      </div>

      <template #props>
        <WuiSlider v-model="progressValue" label-top="Progress" />
        <WuiNumberInput
          v-model="progressHeight"
          :min="1"
          label-top="Progress bar height"
        />
        <WuiCheckbox v-model="progressShowTooltip" label="Show tooltip" />
        <WuiSelect
          v-model="progressTooltip"
          placeholder="Select tooltip"
          label-top="Tooltip position"
          :disabled="!progressShowTooltip"
          :options="tooltipTypes"
        />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample :code="infiniteCode" title="Infinite">
      <div class="heights-progress">
        <WuiProgressBar infinite />
      </div>
    </WuiCodeExample>

    <WuiCodeExample :code="heightCode" title="Height">
      <div class="heights-progress">
        <WuiProgressBar :height="3" :progress="progressValue42" />
        <WuiProgressBar :height="5" :progress="progressValue42" />
        <WuiProgressBar :height="7" :progress="progressValue42" />
        <WuiProgressBar :height="10" :progress="progressValue42" />
        <WuiProgressBar :height="13" :progress="progressValue42" />
      </div>
    </WuiCodeExample>
    <WuiCodeExample :code="tooltipCode" title="Tooltip position">
      <div class="heights-progress">
        <WuiProgressBar :progress="progressValue42" />
        <WuiProgressBar :progress="progressValue42" tooltip="bottom" />
      </div>
    </WuiCodeExample>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    progressValue: 42,
    progressHeight: 7,
    tooltipTypes: ['top', 'bottom'],
    progressTooltip: 'top',
    progressShowTooltip: true,
    progressValue42: 42,

    infiniteCode: `<WuiProgressBar infinite />`,

    heightCode: `<WuiProgressBar :height="3" :progress="progressValue" />
<WuiProgressBar :height="5" :progress="progressValue" />
<WuiProgressBar :height="7" :progress="progressValue" />
<WuiProgressBar :height="10" :progress="progressValue" />
<WuiProgressBar :height="13" :progress="progressValue" />`,

    tooltipCode: `<WuiProgressBar :progress="progressValue" />
<WuiProgressBar :progress="progressValue" tooltip="bottom" />`,

    dataSheet: [
      {
        property: 'progress',
        type: ['Number', 'String'],
        default: '0',
        values: ['0-100'],
        description: 'Progress value',
      },
      {
        property: 'infinite',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes progress infinite',
      },
      {
        property: 'height',
        type: ['Number', 'String'],
        default: '7',
        values: [],
        description: 'Height of the progressbar',
      },
      {
        property: 'tooltip',
        type: ['String'],
        default: 'top',
        values: ['top', 'bottom'],
        description: 'Position of the tooltip',
      },
      {
        property: 'show-tooltip',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Show tooltip',
      },
    ],
  }),
})
</script>

<style lang="css">
.heights-progress {
  position: relative;
  width: 100%;
}

.heights-progress .it-progress-wrapper + .it-progress-wrapper {
  margin-top: 30px;
}
</style>
