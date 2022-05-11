<template>
  <WuiLayoutTwoColumn>
    <div class="p-6 flex flex-1 items-center justify-center bg-gray-200">
      default
    </div>

    <template #aside>
      <div class="p-6 flex items-center justify-center bg-gray-300">aside</div>
    </template>

    <template #footer>
      <div class="p-6 flex items-center justify-center bg-gray-400">footer</div>
    </template>
  </WuiLayoutTwoColumn>
</template>
