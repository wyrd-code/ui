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
      content: `The First Things First manifesto was written 29 November 1963 and
published in 1964 by Ken Garland. It was backed by over 400 graphic
designers and artists and also received the backing of Tony Benn,
radical left-wing MP and activist, who published it in its entirety in
The Guardian newspaper.`,
    }
    return {
      comment,
    }
  },
})
</script>
