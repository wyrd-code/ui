<template>
  <router-view v-slot="{ Component, route }">
    <WuiTransitionPage name="fade">
      <component
        :is="Component"
        :key="route.path"
      />
    </WuiTransitionPage>
  </router-view>
</template>
