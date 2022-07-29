<template>
  <WuiDropArea
    :active="Boolean(upload && upload.active)"
    :drop-active="Boolean(upload && upload.dropActive)"
  >
    <p class="text-center text-gray-500">
      <template v-if="upload && upload.active"> Uploading... </template>
      <template v-else> Drop files here </template>
    </p>
    <ul class="">
      <li v-for="file in files" :key="file.id">
        <span>{{ file.name }}</span> - <span>{{ file.size }}</span> -
        <span>{{ file.type }}</span> - <span>{{ file.progress }}</span> -
        <span v-if="file.error">{{ file.error }}</span>
        <span v-else-if="file.success">success</span>
        <span v-else-if="file.active">active</span>
        <span v-else-if="!!file.error">{{ file.error }}</span>
        <span v-else />
      </li>
    </ul>
    <div class="flex example-btn">
      <FileUpload
        ref="upload"
        v-model="files"
        class="border rounded-full font-medium bg-gray-500 border-gray-500 shadow-sm mr-2 text-white text-sm py-2 px-4 inline-flex justify-center hover:bg-gray-600 focus:outline-none focus:border-yellow-300"
        :post-action="uploadUrl"
        extensions="gif,jpg,jpeg,png,webp"
        accept="image/png,image/gif,image/jpeg,image/webp"
        :multiple="false"
        :directory="false"
        :drop="true"
        :size="1024 * 1024 * 10"
        @input-filter="inputFilter"
        @input-file="inputFile"
      >
        <i class="fa fa-plus" />
        Select files
      </FileUpload>
      <button
        v-if="!upload || !upload.active"
        type="button"
        class="border rounded-full font-medium bg-blue-400 border-blue-500 shadow-sm text-white text-sm py-2 px-4 inline-flex justify-center hover:bg-blue-500 focus:outline-none focus:border-yellow-300"
        @click.prevent="() => setUploadActive(true)"
      >
        <i class="fa fa-arrow-up" aria-hidden="true" />
        Start Upload
      </button>
      <button
        v-else
        type="button"
        class="border rounded-full font-medium bg-red-400 border-blue-500 shadow-sm text-white text-sm py-2 px-4 inline-flex justify-center hover:bg-blue-500 focus:outline-none focus:border-yellow-300"
        @click.prevent="() => setUploadActive(false)"
      >
        <i class="fa fa-stop" aria-hidden="true" />
        Stop Upload
      </button>
    </div>
  </WuiDropArea>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
// import FileUpload from 'vue-upload-component'
// import type { VueUploadItem } from 'vue-upload-component'

declare type VueUploadItem = any

export default defineComponent({
  name: 'WuiUpload',
  // components: {
  //   FileUpload,
  // },
  emits: ['uploaded'],
  setup(_, { emit }) {
    // const upload = ref<InstanceType<typeof FileUpload> | null>(null)
    const upload = ref<any>(null)
    const uploadUrl = '/api/file'
    const files = ref<VueUploadItem[]>([])

    function inputFilter(
      newFile: VueUploadItem | undefined,
      oldFile: VueUploadItem | undefined,
      prevent: (prevent?: boolean) => boolean
    ): any {
      if (newFile && !oldFile) {
        // Before adding a file
        // Filter system files or hide files
        if (
          newFile.name &&
          /(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)
        ) {
          return prevent()
        }

        // Filter html js files
        if (newFile.name && /\.(js?|ts?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
      }
    }

    function inputFile(
      newFile: VueUploadItem | undefined,
      oldFile: VueUploadItem | undefined
    ) {
      if (newFile && !oldFile) {
        // add
        console.log('add', newFile)
      }
      if (newFile && oldFile) {
        // update
        console.log('update', newFile)
      }
      if (!newFile && oldFile) {
        // remove
        console.log('remove', oldFile)
      }
    }

    onMounted(() => {
      if (!upload.value) {
        return
      }
      upload.value.$watch('uploaded', function (newValue: boolean) {
        if (newValue && files.value[0] && files.value[0].response) {
          emit('uploaded', files.value[0].response[0].media)
        }
      })
    })

    const setUploadActive = (value: boolean): void => {
      if (!upload.value) {
        return
      }
      upload.value.active = value
    }

    return {
      files,
      upload,
      uploadUrl,
      inputFilter,
      inputFile,
      setUploadActive,
    }
  },
})
</script>
