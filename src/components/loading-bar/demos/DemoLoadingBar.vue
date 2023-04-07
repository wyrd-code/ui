<template>
  <WuiButton @click="$wuiLoadingBar.start()">Start</WuiButton>
  <WuiButton @click="$wuiLoadingBar.update(50)">Set 50%</WuiButton>
  <WuiButton @click="$wuiLoadingBar.finish()">Finish</WuiButton>
</template>
