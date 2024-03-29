<script lang="ts">
import {
  defineComponent,
  h,
  computed,
  onMounted,
  onBeforeUnmount,
  ref,
} from 'vue'

export default defineComponent({
  name: 'WuiScrollUp',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    customClass: {
      type: String,
      default: 'wui-scroll-up',
    },
    scrollDuration: {
      type: Number,
      default: 200,
    },
    scrollY: {
      type: Number,
      default: 250,
    },
    alwaysShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const pointer = ref(0)
    const isTop = computed(() => pointer.value < props.scrollY)

    function checkPoint() {
      if (typeof window === 'undefined') {
        return
      }

      pointer.value = window.scrollY
    }

    function scrollToTop() {
      const cosParameter = window.scrollY / 2
      let scrollCount = 0
      let oldTimestamp = performance.now()
      if (typeof window === 'undefined') {
        return
      }

      function step(newTimestamp: number) {
        scrollCount +=
          Math.PI / (props.scrollDuration / (newTimestamp - oldTimestamp))
        if (scrollCount >= Math.PI) {
          window.scrollTo(0, 0)
          return
        }
        if (window.scrollY === 0) return
        window.scrollTo(
          0,
          Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
        )
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    }

    onMounted(() => {
      if (typeof window === 'undefined') {
        return
      }
      window.addEventListener('scroll', checkPoint)
      checkPoint()
    })

    onBeforeUnmount(() => {
      if (typeof window === 'undefined') {
        return
      }
      window.removeEventListener('scroll', checkPoint)
    })

    return {
      isTop,
      pointer,
      scrollToTop,
    }
  },
  render() {
    return this.isTop && !this.alwaysShow
      ? undefined
      : h(
          this.tag,
          {
            class: this.customClass,
            onClick: this.scrollToTop,
          },
          this.$slots.default
            ? this.$slots.default({
                pointer: this.pointer,
                isTop: this.isTop,
              })
            : undefined
        )
  },
})
</script>
