<script lang="ts">
import { defineComponent, provide, h, computed } from 'vue'

import { useAvatarGroup } from './hooks'
import { TUseAvatarGroup } from './types'

export default defineComponent({
  name: 'AvatarGroup',
  props: {
    vertical: { type: Boolean },
    square: { type: Boolean },
    max: { type: Number, default: null },
    size: { type: String, default: '40px' },
  },
  setup(props, { slots }) {
    provide('square', props.square)
    provide('size', props.size)

    const { totalChildrenVNodes, label }: TUseAvatarGroup = useAvatarGroup(
      props,
      slots
    )

    const classes = computed(() => ({
      'wui-avatar-group': true,
      'wui-avatar-group--vertical': props.vertical,
      'wui-avatar-group--horizontal': !props.vertical,
    }))

    return () =>
      h(
        'div',
        {
          class: classes.value,
        },
        [
          totalChildrenVNodes.value,
          label.value.show
            ? h(
                'div',
                {
                  class: ['wui-avatar-group-max'],
                  style: { width: props.size, height: props.size },
                },
                [h('span', `+${label.value.count}`)]
              )
            : null,
        ]
      )
  },
})
</script>

<style lang="css" scoped>
@import url('avatar-group.css');
</style>
