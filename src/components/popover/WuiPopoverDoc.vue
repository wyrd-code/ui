<template>
  <div>
    <h1>Popover</h1>

    <WuiCodeExample :code="exampleCode" title="Example"> </WuiCodeExample>

    <WuiCodeExample :code="placementCode" title="Placement">
      <template #description>
        <p class="px-6">
          Click to see the popover. There are 12 placement available for
          popover, most used are shown in the example
        </p>
      </template>

      <div class="flex items-center justify-center">
        <WuiButton-group vertical class="w-128">
          <WuiPopover placement="top">
            <WuiButton wide>Top</WuiButton>

            <template #content> Top popover </template>
          </WuiPopover>
          <WuiPopover placement="right">
            <WuiButton wide>Right</WuiButton>

            <template #content> Right popover </template>
          </WuiPopover>
          <WuiPopover placement="left">
            <WuiButton wide>Left</WuiButton>

            <template #content> Left popover </template>
          </WuiPopover>
          <WuiPopover placement="bottom">
            <WuiButton wide>Bottom</WuiButton>

            <template #content> Bottom popover </template>
          </WuiPopover>
        </WuiButton-group>
      </div>
    </WuiCodeExample>

    <WuiCodeExample :code="imageCode" title="Image">
      <template #description>
        <p class="">You can disable paddings inside popover and show image</p>
      </template>

      <div class="flex items-center justify-center">
        <WuiPopover placement="top">
          <WuiButton>Show image</WuiButton>

          <template #content>
            <img
              width="150"
              src="/demo-content/daniel-sessler-P2UnRiIAxSM-unsplash.jpg"
              alt="example photo"
            />
          </template>
        </WuiPopover>
      </div>
    </WuiCodeExample>

    <WuiPropsTable
      tag-name="WuiPopover"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    removed: false,
    exampleCode: `<WuiPopover :disabled="removed">
  <WuiButton>Delete</WuiButton>
  <template #content>
    <div>
      <p style="margin-bottom: 8px">Please confirm deletion</p>
      <div style="display: flex; justify-content: flex-end">
        <WuiButton size="sm">No</WuiButton>
        <WuiButton
          style="margin-left: 8px"
          size="sm"
          type="danger"
          @click="(removed = true), $wuiToast.success({ text: 'Deleted' })"
          >Yes</WuiButton
        >
      </div>
    </div>
  </template>
</WuiPopover>`,
  }),
})
</script>
