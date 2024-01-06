<template>
  <div class="w-full max-w-128">
    <WuiCard>
      <template #header>
        <div class="text-center">
          <WuiAvatar size="2xl" />
          <h3 class="text-2xl font-bold">Micheal Adams</h3>
          <p>A very notable person</p>
        </div>
      </template>

      <template #actions>
        <WuiButtonGroup
          stretch="full"
          condensed
        >
          <WuiButton variant="outlined">Follow</WuiButton>
          <WuiButton variant="outlined">Befriend</WuiButton>
        </WuiButtonGroup>
      </template>
    </WuiCard>
  </div>
</template>
