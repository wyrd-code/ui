<template>
  <WuiAlert
    icon="icon-ph-wrench"
    text="Alert with regular text"
  />
  <WuiAlert
    icon="icon-ph-wrench"
    title="Alert with a title"
  />
  <WuiAlert>
    <template #title>
      <em>Alert with a title</em>
    </template>
    <template #icon>
      <span class="icon-ph-wrench" />
    </template>
    and regular text
  </WuiAlert>
</template>
