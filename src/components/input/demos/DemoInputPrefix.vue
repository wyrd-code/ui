<template>
  <WuiInput prefix="https://" />
  <WuiInput suffix=".com" />
  <WuiInput prefix="https://" suffix=".com" />

  <WuiInput name="name" placeholder="Your name">
    <template #prefixIcon>
      <div class="icon-ph-heart" />
    </template>
  </WuiInput>

  <WuiInput name="name" placeholder="Your name">
    <template #suffixIcon>
      <div class="icon-ph-heart" />
    </template>
  </WuiInput>
</template>
