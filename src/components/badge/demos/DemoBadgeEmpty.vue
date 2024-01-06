<template>
  <WuiButtonGroup
    vertical
    stretch="wide"
  >
    <WuiBadge value="0">
      <WuiButton block>Inbox </WuiButton>
    </WuiBadge>
    <WuiBadge :value="0">
      <WuiButton block>Inbox </WuiButton>
    </WuiBadge>
    <WuiBadge
      value="0"
      show-zero
    >
      <WuiButton block>Inbox </WuiButton>
    </WuiBadge>
  </WuiButtonGroup>
</template>
