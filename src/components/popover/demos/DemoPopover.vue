<template>
  <WuiPopover arrow placement="bottom">
    <template #button>
      <WuiButton>Delete</WuiButton>
    </template>
    <template #content>
      <div class="bg-neutral-1 shadow-lg rounded">
        <p class="p-4 text-center text-lg">Are you sure?</p>
        <WuiButtonGroup
          class="bg-neutral-2 p-4 rounded-b border-t border-neutral-5"
        >
          <WuiButton
            class="ml-2"
            size="sm"
            variant="danger"
            @click="$wuiToast.success({ text: 'Deleted' })"
          >
            Yes, delete
          </WuiButton>
          <WuiButton size="sm">Cancel</WuiButton>
        </WuiButtonGroup>
      </div>
    </template>
  </WuiPopover>
</template>
