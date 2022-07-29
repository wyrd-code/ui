<template>
  <WuiLayoutThreeColumn>
    <template #header>
      <div class="p-6 flex items-center justify-center bg-gray-400">header</div>
    </template>

    <div class="p-6 flex flex-1 items-center justify-center bg-gray-100">
      <p>default</p>
    </div>

    <template #asidePrimary>
      <div class="p-6 flex flex-1 items-center justify-center bg-gray-200">
        asidePrimary
      </div>
    </template>

    <template #asideSecondary>
      <div class="p-6 flex flex-1 items-center justify-center bg-gray-200">
        asideSecondary
      </div>
    </template>

    <template #footer>
      <div class="p-6 flex items-center justify-center bg-gray-400">footer</div>
    </template>
  </WuiLayoutThreeColumn>
</template>
