<template>
  <div class="max-w-128">
    <WuiCard>
      <template #top>
        <div class="flex space-x-4 items-center justify-between">
          <div class="flex space-x-4 items-center">
            <WuiAvatar />
            <h3>Micheal Adams</h3>
          </div>
          <span class="published">
            <span class="icon-ph-calendar" />
            12 days ago
          </span>
        </div>
      </template>

      <template #preview>
        <img
          src="/demo-content/tony-lee-8IKf54pc3qk-unsplash.jpg"
          alt="Photo of the caffe"
        />
      </template>

      <template #header>
        <div class="w-full flex justify-end">
          <span class="location">
            <span class="icon-ph-tag" />
            Prague, Czech Republic
          </span>
        </div>
        <h2 class="text-2xl font-bold">Caffe Noire</h2>
      </template>

      <template #actions>
        <WuiButtonGroup>
          <WuiButton variant="primary">Open</WuiButton>
          <WuiButton>Review</WuiButton>
        </WuiButtonGroup>
      </template>

      <p>
        Praesent accumsan tellus fermentum sem aliquam, at tincidunt nulla
        feugiat. Donec in lacus dui. Mauris ullamcorper ultricies mi&hellip;
      </p>
    </WuiCard>
  </div>
</template>
