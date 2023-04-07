<template>
  <WuiAlert title="Alert with a title" text="Alert with regular text" />
  <WuiAlert>
    <template #title>
      <em>Alert with slot based title</em>
    </template>
    <template #icon>
      <span class="icon-ph-heart text-lg text-red-9 animate-pulse" />
    </template>
    And slot based icon &amp; text
  </WuiAlert>
</template>
