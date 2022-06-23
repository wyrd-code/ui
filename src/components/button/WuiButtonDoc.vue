<template>
  <div class="space-y-4">
    <h1>Button</h1>

    <WuiCodeDemo>
      <WuiButton
        :type="buttonType"
        :outline="buttonOutline"
        :loading="buttonLoading"
        :loading-takeover="buttonLoadingTakeover"
        :disabled="buttonDisabled"
        :active="buttonActive"
        :wide="buttonWide"
        :block="buttonBlock"
        :size="buttonSize"
        :circle="buttonCircle"
      >
        <template v-if="!buttonIcon">
          {{ buttonText }}
        </template>
        <div v-else class="icon-ph-heart text-black" />
      </WuiButton>

      <template #props>
        <WuiSelect
          v-model="buttonType"
          placeholder="select a type"
          label-top="Type"
          :options="buttonTypes"
        />
        <WuiSelect
          v-model="buttonSize"
          placeholder="select a size"
          label-top="Size"
          :options="buttonSizes"
        />
        <WuiInput v-model="buttonText" label-top="Label" />
        <WuiCheckbox v-model="buttonOutline" label="Outline" />
        <WuiCheckbox v-model="buttonCircle" label="Circle" />
        <WuiCheckbox v-model="buttonWide" label="Wide" />
        <WuiCheckbox v-model="buttonActive" label="Active" />
        <WuiCheckbox v-model="buttonBlock" label="Block" />
        <WuiCheckbox v-model="buttonIcon" label="Icon" />
        <WuiCheckbox v-model="buttonLoading" label="Loading" />
        <WuiCheckbox v-model="buttonLoadingTakeover" label="Loading takeover" />
        <WuiCheckbox v-model="buttonDisabled" label="Disabled" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Type">
      <div class="grid gap-4 grid-cols-6">
        <WuiButton> default </WuiButton>
        <WuiButton v-for="type in buttonTypes" :key="type" :type="type">
          {{ type }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Outline">
      <div class="grid gap-4 grid-cols-6">
        <WuiButton outline> default </WuiButton>
        <WuiButton v-for="type in buttonTypes" :key="type" :type="type" outline>
          {{ type }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Disabled">
      <div class="grid gap-4 grid-cols-6">
        <WuiButton disabled> default </WuiButton>
        <WuiButton
          v-for="type in buttonTypes"
          :key="type"
          :type="type"
          disabled
        >
          {{ type }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Loading">
      <WuiButton type="neutral" loading> loading </WuiButton>

      <WuiButton type="neutral" loading outline> loading </WuiButton>

      <WuiButton type="neutral" loading />

      <WuiButton type="neutral" loading circle />
    </WuiCodeExample>

    <WuiCodeExample title="Round">
      <div class="flex space-x-8 items-center">
        <WuiButton type="neutral" round outline size="lg"> Smooth </WuiButton>
        <WuiButton type="neutral" round outline> Round button </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Icon & Circle">
      <WuiButton type="neutral" circle outline size="lg">
        <div class="icon-ph-heart" />
      </WuiButton>

      <WuiButton type="neutral" circle outline>
        <div class="icon-ph-heart" />
      </WuiButton>

      <WuiButton type="neutral" circle outline size="sm">
        <div class="icon-ph-heart" />
      </WuiButton>

      <WuiButton type="neutral" circle outline size="xs">
        <div class="icon-ph-heart" />
      </WuiButton>
    </WuiCodeExample>

    <WuiCodeExample title="Icon with label">
      <WuiButtonGroup vertical>
        <WuiButton outline size="lg">
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton outline>
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton outline size="sm">
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton outline size="xs">
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>
      </WuiButtonGroup>
    </WuiCodeExample>

    <WuiCodeExample title="Size">
      <WuiButtonGroup vertical>
        <WuiButton
          v-for="size in buttonSizes"
          :key="size"
          :size="size"
          type="neutral"
          wide
        >
          {{ size }}
        </WuiButton>
      </WuiButtonGroup>
    </WuiCodeExample>

    <WuiCodeExample title="Wide">
      <WuiButton type="neutral" wide> wide </WuiButton>
    </WuiCodeExample>

    <WuiCodeExample title="Block">
      <WuiButton type="neutral" block> block </WuiButton>
    </WuiCodeExample>

    <WuiCodeExample title="Glass">
      <div
        class="bg-cover border rounded bg-base-300 shadow-md p-20"
        style="
          background-image: url(/raspberry.jpg);
          background-position: center center;
        "
      >
        <WuiButton glass size="lg"> Glass button </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiPropsTable tag-name="Button" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { Colors, Sizes } from '../../models/enums'
import WuiCheckbox from '../checkbox/WuiCheckbox.vue'
import WuiInput from '../input/WuiInput.vue'
import WuiSelect from '../select/WuiSelect.vue'

const buttonText = ref('Button')
const buttonOutline = ref(false)
const buttonCircle = ref(false)
const buttonDisabled = ref(false)
const buttonLoading = ref(false)
const buttonLoadingTakeover = ref(false)
const buttonActive = ref(false)
const buttonBlock = ref(false)
const buttonType = ref('primary')
const buttonWide = ref(false)
const buttonIcon = ref(false)

const buttonSize = ref(Sizes.NORMAL)

const buttonTypes = Object.values(Colors)
const buttonSizes = Object.values(Sizes)

const dataSheet = [
  {
    property: 'type',
    type: ['String'],
    default: 'neutral',
    values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
    description: 'Type of the button',
  },
  {
    property: 'outlined',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Makes button outlined',
  },
  {
    property: 'round',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Makes button rounded',
  },
  {
    property: 'size',
    type: ['String'],
    default: 'normal',
    values: ['small', 'normal', 'big'],
    description: 'Size of the button',
  },
  {
    property: 'icon',
    type: ['String'],
    default: '',
    values: ['material-icon'],
    description: 'Add material-icon with provided name',
  },
  {
    property: 'loading',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Shows loading spinner',
  },
  {
    property: 'block',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Makes button fit parent width',
  },
  {
    property: 'disabled',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Makes button disabled',
  },
  {
    property: 'pulse',
    type: ['Boolean'],
    default: false,
    values: [],
    description: 'Add pulse to the element',
  },
]
</script>
