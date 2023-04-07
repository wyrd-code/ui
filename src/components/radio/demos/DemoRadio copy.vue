<template>
  <WuiRadio v-model="subradio" type="primary" :value="1">
    By signing this I agree with Terms and Conditions
  </WuiRadio>
  <br />
  <WuiRadio v-model="subradio" type="primary" :value="2">
    <template #default> Subscribe for updates </template>
    <template #sublabel> Get notified when you get updates </template>
  </WuiRadio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const subradio = ref(false)
</script>
