<template>
  <div class="flex flex-col space-y-4">
    <WuiButton
      @click="$wuiToast.neutral({ label: 'Cheers', description: 'Mate' })"
      >Skold!</WuiButton
    >
  </div>
</template>
