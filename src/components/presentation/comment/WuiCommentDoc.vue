<template>
  <div>
    <h1>Comment</h1>

    <WuiCodeExample title="Default">
      <div class="bg-gray-300 p-4">
        <WuiComment :comment="comment" />
      </div>
    </WuiCodeExample>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiCommentDoc',
  setup() {
    const comment = {
      id: 1,
      content: `Fusce sem metus, viverra sit amet blandit non,
      elementum eget leo. Curabitur leo dolor, bibendum et lacus id,
      mattis viverra justo. Curabitur tempor euismod tempor.
      Nulla facilisi. Aenean sit amet nibh congue, volutpat felis a,
      aliquet ipsum. Phasellus venenatis pulvinar urna.
      Ut tempus vitae nunc eu rutrum.`,
    }
    return {
      comment,
    }
  },
})
</script>
