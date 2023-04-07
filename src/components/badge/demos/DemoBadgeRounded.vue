<template>
  <WuiButtonGroup vertical stretch="wide">
    <WuiBadge variant="primary" :value="12" square>
      <WuiButton>Square badge</WuiButton>
    </WuiBadge>
    <WuiBadge variant="primary" square dot>
      <WuiButton>
        <span class="icon-ph-heart text-2xl" />
      </WuiButton>
    </WuiBadge>
  </WuiButtonGroup>
</template>
