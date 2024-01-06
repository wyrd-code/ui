<template>
  <WuiPopover
    arrow
    placement="bottom"
  >
    <template #trigger>
      <WuiButton>Delete</WuiButton>
    </template>
    <template #content="{ close }">
      <div class="bg-neutral-1 shadow-lg rounded">
        <p class="p-4 text-center text-lg">Are you sure?</p>
        <WuiButtonGroup
          class="bg-neutral-2 p-4 rounded-b border-t border-neutral-5"
        >
          <WuiButton
            class="ml-2"
            size="sm"
            variant="danger"
            @click="$wuiToast.success({ label: 'Deleted' })"
          >
            Yes, delete
          </WuiButton>
          <WuiButton
            size="sm"
            @click="close"
          >Cancel</WuiButton>
        </WuiButtonGroup>
      </div>
    </template>
  </WuiPopover>
</template>
