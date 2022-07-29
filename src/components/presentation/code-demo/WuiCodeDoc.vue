<template>
  <div class="wui-code-demo flex border border-solid bg-white rounded">
    <div
      class="wui-code-demo-scene flex justify-center items-center flex-wrap p-4"
    >
      <slot />
    </div>
    <div class="wui-code-demo-props flex flex-col px-4 py-5">
      <h3>Props</h3>
      <slot name="props" />
    </div>
  </div>
</template>

<style lang="css">
.wui-code-demo {
  border-color: #d3dae6;
  min-height: 200px;
}

.wui-code-demo-scene {
  flex: 5;
}

.wui-code-demo-props {
  flex: 2;
  border-left: 1px solid #d3dae6;
}

.wui-code-demo-props > *:not(.wui-divider) {
  @apply mb-3;
}

.wui-code-demo + .table-box {
  margin-top: 30px;
}

@media only screen and (max-width: 600px) {
  .wui-code-demo {
    @apply flex-col;
  }
  .wui-code-demo-scene {
    @apply py-5;
    @apply px-0;
  }
  .wui-code-demo-props {
    border-top: 1px solid #d3dae6;
    border-left: none;
  }
}
</style>
