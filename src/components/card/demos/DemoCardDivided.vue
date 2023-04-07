<template>
  <div class="max-w-128">
    <WuiCard divided>
      <template #preview>
        <img
          src="/demo-content/tony-lee-8IKf54pc3qk-unsplash.jpg"
          alt="Caffe Photo"
        />
      </template>

      <template #header>
        <small class="published">
          <span class="icon-ph-calendar" />
          12 days ago
        </small>
        <h2 class="text-2xl font-bold">Caffe Noire</h2>
      </template>

      <template #actions>
        <small class="location text-neutral-11">
          <span class="icon-ph-tag" />
          Prague, Czech Republic
        </small>
      </template>

      <p>
        Praesent accumsan tellus fermentum sem aliquam, at tincidunt nulla
        feugiat. Donec in lacus dui. Mauris ullamcorper ultricies mi&hellip;
      </p>
    </WuiCard>
  </div>
</template>
