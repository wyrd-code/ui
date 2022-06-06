<template>
  <div>
    <h1>Drawer</h1>

    <WuiCodeExample :code="exampleCode" title="Drawer">
      <template #description>
        <p class="mx-6">
          This component is intended to be used only with wide screens
        </p>
      </template>
      <WuiButton type="primary" @click="drawerLeftVisible = true">
        Left drawer
      </WuiButton>
      <WuiButton type="primary" @click="drawerVisible = true">
        Right drawer
      </WuiButton>

      <WuiDrawer v-model="drawerVisible">
        <h3 class="m-6">
          <div class="contacts icon-ph-user-circle" />
          Contacts
        </h3>
        <WuiDivider />
        <template v-for="user in fakeUsers" :key="user.username">
          <div class="flex flex-row px-6 justify-between">
            <WuiAvatar :src="user.avatar" />
            <div class="flex flex-col flex-1 pl-3 justify-between">
              <p class="font-medium">
                {{ user.name }}
              </p>
              <p style="color: #787f8a" class="font-medium text-sm">
                @{{ user.username }}
              </p>
            </div>
            <WuiButton icon="call" type="primary" />
          </div>
          <WuiDivider />
        </template>
      </WuiDrawer>
      <WuiDrawer v-model="drawerLeftVisible" placement="left">
        <h3 class="m-6">
          <div class="contacts icon-ph-user-circle" />
          Contacts
        </h3>
        <WuiDivider />
        <template v-for="user in fakeUsers" :key="user.username">
          <div class="flex flex-row px-6 justify-between">
            <WuiAvatar :src="user.avatar" />
            <div class="flex flex-col flex-1 pl-3 justify-between">
              <p class="font-medium">
                {{ user.name }}
              </p>
              <p style="color: #787f8a" class="font-medium text-sm">
                @{{ user.username }}
              </p>
            </div>
            <WuiButton icon="call" type="primary" />
          </div>
          <WuiDivider />
        </template>
      </WuiDrawer>
    </WuiCodeExample>

    <WuiCodeExample :code="nestedCode" title="Nested Drawers">
      <template #description>
        <p class="mx-6">
          Nested drawers isn't a good idea for your interface, but we
          implemented it anyway
        </p>
      </template>

      <WuiButton type="primary" @click="nestedDrawer = true">
        Left Nested drawer
      </WuiButton>

      <WuiButton type="primary" @click="nestedDrawerR = true">
        Right Nested drawers
      </WuiButton>

      <WuiDrawer v-model="nestedDrawer" placement="left">
        <div class="flex mt-12 justify-center">
          <WuiButton size="lg" @click="nestedDrawer2 = true">
            Show nested
          </WuiButton>
        </div>
      </WuiDrawer>
      <WuiDrawer v-model="nestedDrawer2" placement="left">
        <div class="flex mt-12 justify-center">
          <WuiButton size="lg" @click="nestedDrawer3 = true">
            Show nested
          </WuiButton>
        </div>
      </WuiDrawer>
      <WuiDrawer v-model="nestedDrawer3" placement="left">
        <div class="flex mt-12 justify-center">
          <WuiButton size="lg" @click="nestedDrawer4 = true">
            Show nested
          </WuiButton>
        </div>
      </WuiDrawer>
      <WuiDrawer v-model="nestedDrawer4" placement="left">
        <h2>Finally. No more drawers.</h2>
      </WuiDrawer>

      <WuiDrawer v-model="nestedDrawerR">
        <div class="flex mt-12 justify-center">
          <WuiButton size="lg" @click="nestedDrawerR2 = true">
            Show nested
          </WuiButton>
        </div>
      </WuiDrawer>
      <WuiDrawer v-model="nestedDrawerR2">
        <div class="flex mt-12 justify-center">
          <WuiButton size="lg" @click="nestedDrawerR3 = true">
            Show nested
          </WuiButton>
        </div>
      </WuiDrawer>
      <WuiDrawer v-model="nestedDrawerR3">
        <div class="flex mt-12 justify-center">
          <WuiButton size="lg" @click="nestedDrawerR4 = true">
            Show nested
          </WuiButton>
        </div>
      </WuiDrawer>
      <WuiDrawer v-model="nestedDrawerR4">
        <h2>Finally. No more drawers.</h2>
      </WuiDrawer>
    </WuiCodeExample>

    <WuiPropsTable :data-sheet="dataSheet" :slot-sheet="slotSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    drawerVisible: false,
    drawerLeftVisible: false,
    nestedDrawer: false,
    nestedDrawer2: false,
    nestedDrawer3: false,
    nestedDrawer4: false,
    nestedDrawerR: false,
    nestedDrawerR2: false,
    nestedDrawerR3: false,
    nestedDrawerR4: false,
    fakeUsers: [] as any[],
    nestedCode: `
<WuiButton type="primary" @click="nestedDrawer = true">Left Nested drawer</WuiButton>
<WuiButton type="primary" @click="nestedDrawerR = true">Right Nested drawers</WuiButton>

<WuiDrawer v-model="nestedDrawer" placement="left">
  <WuiButton @click="nestedDrawer2 = true">Show nested</WuiButton>
</WuiDrawer>
<WuiDrawer v-model="nestedDrawer2" placement="left">
  <WuiButton @click="nestedDrawer3 = true">Show nested</WuiButton>
</WuiDrawer>
<WuiDrawer v-model="nestedDrawer3" placement="left">
  <WuiButton @click="nestedDrawer4 = true">Show nested</WuiButton>
</WuiDrawer>
<WuiDrawer v-model="nestedDrawer4" placement="left">
  <img class="w-full" src="/finally.png" />
</WuiDrawer>
<WuiDrawer v-model="nestedDrawerR">
  <WuiButton @click="nestedDrawerR2 = true">Show nested</WuiButton>
</WuiDrawer>
<WuiDrawer v-model="nestedDrawerR2">
  <WuiButton @click="nestedDrawerR3 = true">Show nested</WuiButton>
</WuiDrawer>
<WuiDrawer v-model="nestedDrawerR3">
  <WuiButton @click="nestedDrawerR4 = true">Show nested</WuiButton>
</WuiDrawer>
<WuiDrawer v-model="nestedDrawerR4">
  <img class="w-full" src="/finally.png" />
</WuiDrawer>`,
    exampleCode: `<WuiButton @click="drawerLeftVisible = true" type="primary">
    Left drawer
    </WuiButton>

<WuiButton @click="drawerVisible = true" type="primary">
  Right drawer
</WuiButton>

<WuiDrawer v-model="drawerVisible">
  <h3 style="margin: 24px">
    <div
      class="contacts icon-ph-user-circle"
    />
    Contacts
  </h3>
  <WuiDivider />
  <template v-for="(user, i) in fakeUsers" :key="i">
    <div>
      <WuiAvatar :src="user.avatar" />
      <div>
        <p style="font-weight: 500">{{ user.name }}</p>
        <p style="font-size: 14px; font-weight: 500; color: #787f8a">
          @{{ user.username }}
        </p>
      </div>
      <WuiButton icon="call" type="primary"></WuiButton>
    </div>
    <WuiDivider />
  </template>
</WuiDrawer>

<WuiDrawer placement="left" v-model="drawerLeftVisible">
  <h3 style="margin: 24px">
    <div
      class="contacts icon-ph-user-circle"
    />
    Contacts
  </h3>
  <WuiDivider />
  <template v-for="(user, i) in fakeUsers" :key="i">
    <div>
      <WuiAvatar :src="user.avatar" />
      <div>
        <p style="font-weight: 500">{{ user.name }}</p>
        <p style="font-size: 14px; font-weight: 500; color: #787f8a">
          @{{ user.username }}
        </p>
      </div>
      <WuiButton icon="call" type="primary"></WuiButton>
    </div>
    <WuiDivider />
  </template>
</WuiDrawer>`,
    dataSheet: [
      {
        property: 'width',
        type: ['String'],
        default: '500px',
        values: [],
        description: 'Drawer width',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'right',
        values: ['right', 'left'],
        description: 'Drawer position',
      },
      {
        property: 'closable-mask',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Close drawer on the mask click',
      },
      {
        property: 'hide-mask',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Hides drawer mask',
      },
      {
        property: 'v-model',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Drawer v-model value',
      },
    ],
    slotSheet: [
      {
        name: 'default',
        description: 'Drawer body',
      },
    ],
  }),
  async mounted() {
    const reqNames = await fetch(
      'https://randomuser.me/api/?inc=picture,name,login&results=12'
    )
    const data = await reqNames.json()
    this.fakeUsers = data.results.map((el: any) => {
      const { first, last } = el.name
      return {
        name: `${first} ${last}`,
        avatar: el.picture.medium,
        username: el.login.username,
      }
    })
  },
})
</script>

<style scoped>
.contacts {
  margin-right: 6px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 6px,
    rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(50, 50, 93, 0.05) 0px 0px 0px 1px;
}
</style>
