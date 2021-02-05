<template>
    <div class="swiper-container rain">
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
    new Swiper('.rain', {
      loop: this.loop, // 开启循环
      pagination: {
        el: '.swiper-pagination'
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
    .rain{
        width: 100%;
        height: 3.73333rem;
        border-radius: 0.16rem;
    }
    .swiper-slide{
        img{
            width: 100%;
        }
    }

</style>
