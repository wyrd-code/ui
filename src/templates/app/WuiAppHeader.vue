<template>
  <Disclosure v-slot="{ open }" as="nav">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <slot name="header-brand" />

          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <slot name="header-nav" />
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6 space-x-2">
            <slot name="header-nav-secondary" />
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Otvori izbornik</span>
            <icon-mdi-menu
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
            />
            <icon-mdi-close v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-5 space-y-1 sm:px-3">
        <slot name="header-nav-mobile" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>
