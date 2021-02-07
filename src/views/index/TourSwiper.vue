<template>
    <div class="swiper-container tour">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  prop: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    new Swiper('.tour', {
      loop: this.loop, // 开启循环
      pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'vip-bullet-active'
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
    .tour{
        width: 100%;
        padding-bottom: 0.66667rem;
    }
    .vip-bullet-active{
        background-color: #ff6743;
    }
</style>
