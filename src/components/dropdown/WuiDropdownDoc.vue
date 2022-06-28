<template>
  <div class="space-y-4">
    <h1>Dropdown</h1>

    <WuiCodeDemo>
      <WuiDropdown class="">
        <template #button="{ toggle }">
          <WuiButton @click="toggle">
            <span>{{ buttonText }} </span>
            <span class="icon-ph-caret-down ml-2" />
          </WuiButton>
        </template>
        <template #default="{ itemClass }">
          <div class="w-54">
            <a
              v-for="(option, idx) in buttonTypes"
              :key="idx"
              class="text-xs !py-8px"
              :class="itemClass"
            >
              <span class="ml-1">{{ option }}</span>
            </a>
          </div>
        </template>
      </WuiDropdown>

      <template #props>
        <WuiInput v-model="buttonText" label-top="Label" />
      </template>
    </WuiCodeDemo>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { Colors } from '../../models/enums'
import WuiCheckbox from '../checkbox/WuiCheckbox.vue'
import WuiInput from '../input/WuiInput.vue'
import WuiSelect from '../select/WuiSelect.vue'

const buttonText = ref('Button')
const buttonOutline = ref(false)
const buttonType = ref('primary')

const buttonTypes = Object.values(Colors)
</script>
