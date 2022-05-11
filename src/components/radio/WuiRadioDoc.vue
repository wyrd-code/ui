<template>
  <div class="space-y-4">
    <h1>Radio</h1>

    <WuiCodeDemo>
      <div class="radios">
        <WuiRadio
          v-model="radioValue"
          name="demo"
          :disabled="radioDisabled"
          :pulse="radioPulse"
          :label="radioLabel"
          value="1"
        />
        <WuiRadio
          v-model="radioValue"
          :disabled="radioDisabled"
          :pulse="radioPulse"
          name="demo"
          label="Second"
          value="2"
        />
        <WuiRadio
          v-model="radioValue"
          :disabled="radioDisabled"
          :pulse="radioPulse"
          name="demo"
          label="Third"
          value="3"
        />
      </div>

      <template #props>
        <WuiInput v-model="radioLabel" label-top="Radio label" />
        <WuiCheckbox v-model="radioPulse" label="Pulse" />
        <WuiCheckbox v-model="radioDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>
    <WuiCodeExample :code="typeCode" title="Types">
      <WuiRadio
        v-for="t in allowedRadioTypes"
        :key="t"
        v-model="typeValue"
        :type="t"
        :label="t"
        :value="t"
      />
    </WuiCodeExample>

    <WuiCodeExample :code="codeSublabel" title="Sublabel">
      <div>
        <WuiRadio v-model="subradio" type="primary" :value="1">
          By signing this I agree with Terms and Conditions
        </WuiRadio>
        <br />
        <WuiRadio v-model="subradio" type="primary" :value="2">
          <template #default> Subscribe for updates </template>
          <template #sublabel> Get notified when you get updates </template>
        </WuiRadio>
      </div>
    </WuiCodeExample>

    <WuiCodeExample :code="pulseCode" title="Pulse">
      <template #description>
        <p class="px-6">Pulse helps you to catch user's attention</p>
      </template>
      <WuiRadio v-model="pulseValue" pulse label="Look at me" value="42" />
    </WuiCodeExample>
    <WuiCodeExample :code="disabledCode" title="Disabled">
      <WuiRadio v-model="pulseValue" disabled label="I'm disabled" value="42" />
    </WuiCodeExample>

    <WuiPropsTable tag-name="WuiRadio" :data-sheet="dataSheet" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import { allowedRadioTypes } from './model'

export default defineComponent({
  data: () => ({
    allowedRadioTypes,
    radioValue: '1',
    radioLabel: 'Edit me',
    radioPulse: false,
    radioDisabled: false,
    pulseValue: false,
    typeValue: false,
    subradio: 1,

    typeCode: `<WuiRadio v-model="typeValue" label="Primary" value="00"/>
<WuiRadio v-model="typeValue" type="success" label="Success" value="11"/>
<WuiRadio v-model="typeValue" type="danger" label="Danger" value="22"/>
<WuiRadio v-model="typeValue" type="warning" label="Warning" value="33"/>`,

    pulseCode: `<WuiRadio v-model="pulseValue" pulse label="Look at me" value="42"/>`,

    disabledCode: `<WuiRadio v-model="pulseValue" disabled label="I'm disabled" value="42"/>`,

    codeSublabel: `<WuiRadio type="primary" v-model="subradio" :value="1">By signing this I agree with Terms and Conditions</WuiRadio>

<WuiRadio type="primary" v-model="subradio" :value="2">
  <template #default>Subscribe for updates</template>
  <template #sublabel>Get notified when you get updates</template>
</WuiRadio>`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the radio',
      },
      {
        property: 'label',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Label of the radio',
      },
      {
        property: 'sub-label',
        type: ['String'],
        default: '',
        values: [],
        description: 'Sub label of the radio',
      },
      {
        property: 'value',
        type: ['String', 'Number'],
        default: '-',
        values: [],
        description: 'Value of the radio',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Pulse of the radio',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes radio disabled',
      },
    ],
  }),
})
</script>

<style lang="css">
.radios {
  display: flex;
  flex-direction: column;
}
.radios > label + label {
  margin-top: 10px;
}
</style>
