<template>
  <div>
    <h1>Notification</h1>

    <WuiCodeExample :code="typesCode" title="Notification types">
      <WuiButton
        type="primary"
        @click="
          $Notification({
            title: 'Primary notification',
            description:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        Primary notification
      </WuiButton>
      <WuiButton
        type="success"
        @click="
          $Notification.success({
            title: 'Success notification',
            description:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        Success notification
      </WuiButton>
      <WuiButton
        type="danger"
        @click="
          $Notification.danger({
            title: 'Danger notification',
            description:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        Danger notification
      </WuiButton>
      <WuiButton
        type="warning"
        @click="
          $Notification.warning({
            title: 'Warning notification',
            description:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        Warning notification
      </WuiButton>
    </WuiCodeExample>

    <WuiCodeExample :code="emojiCode" title="🧬 Notification with Emoji">
      <WuiButton
        outlined
        @click="
          $Notification({
            title: 'Emoji notification',
            emoji: '🧬',
            description:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        🧬 Emoji notification
      </WuiButton>
    </WuiCodeExample>

    <WuiCodeExample :code="imageCode" title="Notification with image">
      <WuiButton
        @click="
          $Notification({
            title: 'Image notification',
            image: '/assets/raspberry.jpg',
            description:
              'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        Click me
      </WuiButton>
    </WuiCodeExample>

    <WuiCodeExample :code="placementCode" title="Notification position">
      <div class="flex flex-col">
        <div class="flex flex-row mb-3 justify-center">
          <WuiButton
            @click="
              $Notification({
                title: 'Top-left notification',
                image: '/assets/raspberry.jpg',
                placement: 'top-left',
                description:
                  'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              })
            "
          >
            Top-left
          </WuiButton>
          <WuiButton
            @click="
              $Notification({
                title: 'Top-right notification',
                image: '/assets/raspberry.jpg',
                placement: 'top-right',
                description:
                  'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              })
            "
          >
            Top-right
          </WuiButton>
        </div>
        <div class="flex flex-row mb-3 justify-center">
          <WuiButton
            @click="
              $Notification({
                title: 'Bottom-left notification',
                image: '/assets/raspberry.jpg',
                placement: 'bottom-left',
                description:
                  'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              })
            "
          >
            Bottom-left
          </WuiButton>
          <WuiButton
            @click="
              $Notification({
                title: 'Top-right notification',
                image: '/assets/raspberry.jpg',
                placement: 'bottom-right',
                description:
                  'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              })
            "
          >
            Bottom-right
          </WuiButton>
        </div>
      </div>
    </WuiCodeExample>

    <WuiPropsTable :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WuiPropsTable from '../props-table/WuiPropsTable.vue'

export default defineComponent({
  components: { WuiPropsTable },
  data: () => ({
    typesCode: `
<WuiButton
  @click="$Notification({
  title: 'Primary notification',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Primary notification</WuiButton>
<WuiButton
  type="success"
  @click="$Notification.success({
  title: 'Success notification',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Success notification</WuiButton>
<WuiButton
  type="danger"
  @click="$Notification.danger({
  title: 'Danger notification',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Danger notification</WuiButton>
<WuiButton
  type="warning"
  @click="$Notification.warning({
  title: 'Warning notification',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Warning notification</WuiButton>`,
    emojiCode: `
<WuiButton
  outlined
  @click="$Notification({
    title: 'Emoji notification',
    emoji: '🧬',
    description:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>🧬 Emoji notification</WuiButton>`,
    imageCode: `
<WuiButton
  @click="$Notification({
  title: 'Image notification',
  image: 'https://images.unsplash.com/photo-1545920281-8f9385c1b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Click me</WuiButton>`,
    placementCode: `
<WuiButton
  @click="$Notification({
  title: 'Top-left notification',
  image: '/assets/raspberry.jpg',
  placement: 'top-left',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Top-left</WuiButton>
<WuiButton
  @click="$Notification({
  title: 'Top-right notification',
  image: '/assets/raspberry.jpg',
  placement: 'top-right',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Top-right</WuiButton>
<WuiButton
  @click="$Notification({
  title: 'Bottom-left notification',
  image: '/assets/raspberry.jpg',
  placement: 'bottom-left',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Bottom-left</WuiButton>
<WuiButton
  @click="$Notification({
  title: 'Top-right notification',
  image: '/assets/raspberry.jpg',
  placement: 'bottom-right',
  description:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Bottom-right</WuiButton>`,
    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the notification',
      },
      {
        property: 'title',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Title of the notification',
      },
      {
        property: 'text',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Content of the notification',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'top-right',
        values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
        description: 'Position of the notification',
      },
      {
        property: 'duration',
        type: ['Number'],
        default: '5000',
        values: [],
        description: 'Duration of the notification',
      },
      {
        property: 'icon',
        type: ['String'],
        default: 'Depends on notifcation type',
        values: ['Material Icons'],
        description: 'Icon of the notification',
      },
      {
        property: 'image',
        type: ['String'],
        default: '-',
        values: ['url'],
        description: 'Image of the notification',
      },
      {
        property: 'emoji',
        type: ['String'],
        default: '-',
        values: ['emoji'],
        description: 'Emoji of the notification',
      },
      {
        property: 'on-close',
        type: ['Function'],
        default: '() => void',
        values: [],
        description: 'Callback triggers when notification hides',
      },
    ],
  }),
})
</script>
