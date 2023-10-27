<script lang="ts">
import { defineComponent, computed, h } from 'vue'

import { useAvatarGroup } from './avatar-group-composable'
import { TUseAvatarGroup } from './types'

export default defineComponent({
  name: 'WuiAvatarGroup',
  props: {
    vertical: { type: Boolean },
    max: { type: Number, default: 5 },
  },
  setup(props, { slots }) {
    const { totalChildrenVNodes, label }: TUseAvatarGroup = useAvatarGroup(
      props,
      slots
    )

    const classnames = computed(() => ({
      'wui-avatar-group': true,
      'wui-avatar-group--vertical': props.vertical,
      'wui-avatar-group--horizontal': !props.vertical,
    }))

    return () =>
      h(
        'div',
        {
          class: classnames.value,
        },
        [
          totalChildrenVNodes.value,
          label.value.show
            ? h(
                'div',
                {
                  class: ['wui-avatar-group-max'],
                },
                [h('span', `+${label.value.count}`)]
              )
            : null,
        ]
      )
  },
})
</script>

<style lang="css">
@import url('avatar-group.css');
</style>
