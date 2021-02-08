<template>
    <div class="swiper-container vip">
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
    new Swiper('.vip', {
      loop: this.loop, // 开启循环
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'vip-bullet', // 需设置.my-bullet样式
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

<style lang="scss">
    .vip-bullet{
        display: inline-block;
        width: 0.13333rem;;
        height: 0.13333rem;;
        background-color: #ff6743;
        border-radius: 50%;
        position: relative;
        margin: 0 0.06667rem;
        top: 0.3rem;
        opacity: .3;
     }
     .vip-bullet-active{
       opacity: 1;
       width: 0.34667rem;
       border-radius: 0.06667rem;
       background-color: #ff6743;
     }
    .vip{
        width: 100%;
        padding-top: 0.4rem;
        padding-bottom: 1.2rem;
        padding-right: 0.01rem;
        border-top: 1px solid #f7eada;
    }

</style>
