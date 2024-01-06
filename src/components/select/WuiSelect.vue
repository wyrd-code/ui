<template>
  <WuiPopover
    class="wui-select"
    :placement="placement"
    :show="isOpen"
    @close="closeDropdown"
    @open="openDropdown"
  >
    <template #before>
      <slot
        name="before"
        :selected-options="selectedOptions"
        :unselect-option-by-value="unselectOptionByValue"
      />
    </template>

    <template #trigger>
      <div
        :id="id"
        :ref="(el) => setTriggerRef(el as any)"
        class="wui-select-selection"
        role="listbox"
        :tabindex="disabled ? -1 : 0"
        :data-active="isOpen"
        :data-disabled="disabled"
        aria-autocomplete="none"
        :aria-activedescendant="activeDescendant"
        :aria-controls="`${id}-listbox`"
        :aria-labelledby="`${id}-label`"
        :aria-disabled="disabled"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-haspopup="listbox"
        v-on="disabled ? {} : { keydown: handleKeypress }"
      >
        <span
          v-if="!multiple && selectedOption.value"
          class="wui-select-selected"
        >
          <slot
            name="selected-option"
            :props="props"
            :selected-option="selectedOption"
          >
            {{ selectedOption.label }}
          </slot>
          <WuiButton
            :tabindex="disabled ? -1 : 0"
            icon
            shape="square"
            size="sm"
            ghost
            class="wui-select-reset"
            aria-label="Clear selection"
            v-on="disabled ? {} : { keydown: handleResetKeypress }"
            @click.stop.prevent="clear"
          >
            <span class="icon-ph-x" />
          </WuiButton>
        </span>

        <span
          v-else-if="multiple && selectedOptions.length"
          class="wui-select-selected"
        >
          <slot
            name="selected-options"
            :selected-options="selectedOptions"
            :unselect-option-by-value="unselectOptionByValue"
          >
            <template
              v-for="item, idx in selectedOptions"
              :key="`selected-item-${idx}`"
            >
              <slot
                name="selected-option"
                :props="props"
                :selected-option="item"
              >
                {{ item.label }}
                <span v-if="selectedOptions.length > 1 && idx < (selectedOptions.length - 1)">
                  ,&nbsp;
                </span>
              </slot>
            </template>
          </slot>
          <WuiButton
            v-if="clearable"
            :tabindex="disabled ? -1 : 0"
            icon
            shape="square"
            size="sm"
            ghost
            class="wui-select-reset"
            v-on="disabled ? {} : { keydown: handleResetKeypress }"
            @click.stop.prevent="clear"
          >
            <span class="icon-ph-x" />
          </WuiButton>
        </span>

        <span
          v-else
          class="wui-select-placeholder"
        >
          <slot
            name="placeholder"
            :props="props"
          >
            {{ placeholder }}
          </slot>
        </span>

        <span class="wui-select-controls">
          <slot
            name="icon"
            :props="props"
          >
            <span
              class="wui-select-arrow icon-ph-caret-up-down"
              :class="isOpen && 'wui-select-arrow--active'"
            />
          </slot>
        </span>
      </div>
    </template>

    <template #content>
      <div
        v-if="isOpen"
        class="wui-select-dropdown"
        :data-divided="divided"
      >
        <ul
          :ref="(el) => setSelectListRef(el as any)"
          class="wui-select-list"
        >
          <template
            v-for="(option, optionIndex) in options"
            :key="optionIndex"
          >
            <li
              v-if="isSeparator(option)"
              class="wui-select-separator"
            />
            <li
              v-else
              :id="`${id}-item-${optionIndex}`"
              :ref="(el) => setOptionRef(el as any, optionIndex)"
              class="wui-select-option"
              role="option"
              tabindex="0"
              :aria-selected="isOptionSelected(optionIndex)"
              :data-selected="focusedOptionIndex === optionIndex"
              :data-disabled="option.disabled"
              @keydown.enter.stop.prevent="selectOption(optionIndex)"
              @click.stop.prevent="event => selectOption(optionIndex, event)"
            >
              <div>
                <slot
                  name="option"
                  :props="props"
                  :option="option"
                >
                  {{ option.label }}
                </slot>
              </div>
              <transition name="fade-right">
                <span
                  v-if="isOptionSelected(optionIndex)"
                  class="wui-select-option-check icon-ph-check-bold"
                />
              </transition>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import { WUI_SELECT_PROPS, useSelect } from './select'

const props = defineProps(WUI_SELECT_PROPS)

const emit = defineEmits(['update:modelValue'])

const {
  activeDescendant,
  clear,
  closeDropdown,
  focusedOptionIndex,
  isOptionSelected,
  handleKeypress,
  handleResetKeypress,
  isOpen,
  isSeparator,
  openDropdown,
  options,
  selectedOption,
  selectOption,
  selectedOptions,
  setOptionRef,
  setSelectListRef,
  setTriggerRef,
  unselectOptionByValue,
} = useSelect(props, emit)
</script>

<style lang="css">
@import url('select.css');
</style>
