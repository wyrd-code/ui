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
      pointer.value = window.scrollY
    }

    function scrollToTop() {
      const cosParameter = window.scrollY / 2
      let scrollCount = 0
      let oldTimestamp = performance.now()
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
      window.addEventListener('scroll', checkPoint)
      checkPoint()
    })

    onBeforeUnmount(() => {
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

<style lang="postcss">
.wui-scroll-up {
  @apply bg-gray-400/50 text-gray-100 hover:bg-gray-400 border-gray-300 rounded-full;
  @apply flex items-center justify-center;
  @apply fixed right-4 bottom-4;
  @apply w-12 h-12 cursor-pointer z-99;
}

.wui-scroll-up::after {
  border: 2px solid white;
  border-radius: 10px;
  content: '';
  display: block;
  height: 25px;
  margin: 0 auto;
  width: 10px;
}

.wui-scroll-up::before {
  animation: 2s top infinite;
  border: 1px solid white;
  border-radius: 10px;
  content: '';
  display: block;
  height: 10px;
  left: 49%;
  position: absolute;
  width: 0;
}

@keyframes top {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 450px) {
  .wui-scroll-up {
    bottom: 10px;
    transform: translateX(5px) scale(0.7);
  }
}
</style>
