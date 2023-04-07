<template>
  <WuiPaging :count="33">
    <div class="flex w-full items-center justify-between p-4">
      <WuiPagingSummary mode="pages" />
      <WuiPagingLinks :show-first-last="true" :delta="5" condensed />
    </div>
  </WuiPaging>
</template>
