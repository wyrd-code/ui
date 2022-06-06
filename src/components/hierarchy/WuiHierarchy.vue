<template>
  <div class="wui-hierarchy-container">
    <div class="hierarchy" :class="{ horizontal, collapsable }">
      <WuiHierarchyNode
        :data="data"
        :props="props"
        :horizontal="horizontal"
        :label-width="labelWidth"
        :collapsable="collapsable"
        :render-content="renderContent"
        :label-class-name="labelClassName"
        @node-expand="
          (e, data, nodeContext) => $emit('node-expand', e, data, nodeContext)
        "
        @node-focus="
          (e, data, nodeContext) => $emit('node-focus', e, data, nodeContext)
        "
        @node-click="
          (e, data, nodeContext) => $emit('node-click', e, data, nodeContext)
        "
        @node-mouseover="
          (e, data, nodeContext) =>
            $emit('node-mouseover', e, data, nodeContext)
        "
        @node-mouseout="
          (e, data, nodeContext) => $emit('node-mouseout', e, data, nodeContext)
        "
      >
        <template #node="{ data: childData, context }">
          <slot :data="childData" :context="context" />
        </template>
      </WuiHierarchyNode>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import type { BlockTreeProps } from './hierarchy-types'
import WuiHierarchyNode from './WuiHierarchyNode.vue'

export default defineComponent({
  name: 'WuiHierarchy',
  components: {
    WuiHierarchyNode,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    props: {
      type: Object as PropType<BlockTreeProps>,
      default: () => ({
        label: 'label',
        expand: 'expand',
        children: 'children',
        key: 'id',
      }),
    },
    horizontal: Boolean,
    collapsable: Boolean,
    renderContent: {
      type: Function,
      default: null,
    },
    labelWidth: {
      type: [String, Number],
      default: null,
    },
    labelClassName: {
      type: [Function, String],
      default: null,
    },
  },
  emits: [
    'node-expand',
    'node-focus',
    'node-click',
    'node-mouseout',
    'node-mouseover',
  ],
})
</script>

<style lang="css" scoped>
@import url('hierarchy.css');
</style>
