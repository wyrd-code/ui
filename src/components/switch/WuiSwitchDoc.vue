<template>
  <div>
    <h1>Switch</h1>

    <WuiCodeDemo>
      <WuiSwitch
        v-model="switchValue"
        :type="switchType"
        :disabled="switchDisabled"
        :label="switchLabel"
        :pulse="switchPulse"
      >
        <template #sublabel>
          {{ sublabel }}
        </template>
      </WuiSwitch>

      <template #props>
        <WuiSelect
          v-model="switchType"
          placeholder="Select type"
          label-top="Button type"
          :options="switchTypes"
        >
          >
        </WuiSelect>
        <WuiInput v-model="switchLabel" label-top="Switch label" />
        <WuiTextarea
          v-model="sublabel"
          label-top="Switch sublabel"
          placeholder="Additional information"
        />
        <WuiCheckbox v-model="switchPulse" label="Pulse" />
        <WuiCheckbox v-model="switchDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>
    <WuiCodeExample :code="typesCode" title="Types">
      <WuiSwitch v-model="typeValue" label="Primary" />
      <WuiSwitch v-model="typeValue" type="success" label="Success" />
      <WuiSwitch v-model="typeValue" type="danger" label="Danger" />
      <WuiSwitch v-model="typeValue" type="warning" label="Warning" />
    </WuiCodeExample>
    <WuiCodeExample :code="sublabelCode" title="Types">
      <div class="flex flex-col">
        <WuiSwitch v-model="sublabel1" label="Label only" />
        <br />
        <WuiSwitch v-model="sublabel2" label="Show ">
          <template #sublabel> Send notifications </template>
        </WuiSwitch>
      </div>
    </WuiCodeExample>
    <WuiCodeExample :code="pulseCode" title="Pulse">
      <template #description>
        <p class="px-6">Pulse helps you to catch user's attention</p>
      </template>
      <WuiSwitch v-model="pulseValue" pulse label="Look at me" />
    </WuiCodeExample>
    <WuiCodeExample :code="disabledCode" title="Disabled">
      <WuiSwitch v-model="pulseValue" disabled label="I'm disabled" />
    </WuiCodeExample>
    <WuiPropsTable tag-name="WuiSwitch" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    switchValue: true,
    switchLabel: 'Switch',
    switchPulse: false,
    switchDisabled: false,
    switchType: 'primary',
    switchTypes: ['primary', 'success', 'danger', 'warning', 'neutral'],
    sublabel: '',
    sublabel1: true,
    sublabel2: false,
    pulseValue: false,
    typeValue: true,
    typesCode: `<WuiSwitch v-model="typeValue" label="Primary" />
<WuiSwitch v-model="typeValue" type="success" label="Success" />
<WuiSwitch v-model="typeValue" type="danger" label="Danger" />
<WuiSwitch v-model="typeValue" type="warning" label="Warning" />`,
    pulseCode: `<WuiSwitch v-model="pulseValue" pulse label="Look at me" />`,
    sublabelCode: `<WuiSwitch v-model="sublabel1" label="Label only" />

<WuiSwitch v-model="sublabel2" label="Show ">
<template #sublabel>Send notifications</template>
</WuiSwitch>`,
    disabledCode: `<WuiSwitch v-model="pulseValue" disabled label="I'm disabled"/>`,
    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning', 'neutral'],
        description: 'Type of the switch',
      },
      {
        property: 'label',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Label of the switch',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes switch disabled',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Adds pulse to switch',
      },
      {
        property: 'value (v-model)',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Switch value',
      },
    ],
  }),
})
</script>
