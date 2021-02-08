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
        bulletClass: 'tour-bullet', // 需设置.my-bullet样式
        bulletActiveClass: 'tour-bullet-active'
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
    .tour{
        width: 100%;
        padding-bottom: 0.66667rem;
    }
    .tour-bullet{
        display: inline-block;
        width: 0.13333rem;;
        height: 0.13333rem;;
        background: #ff6743;
        border-radius: 50%;
        position: relative;
        margin: 0 0.06667rem;
        top: 0.3rem;
        opacity: .3;
     }
    .tour-bullet-active{
        opacity: 1;
        width: 0.34667rem;
        border-radius: 0.06667rem;
        background-color: #ff6743;
    }
</style>
