<template>
  <div>
    <h1>Popover</h1>

    <WuiCodeExample :code="exampleCode" title="Example">
      <WuiPopover :disabled="removed">
        <WuiButton>Delete</WuiButton>
        <template #content>
          <div>
            <p class="mb-2">Please confirm deletion</p>
            <div class="flex justify-end">
              <WuiButton size="sm"> No </WuiButton>
              <WuiButton
                class="ml-2"
                size="sm"
                type="danger"
                @click="
                  ;(removed = true), $Message.success({ text: 'Deleted' })
                "
              >
                Yes
              </WuiButton>
            </div>
          </div>
        </template>
      </WuiPopover>
    </WuiCodeExample>

    <WuiCodeExample :code="positionsCode" title="Positions">
      <template #description>
        <p class="px-6">
          Click to see the popover. There are 12 positions available for
          popover, most used are shown in the example
        </p>
      </template>

      <WuiButton-group vertical>
        <WuiPopover placement="top">
          <WuiButton>Top</WuiButton>

          <template #content> Top popover </template>
        </WuiPopover>
        <WuiPopover placement="right">
          <WuiButton>Right</WuiButton>

          <template #content> Right popover </template>
        </WuiPopover>
        <WuiPopover placement="left">
          <WuiButton>Left</WuiButton>

          <template #content> Left popover </template>
        </WuiPopover>
        <WuiPopover placement="bottom">
          <WuiButton>Bottom</WuiButton>

          <template #content> Bottom popover </template>
        </WuiPopover>
      </WuiButton-group>
    </WuiCodeExample>

    <WuiCodeExample :code="imageCode" title="Image">
      <template #description>
        <p class="px-6">
          You can disable paddings inside popover and show image
        </p>
      </template>

      <WuiPopover placement="top" borderless>
        <WuiButton>Show image</WuiButton>

        <template #content>
          <img width="150" src="/raspberry.jpg" alt="example photo" />
        </template>
      </WuiPopover>
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
          @click="(removed = true), $Message.success({ text: 'Deleted' })"
          >Yes</WuiButton
        >
      </div>
    </div>
  </template>
</WuiPopover>`,

    positionsCode: `<WuiButton-group vertical>
  <WuiPopover placement="top">
    <WuiButton>Top</WuiButton>
    <template #content>Top popover</template>
  </WuiPopover>

  <WuiPopover placement="right">
    <WuiButton>Right</WuiButton>
    <template #content>Right popover</template>
  </WuiPopover>

  <WuiPopover placement="left">
    <WuiButton>Left</WuiButton>
    <template #content>Left popover</template>
  </WuiPopover>

  <WuiPopover placement="bottom">
    <WuiButton>Bottom</WuiButton>
    <template #content>Bottom popover</template>
  </WuiPopover>
</WuiButton-group>`,

    imageCode: `<WuiPopover placement="top" borderless>
  <WuiButton>Show logo</WuiButton>

  <template #content>
    <img
      width="150"
      src="https://pbs.twimg.com/profile_images/1063458070775427072/HAgejyos_400x400.jpg"
      alt="logo"
    >
  </template>
</WuiPopover>`,

    dataSheet: [
      {
        property: 'placement',
        type: ['String'],
        default: 'top',
        values: [
          'top',
          'bottom',
          'right',
          'left',
          'bottom-left',
          'bottom-right',
          'left-top',
          'left-bottom',
          'right-top',
          'right-bottom',
          'top-left',
          'top-right',
        ],
        description: 'Position of the popover',
      },
      {
        property: 'borderless',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Remove paddings',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Disables popover',
      },
    ],

    dataSheetGroup: [
      {
        property: 'size',
        type: ['String'],
        default: '40px',
        values: [],
        description: 'Avatar size for all avatars in group',
      },
      {
        property: 'square',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes avatars square in group',
      },
      {
        property: 'max',
        type: ['Number'],
        default: '-',
        values: [],
        description: 'Limit the maximum amount of visible avatars',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Active element for popover',
      },
      {
        name: 'content',
        description: 'Content of the popover',
      },
    ],
  }),
})
</script>
