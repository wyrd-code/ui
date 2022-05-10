<template>
  <div class="space-y-4">
    <h1>Breadcrumbs</h1>

    <WuiCodeDemo>
      <WuiBreadcrumbs>
        <ul>
          <li
            v-for="item, idx in demoItems"
            :key="`demo-crumb-${idx}`"
          >
            <a>
              <icon-ph-heart
                v-if="buttonIcon"
                class="mr-2"
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
    </WuiCodeDemo>

    <WuiCodeExample
      title="Default"
    >
      <WuiBreadcrumbs>
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
    </WuiCodeExample>

    <WuiCodeExample
      title="Icons"
    >
      <WuiBreadcrumbs>
        <ul>
          <li>
            <a>
              <icon-ph-house class="h-4 stroke-current mr-2 w-4" />
              Home
            </a>
          </li> 
          <li>
            <a>
              <icon-ph-user-list class="h-4 stroke-current mr-2 w-4" />
              Profiles list
            </a>
          </li> 
          <li>
            <icon-ph-user-plus class="h-4 stroke-current mr-2 w-4" />
            Invite a person
          </li>
        </ul>
      </WuiBreadcrumbs> 
    </WuiCodeExample>

    <WuiCodeExample
      title="Auto mode"
    >
      <template #description>
        <p>It will pick up matched routes and build the breadcrumb links automatically.</p>
      </template>

      <WuiBreadcrumbsAuto class="border rounded px-4" />
    </WuiCodeExample>

    <WuiCodeExample
      title="Size"
    >
      <template #description>
        <p>Just change text size on the component.</p>
      </template>

      <div class="flex flex-col space-y-4 items-center">
        <WuiBreadcrumbsAuto class="border rounded text-xs px-4" />
        <WuiBreadcrumbsAuto class="border rounded text-base px-4" />
        <WuiBreadcrumbsAuto class="border rounded text-lg px-4" />
        <WuiBreadcrumbsAuto class="border rounded text-xl px-4" />
      </div>
    </WuiCodeExample>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const buttonIcon = ref(false)
const demoItems = ref([
  'Home',
  'Section',
  'Subsection',
  'Endpoint',
])
</script>