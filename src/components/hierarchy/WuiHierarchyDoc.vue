<template>
  <div>
    <h1>Hierarchy</h1>

    <WuiCodeDemo>
      <WuiHierarchy
        :props="{
          label: 'label',
          expand: 'expand',
          children: 'children',
          key: 'some_id',
        }"
        :data="treeData"
        :horizontal="isHorizontal"
        :collapsable="isCollapsable"
      />

      <template #props>
        <WuiInput
          v-model="inputLeafId"
          type="number"
          placeholder="Parent leaf ID"
          label-top="Add leaf to item with id:"
        />
        <WuiButton @click="() => tryAddLeaf(inputLeafId, treeData)">
          Add a leaf
        </WuiButton>

        <WuiCheckbox v-model="isHorizontal" label="Horizontal" />

        <WuiCheckbox v-model="isCollapsable" label="Allow collapse" />
      </template>
    </WuiCodeDemo>

    <WuiCodeExample title="With slots">
      <div>Selected: {{ selected }}</div>

      <WuiHierarchy
        :data="treeData"
        :props="{
          label: 'label',
          expand: 'expand',
          children: 'children',
          key: 'some_id',
        }"
        :horizontal="isHorizontal"
        :collapsable="isCollapsable"
      >
        <template #default="{ data, context }">
          <span>
            <input
              type="checkbox"
              :checked="selected.indexOf(data.some_id) > -1"
              @change="(e) => toggleSelect(data, (e.target as any)?.checked)"
            />
            <strong>#{{ data.some_id }}</strong>
            {{ data.label }} &nbsp;
            <a
              v-if="data.some_id != treeData.some_id"
              title="Delete item"
              style="color: red; cursor: pointer"
              @click="() => deleteNode(data, treeData)"
              >x</a
            >
          </span>
          <br />
          <span v-if="data.children && data.children.length">
            <a href="#" @click="context.toggleExpand">toggle expand</a>
          </span>
        </template>
      </WuiHierarchy>
    </WuiCodeExample>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const inputLeafId = ref()
    const selected = ref<any[]>([])
    const isHorizontal = ref(true)
    const isCollapsable = ref(true)

    const treeData = reactive({
      label: 'root',
      expand: true,
      some_id: 1,
      children: [
        { label: 'child 1', some_id: 2 },
        { label: 'child 2', some_id: 3 },
        {
          label: 'subparent 1',
          some_id: 4,
          expand: false,
          children: [
            { label: 'subchild 1', some_id: 5 },
            {
              label: 'subchild 2',
              some_id: 6,
              expand: false,
              children: [
                { label: 'subchild 11', some_id: 7 },
                { label: 'subchild 22', some_id: 8 },
              ],
            },
          ],
        },
      ],
    })

    const toggleSelect = (
      node: { some_id: any; children: any[] },
      isSelected: any
    ) => {
      isSelected
        ? selected.value.push(node.some_id)
        : selected.value.splice(selected.value.indexOf(node.some_id), 1)
      if (node.children && node.children.length) {
        node.children.forEach((ch) => {
          toggleSelect(ch, isSelected)
        })
      }
    }

    const compareAsStrings = (a: any, b: any) => String(a) === String(b)

    const tryAddLeaf = (
      parentId: any,
      tree: {
        some_id: any
        label: any
        children?: { label: string; some_id: number }[]
        expand?: boolean
      }
    ) => {
      if (compareAsStrings(tree.some_id, parentId)) {
        const some_id = parseInt(String(Math.random() * 100))
        const leaf = {
          label: `child of ${tree.label}`,
          some_id: some_id,
        }
        if (!tree.children) {
          tree.expand = true
          tree.children = []
        }
        tree.children.push(leaf)
      } else if (tree.children) {
        tree.children.forEach((child) => tryAddLeaf(parentId, child))
      }
    }

    const deleteNode = (node: { some_id: any }, tree: { children: any[] }) => {
      const parent = tree.children
        ? tree.children.find((p) => compareAsStrings(p.some_id, node.some_id))
        : null
      if (parent) {
        tree.children.splice(tree.children.indexOf(node), 1)
      } else if (tree.children) {
        tree.children.forEach((ch) => deleteNode(node, ch))
      }
    }

    return {
      treeData,
      selected,
      toggleSelect,
      isHorizontal,
      isCollapsable,
      inputLeafId,
      tryAddLeaf,
      deleteNode,
    }
  },
})
</script>
