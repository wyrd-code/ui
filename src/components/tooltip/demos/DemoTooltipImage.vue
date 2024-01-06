<template>
  <WuiTooltip
    placement="top"
    hover
    unpadded
    arrow
  >
    <WuiButton>Hover for an image tooltip</WuiButton>

    <template #content>
      <img
        width="150"
        src="/demo-content/daniel-sessler-P2UnRiIAxSM-unsplash.jpg"
        alt="example photo"
      />
    </template>
  </WuiTooltip>
</template>
