<template>
  <WuiBreadcrumbs
    v-for="size in ['xs', 'sm', 'base', 'lg', 'xl']"
    :key="size"
    :class="[`text-${size}`, '']"
  >
    <ul>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Documents</a>
      </li>
      <li>Add Document</li>
    </ul>
  </WuiBreadcrumbs>
</template>
