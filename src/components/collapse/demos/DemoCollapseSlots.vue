<template>
  <WuiCollapse>
    <WuiCollapseItem title="Question">
      <template #header>
        <h2 class="text-2xl">A custom header</h2>
      </template>
      <template #icon-contracted>
        <span class="text-2xl rotate-90 icon-ph-wrench" />
      </template>
      <template #icon-expanded>
        <span class="text-2xl icon-ph-wrench" />
      </template>
      <p>This content is placed in the default slot</p>
    </WuiCollapseItem>
  </WuiCollapse>
</template>
