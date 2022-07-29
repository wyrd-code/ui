<template>
  <div>
    <h1>Message</h1>

    <WuiCodeExample title="Types">
      <WuiButton type="primary" @click="showMessage('primary')">
        Primary message
      </WuiButton>
      <WuiButton type="success" @click="showMessage('success')">
        Success message
      </WuiButton>
      <WuiButton type="danger" @click="showMessage('danger')">
        Danger message
      </WuiButton>
      <WuiButton type="warning" @click="showMessage('warning')">
        Warning message
      </WuiButton>
    </WuiCodeExample>
    <WuiCodeExample :code="durationCode" title="Duration">
      <WuiButton
        @click="$Message({ duration: 5000, text: 'I have 5000ms left' })"
      >
        5000 ms
      </WuiButton>
    </WuiCodeExample>

    <WuiPropsTable :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    messagesCode:
      `<WuiButton @click="showMessage()">Primary message</WuiButton>
<WuiButton @click="showMessage('Success')" type="success">Success message</WuiButton>
<WuiButton @click="showMessage('Danger')" type="danger">Danger message</WuiButton>
<WuiButton @click="showMessage('Warning')" type="warning">Warning message</WuiButton>

` +
      `export default {
  methods: {
    showMessage(type) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Success message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    }
  }
}`,

    durationCode: `<WuiButton @click="$Message({duration: 5000, text: 'I have 5000ms left'})">5000 ms</WuiButton>`,

    dataSheet: [
      {
        property: 'text',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Text of the message',
      },
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the message',
      },
      {
        property: 'duration',
        type: ['Number'],
        default: 4000,
        values: [],
        description: 'Message duration',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '-',
        values: ['Material Icon'],
        description: 'Message icon',
      },
    ],

    eventSheet: [
      {
        event: '@on-close',
        description: 'The event function triggered when message hides',
        arguments: 'function',
      },
    ],
  }),
  methods: {
    showMessage(type: string) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Warning message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    },
  },
})
</script>
