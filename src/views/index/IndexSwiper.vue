<template>
    <div class="swiper-container index">
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
    new Swiper('.index', {
      loop: this.loop, // 开启循环
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet', // 需设置.my-bullet样式
        bulletActiveClass: 'my-bullet-active'
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
    .my-bullet{
        display: inline-block;
        width: 0.13333rem;;
        height: 0.13333rem;;
        background: #fff;
        border-radius: 50%;
        position: relative;
        margin: 0 0.06667rem;
        top: 0.3rem;
        opacity: .3;
     }
     .my-bullet-active{
       opacity: 1;
       width: 0.34667rem;
       border-radius: 0.06667rem
     }
    .index{
        width: 100%;
        height: 3.73333rem;
        border-radius: 0.16rem;
        --swiper-pagination-color: #fff;
    }
    .swiper-slide{
        img{
            width: 100%;
        }
    }
</style>
