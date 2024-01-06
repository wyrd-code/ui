<template>
  <div class="space-y-4">
    <h1>Breadcrumbs</h1>

    <WuiDemo>
      <WuiBreadcrumbs>
        <ul>
          <li
            v-for="(item, idx) in demoItems"
            :key="`demo-crumb-${idx}`"
          >
            <a>
              <span
                v-if="buttonIcon"
                class="mr-2 icon-ph-heart"
              />
              {{ item }}
            </a>
          </li>
        </ul>
      </WuiBreadcrumbs>

      <template #props>
        <WuiCheckbox
          v-model="buttonIcon"
          label="Icon"
        />
      </template>
    </WuiDemo>

    <WuiCodeExample title="Auto mode">
      <template #description>
        <p>
          It will pick up matched routes and build the breadcrumb links
          automatically.
        </p>
      </template>

      <WuiBreadcrumbsAuto class="" />
    </WuiCodeExample>

    <WuiCodeExample title="Size">
      <template #description>
        <p>Just change text size on the component.</p>
      </template>

      <div class="flex flex-col space-y-4 items-center">
        <WuiBreadcrumbsAuto class="text-xs" />
        <WuiBreadcrumbsAuto class="text-base" />
        <WuiBreadcrumbsAuto class="text-lg" />
        <WuiBreadcrumbsAuto class="text-xl" />
      </div>
    </WuiCodeExample>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const buttonIcon = ref(false)
const demoItems = ref(['Home', 'Section', 'Subsection', 'Endpoint'])
</script>
