<template>
  <div class="space-y-4">
    <h1>Avatar</h1>
    <WuiCodeDemo>
      <WuiAvatar
        :text="avatarText ? 'Mike Yelinksy' : undefined"
        :src="avatarImage ? photo : undefined"
        :square="avatarSquare"
      />
      <template #props>
        <WuiCheckbox v-model="avatarSquare" label="Square" />
        <WuiCheckbox v-model="avatarImage" label="Image" />
        <WuiCheckbox v-model="avatarText" label="Text" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="Type">
      <WuiAvatar />
      <WuiAvatar square />
    </WuiCodeExample>

    <WuiCodeExample title="Color">
      <WuiAvatar color="#3051ff" />
      <WuiAvatar color="#f93155" />
      <WuiAvatar color="#131313" />
    </WuiCodeExample>

    <WuiCodeExample title="Image">
      <WuiAvatar :src="photo" />
      <WuiAvatar :src="photo" square />
    </WuiCodeExample>

    <WuiCodeExample title="Initials">
      <WuiAvatar color="#3051ff" text="Yan" />
      <WuiAvatar color="#3051ff" text="Mike Yelinksy" />
    </WuiCodeExample>

    <WuiCodeExample title="Size">
      <WuiAvatar />
      <WuiAvatar size="50px" />
      <WuiAvatar size="60px" />
      <WuiAvatar size="70px" />
    </WuiCodeExample>

    <WuiCodeExample title="With badge">
      <WuiBadge value="1">
        <WuiAvatar :src="photo" square />
      </WuiBadge>
      <WuiBadge position="bottom-left" type="success" point>
        <WuiAvatar :src="photo" square />
      </WuiBadge>
    </WuiCodeExample>

    <WuiCodeExample title="Group">
      <WuiAvatarGroup>
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
      </WuiAvatarGroup>

      <WuiAvatarGroup square>
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
      </WuiAvatarGroup>

      <WuiDivider />

      <WuiAvatarGroup vertical>
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
      </WuiAvatarGroup>

      <WuiAvatarGroup vertical square>
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
      </WuiAvatarGroup>
    </WuiCodeExample>

    <WuiCodeExample title="Group with avatars limit">
      <WuiAvatarGroup :max="3">
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
      </WuiAvatarGroup>

      <WuiDivider />

      <WuiAvatarGroup :max="3" vertical>
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
        <WuiAvatar :src="photo" />
      </WuiAvatarGroup>
    </WuiCodeExample>

    <WuiPropsTable tag-name="WuiAvatar" :data-sheet="dataSheet" />
    <WuiPropsTable tag-name="WuiAvatarGroup" :data-sheet="dataSheetGroup" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const photo = '/raspberry.jpg'
const avatarSquare = ref(false)
const avatarImage = ref(false)
const avatarText = ref(false)

const dataSheet = [
  {
    property: 'src',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Src of avatar image',
  },
  {
    property: 'text',
    type: ['String'],
    default: '-',
    values: [],
    description: 'Avatar text',
  },
  {
    property: 'color',
    type: ['String'],
    default: '-',
    values: ['hex', 'rgb', 'hsl'],
    description: 'Avatar color',
  },
  {
    property: 'size',
    type: ['String'],
    default: '40px',
    values: [],
    description: 'Avatar size',
  },
  {
    property: 'square',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes avatar square',
  },
]
const dataSheetGroup = [
  {
    property: 'size',
    type: ['String'],
    default: '40px',
    values: [],
    description: 'Avatar size for all avatars in group',
  },
  {
    property: 'square',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Makes avatars square in group',
  },
  {
    property: 'max',
    type: ['Number'],
    default: '-',
    values: [],
    description: 'Limit the maximum amount of visible avatars',
  },
]
</script>
