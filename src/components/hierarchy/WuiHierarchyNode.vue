<template>
  <div :class="nodeClass">
    <div class="wui-hierarchy-node-label">
      <div
        :class="innerLabelClass"
        :style="{ width: labelWidthString }"
        @click="(e) => $emit('node-click', e, data, nodeContext)"
        @mouseout="(e) => $emit('node-mouseout', e, data, nodeContext)"
        @mouseover="(e) => $emit('node-mouseover', e, data, nodeContext)"
        @focus="(e) => $emit('node-focus', e, data, nodeContext)"
      >
        <slot name="node" :data="data" :context="nodeContext">
          <span v-if="!renderContent">{{ nodeLabel(data) }}</span>
          <span v-else>{{ renderContent(data) }}</span>
        </slot>
        <span
          v-if="collapsable && !isLeaf"
          :class="nodeExpandBtnClass"
          @click.stop="onExpandBtnClick"
        />
      </div>
    </div>
    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div
        v-if="(collapsable && expanded && !isLeaf) || (!collapsable && !isLeaf)"
        class="wui-hierarchy-node-children"
      >
        <WuiHierarchyNode
          v-for="child in data[props.children]"
          :key="nodeKey(child)"
          :data="child"
          :props="props"
          :collapsable="collapsable"
          :render-content="renderContent"
          :label-width="labelWidthString"
          :label-class-name="labelClassName"
          @node-expand="
            (e, data, context) => $emit('node-expand', e, data, context)
          "
          @node-focus="
            (e, data, context) => $emit('node-focus', e, data, context)
          "
          @node-click="
            (e, data, context) => $emit('node-click', e, data, context)
          "
          @node-mouseover="
            (e, data, context) => $emit('node-mouseover', e, data, context)
          "
          @node-mouseout="
            (e, data, context) => $emit('node-mouseout', e, data, context)
          "
        >
          <template #node="{ data: childData, context }">
            <slot name="node" :data="childData" :context="context" />
          </template>
        </WuiHierarchyNode>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

import type { NodeContext } from './hierarchy-types'

export default defineComponent({
  name: 'WuiHierarchyNode',
  props: {
    data: {
      type: Object,
      required: true,
    },
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        expand: 'expand',
        children: 'children',
        key: 'id',
      }),
    },
    collapsable: {
      type: Boolean,
      default: false,
    },
    labelWidth: {
      type: [String, Number],
      default: null,
    },
    labelClassName: {
      type: [String, Number, Function],
      default: null,
    },
    renderContent: {
      type: Function,
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
  setup(props, { emit }) {
    const isLeaf = computed(() =>
      Array.isArray(props.data[props.props.children]) &&
      props.data[props.props.children].length > 0
        ? false
        : true
    )
    const labelWidthString = computed(() =>
      props.labelWidth
        ? typeof props.labelWidth === 'number'
          ? `${props.labelWidth}px`
          : props.labelWidth
        : 'auto'
    )
    const expanded = ref<boolean>(props.data[props.props.expand] && true)

    const nodeClass = computed(() => {
      return {
        'wui-hierarchy-node': true,
        'is-leaf': isLeaf.value,
        collapsed: !isLeaf.value && props.collapsable && !expanded.value,
      }
    })

    const innerLabelClass = computed(() => {
      const labelClassName =
        typeof props.labelClassName === 'function'
          ? props.labelClassName(props.data)
          : props.labelClassName

      return {
        'wui-hierarchy-node-label-inner': true,
        [labelClassName]: !!labelClassName,
      }
    })

    const nodeExpandBtnClass = computed(() => {
      return {
        'wui-hierarchy-node-btn': true,
        expanded: !!expanded.value,
      }
    })

    const toggleExpand = () => {
      expanded.value = !expanded.value
    }

    const onExpandBtnClick = (e: Event) => {
      toggleExpand()
      emit('node-expand', e, props.data, nodeContext)
    }

    const nodeContext = <NodeContext>{
      isExpanded: () => expanded.value,
      toggleExpand,
    }

    const evaluateChildProp = (propName: string) => (child: any) => {
      const property = props.props[propName]
      if (typeof property === 'function') {
        return property(child)
      }
      const label = child[property]
      if (typeof label === 'function') {
        return label(child)
      }
      return label
    }

    const nodeLabel = evaluateChildProp('label')
    const nodeKey = evaluateChildProp('key')

    const enter = (event: any) => {
      const element = event
      element.style.visibility = 'hidden'
      element.style.height = 'auto'
      const { height } = getComputedStyle(element)
      element.style.visibility = null
      element.style.height = 0
      setTimeout(() => {
        element.style.height = height
      })
    }

    const afterEnter = (event: any) => {
      const element = event
      element.style.height = 'auto'
    }

    const leave = (event: any) => {
      const element = event
      const { height } = getComputedStyle(element)
      element.style.height = height
      setTimeout(() => {
        element.style.height = 0
      })
    }

    return {
      enter,
      afterEnter,
      leave,
      nodeClass,
      innerLabelClass,
      isLeaf,
      nodeExpandBtnClass,
      onExpandBtnClick,
      labelWidthString,
      expanded,
      nodeContext,
      nodeKey,
      nodeLabel,
    }
  },
})
</script>
