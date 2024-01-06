<template>
  <div class="max-w-128">
    <WuiCard condensed>
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
          <WuiButton
            icon
            shape="round"
          >
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
        <h2 class="text-2xl font-bold">Caffe Noire</h2>
        <p>
          Praesent accumsan tellus fermentum sem aliquam, at tincidunt nulla
          feugiat. Donec in lacus dui. Mauris ullamcorper ultricies mi&hellip;
        </p>
      </template>

      <template #actions>
        <strong>
          <a href="#unpadded">Scroll to next demo</a>
        </strong>
      </template>
    </WuiCard>
  </div>
</template>
