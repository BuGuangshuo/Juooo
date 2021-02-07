<template>
    <div class="swiper-container categroy">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
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
    new Swiper('.categroy', {
      slidesPerView: 3, // 每个页面显示几个
      spaceBetween: 5,
      freeMode: true
    })
  }
}
</script>
