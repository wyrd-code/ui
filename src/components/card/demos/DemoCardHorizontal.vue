<template>
  <div class="max-w-128">
    <WuiCard horizontal>
      <template #preview>
        <img
          src="/demo-content/tony-lee-8IKf54pc3qk-unsplash.jpg"
          alt="Photo of the caffe"
        />
      </template>

      <template #header>
        <small class="location text-neutral-11">
          <span class="icon-ph-tag" />
          Prague, Czech Republic
        </small>
        <h2 class="text-2xl font-bold">Caffe Noire</h2>
      </template>

      <template #actions>
        <div class="flex space-x-2 items-center justify-start text-neutral-11">
          <WuiAvatar size="sm" />
          <div class="flex flex-col justify-center -space-y-2">
            <h3>Micheal Adams</h3>
            <small class="published">
              <span class="icon-ph-calendar" />
              12 days ago
            </small>
          </div>
        </div>
      </template>

      <p>
        Praesent accumsan tellus fermentum sem aliquam, at tincidunt nulla
        feugiat. Donec in lacus dui. Mauris ullamcorper ultricies mi&hellip;
      </p>
    </WuiCard>
  </div>
</template>
