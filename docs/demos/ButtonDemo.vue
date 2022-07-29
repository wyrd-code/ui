<template>
  <div class="space-y-4">
    <h1>Button</h1>

    <WuiCodeExample title="Loading">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton type="neutral" loading> loading </WuiButton>

        <WuiButton type="neutral" loading outline> loading </WuiButton>

        <WuiButton type="neutral" loading />

        <WuiButton type="neutral" loading circle />
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Round">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton type="neutral" round outline size="lg"> Smooth </WuiButton>
        <WuiButton type="neutral" round outline> Round button </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Icon & Circle">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton type="neutral" circle outline size="lg">
          <div class="icon-ph-heart" />
        </WuiButton>

        <WuiButton type="neutral" circle outline>
          <div class="icon-ph-heart" />
        </WuiButton>

        <WuiButton type="neutral" circle outline size="sm">
          <div class="icon-ph-heart" />
        </WuiButton>

        <WuiButton type="neutral" circle outline size="xs">
          <div class="icon-ph-heart" />
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Icon with label" vertical>
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton outline size="lg">
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton outline>
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton outline size="sm">
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>

        <WuiButton outline size="xs">
          <template #iconPrefix>
            <div class="icon-ph-heart" />
          </template>
          Some label
        </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Wide">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton type="neutral" wide> wide </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Block">
      <div class="flex space-x-4 items-center justify-center">
        <WuiButton type="neutral" block> block </WuiButton>
      </div>
    </WuiCodeExample>

    <WuiCodeExample title="Glass">
      <div
        class="bg-cover border rounded bg-base-300 shadow-md p-20"
        style="
          background-image: url(/raspberry.jpg);
          background-position: center center;
        "
      >
        <div class="flex space-x-4 items-center justify-center">
          <WuiButton glass size="lg"> Glass button </WuiButton>
        </div>
      </div>
    </WuiCodeExample>
  </div>
</template>
