<template>
  <div class="space-y-4 bg-red-3">
    <WuiDemo>
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
        :round="buttonRound"
      >
        <template v-if="!buttonIcon">
          {{ buttonText }}
        </template>
        <div
          v-else
          class="icon-ph-heart wui-btn-icon"
        />
      </WuiButton>

      <template #props>
        <WuiSelect
          v-model="buttonType"
          placeholder="select a type"
          label-top="Type"
          :options="WUI_BUTTON_VARIANTS"
        />
        <WuiSelect
          v-model="buttonSize"
          placeholder="select a size"
          label-top="Size"
          :options="WUI_BUTTON_SIZES"
        />
        <WuiInput
          v-model="buttonText"
          label-top="Label"
        />
        <WuiCheckbox
          v-model="buttonOutline"
          label="Outline"
        />
        <WuiCheckbox
          v-model="buttonRound"
          label="Round"
        />
        <WuiCheckbox
          v-model="buttonWide"
          label="Wide"
        />
        <WuiCheckbox
          v-model="buttonActive"
          label="Active"
        />
        <WuiCheckbox
          v-model="buttonBlock"
          label="Block"
        />
        <WuiCheckbox
          v-model="buttonIcon"
          label="Icon"
        />
        <WuiCheckbox
          v-model="buttonLoading"
          label="Loading"
        />
        <WuiCheckbox
          v-model="buttonLoadingTakeover"
          label="Loading takeover"
        />
        <WuiCheckbox
          v-model="buttonDisabled"
          label="Disabled"
        />
      </template>
    </WuiDemo>

    <WuiCodeExample title="Type">
      <div class="grid gap-4 grid-cols-6">
        <WuiButton> default </WuiButton>
        <WuiButton
          v-for="type in WUI_BUTTON_VARIANTS"
          :key="type"
          :type="type"
        >
          {{ type }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Outline">
      <div class="grid gap-4 grid-cols-6">
        <WuiButton outline> default </WuiButton>
        <WuiButton
          v-for="type in WUI_BUTTON_VARIANTS"
          :key="type"
          :type="type"
          outline
        >
          {{ type }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Disabled">
      <div class="grid gap-4 grid-cols-6">
        <WuiButton disabled> default </WuiButton>
        <WuiButton
          v-for="type in WUI_BUTTON_VARIANTS"
          :key="type"
          :type="type"
          disabled
        >
          {{ type }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Loading">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          type="neutral"
          loading
        > loading </WuiButton>

        <WuiButton
          type="neutral"
          loading
          outline
        > loading </WuiButton>

        <WuiButton
          type="neutral"
          loading
        />

        <WuiButton
          type="neutral"
          loading
          round
        />
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Round">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          type="neutral"
          round
          outline
          size="lg"
        > Smooth </WuiButton>
        <WuiButton
          type="neutral"
          round
          outline
        > Round button </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Icon & Round">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          type="neutral"
          round
          outline
          size="lg"
        >
          <div class="icon-ph-heart" />
        </WuiButton>

        <WuiButton
          type="neutral"
          round
          outline
        >
          <div class="icon-ph-heart" />
        </WuiButton>

        <WuiButton
          type="neutral"
          round
          outline
          size="sm"
        >
          <div class="icon-ph-heart" />
        </WuiButton>

        <WuiButton
          type="neutral"
          round
          outline
          size="xs"
        >
          <div class="icon-ph-heart" />
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample
      title="Icon with label"
      vertical
    >
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          outline
          size="lg"
        >
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

        <WuiButton
          outline
          size="sm"
        >
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton
          outline
          size="xs"
        >
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Size">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          v-for="size in WUI_BUTTON_SIZES"
          :key="size"
          :size="size"
          type="neutral"
        >
          {{ size }}
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Wide">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          type="neutral"
          wide
        > wide </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Block">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton
          type="neutral"
          block
        > block </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Glass">
      <div
        class="bg-cover border rounded bg-base-300 shadow-md p-20"
        style="
          background-image: url(/demo-content/daniel-sessler-P2UnRiIAxSM-unsplash.jpg);
          background-position: center center;
        "
      >
        <div class="flex space-x-4 items-center justify-center">
          <WuiButton
            glass
            size="lg"
          > Glass button </WuiButton>
        </div>
      </div>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="Button"
      :data-sheet="dataSheet"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { WUI_BUTTON_VARIANTS, WUI_BUTTON_SIZES } from './button'
import WuiCheckbox from '../checkbox/WuiCheckbox.vue'
import WuiInput from '../input/WuiInput.vue'
import WuiSelect from '../select/WuiSelect.vue'

const buttonText = ref('Button')
const buttonOutline = ref(false)
const buttonRound = ref(false)
const buttonDisabled = ref(false)
const buttonLoading = ref(false)
const buttonLoadingTakeover = ref(false)
const buttonActive = ref(false)
const buttonBlock = ref(false)
const buttonType = ref('primary')
const buttonWide = ref(false)
const buttonIcon = ref(false)

const buttonSize = ref('base')

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
