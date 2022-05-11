<template>
  <div class="tag-input">
    <input
      :class="classNames"
      type="text"
      :value="newTagValue"
      :name="name"
      :placeholder="placeholder"
      @keydown.enter="addTag"
    />

    <div class="pt-2">
      <span
        v-for="(tag, idx) in value"
        :key="`tag-${idx}`"
        class="p-2 border border-gray-300 rounded"
      >
        <button class="inline-block border-0" @click="() => removeTag(tag)">
          x
        </button>
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Array as () => string[],
      default: () => [],
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Add a tag then press enter',
    },
    classNames: {
      type: String,
      default: '',
    },
  },
  emits: ['changed'],
  setup(props, { emit }) {
    const valueRef = toRefs(props).value
    const newTagValue = ref('')

    const addTag = (event: any) => {
      event.preventDefault()
      var val = event.target.value.trim()
      if (val.length > 0) {
        const appendedValue = [...valueRef.value, val]
        emit('changed', appendedValue)
        event.target.value = ''
      }
    }

    const removeTag = (tagToRemove: string) => {
      const valueNew = valueRef.value.filter((t) => t !== tagToRemove)
      console.log('REMOVING TAG', tagToRemove, valueNew)
      emit('changed', valueNew)
    }

    return {
      newTagValue,
      emit,
      addTag,
      removeTag,
    }
  },
})
</script>
