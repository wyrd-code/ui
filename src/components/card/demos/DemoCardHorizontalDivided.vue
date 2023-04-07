<template>
  <div class="max-w-128">
    <WuiCard divided horizontal inverse>
      <template #top>
        <div class="flex space-x-4 items-center justify-between">
          <div class="flex space-x-4 items-center text-sm">
            <WuiAvatar />
            <div>
              <h3 class="text-lg">Micheal Adams</h3>
              <span class="published">
                <span class="icon-ph-calendar" />
                12 days ago
              </span>
            </div>
          </div>
          <WuiButton icon shape="round">
            <span class="icon-ph-dots-three-vertical" />
          </WuiButton>
        </div>
      </template>

      <template #preview>
        <img
          src="/demo-content/tony-lee-8IKf54pc3qk-unsplash.jpg"
          alt="Photo of the caffe"
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
