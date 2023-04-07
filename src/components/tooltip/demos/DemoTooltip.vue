<template>
  <WuiTooltip placement="top">
    <WuiButton>Slot content</WuiButton>
    <template #content>
      <span><WuiTag type="primary">Wow</WuiTag>&nbsp; I came from slot</span>
    </template>
  </WuiTooltip>
</template>
