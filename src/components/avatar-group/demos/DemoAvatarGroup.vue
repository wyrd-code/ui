<template>
  <WuiAvatarGroup>
    <WuiAvatar
      v-for="img in avatars"
      :key="img"
      :src="img"
    />
  </WuiAvatarGroup>
</template>

<script setup>
const avatars = [
  '/demo-content/user-insights-icons/users-1.svg',
  '/demo-content/user-insights-icons/users-2.svg',
  '/demo-content/user-insights-icons/users-3.svg',
  '/demo-content/user-insights-icons/users-4.svg',
  '/demo-content/user-insights-icons/users-5.svg',
]
</script>
