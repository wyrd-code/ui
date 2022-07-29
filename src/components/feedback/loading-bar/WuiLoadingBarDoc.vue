<template>
  <div>
    <h1>Loading bar</h1>

    <WuiCodeExample :code="typesCode" title="Loading bar">
      <WuiButton @click="$LoadingBar.start()"> Start </WuiButton>
      <WuiButton @click="$LoadingBar.update(50)"> Set 50% </WuiButton>
      <WuiButton @click="$LoadingBar.finish()"> Finish </WuiButton>
    </WuiCodeExample>

    <WuiPropsTable :method-sheet="methodSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    typesCode: `<WuiButton @click="$LoadingBar.start()">Start</WuiButton>
<WuiButton @click="$LoadingBar.update(50)">Set 50%</WuiButton>
<WuiButton @click="$LoadingBar.finish()">Finish</WuiButton>
`,
    methodSheet: [
      {
        method: 'start',
        description: 'Start loading progress',
        // arguments: []
      },
      {
        method: 'update',
        description: 'Update progress value in percentage',
        arguments: 'value: number',
      },
      {
        method: 'finish',
        description: 'Finish loading and hide',
        // arguments: []
      },
    ],
  }),
})
</script>
