<template>
    <div>
        <!-- ======== header导航栏 ========= -->
        <header>
            <van-nav-bar
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            >
                <template #left>
                    {{$store.state.cityName}} <i class="iconfont icon-dingweiweizhi"></i><span class="city">全国</span>
                </template>
                <template #title>
                    <van-search v-model="value" placeholder="请输入搜索关键词" />
                </template>
                <template #right>
                   <i class="iconfont icon-rili"></i>
                </template>
            </van-nav-bar>
        </header>
        <!-- ========主内容============= -->
        <main>
            <!-- banner广告区 -->
            <section class="home-banner">
                <index-swiper :key="bannerlist.length">
                    <div class="swiper-slide" v-for="(data,index) in bannerlist" :key="index">
                        <img :src="data.image_url">
                    </div>
                </index-swiper>
            </section>
            <!-- 类别与会员 -->
            <section class="home-advertion">
                <!-- 类别区 -->
                <div class="label-item">
                    <div class="label-item_block" v-for="label_data in labelList" :key="label_data.id">
                        <a href="#" class="label-item__block__column">
                            <img :src="label_data.pic" alt="" class="label-item__block__column__icon">
                            <span class="label-item__block__column__title">{{label_data.name}}</span>
                        </a>
                    </div>
                </div>
                <!-- 会员折扣区 -->
                <div class="vip-ahead">
                    <a href="#">
                        <div class="vip-ahead__advert">
                            <div class="vip-ahead__advert__left">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==" alt="" class="vip-ahead__advert__left__icon">
                                <span class="vip-ahead__advert__left__tip">会员专享折扣</span>
                            </div>
                            <div class="vip-ahead__advert__right">
                                <span class="vip-ahead__advert__right__lab">99元/年</span>
                                <span class="vip-ahead__advert__right__icon"></span>
                            </div>
                        </div>
                    </a>
                    <div class="vip-ahead__swiper">
                        <vip-swiper :key="vipList.length">
                            <div class="swiper-slide" v-for="vip_data in vipList" :key="vip_data.schedular_id">
                                <div class="vip-ahead__list">
                                    <div class="vip-ahead__list__item">
                                        <a href="" class="vip-ahead__list__item__wrap">
                                            <img :src="vip_data.pic" class="vip-ahead__list__item__wrap__pic">
                                        </a>
                                    </div>

                                     <div class="vip-ahead__list__info">
                                         <a href="">
                                             <h3 class="vip-ahead__list__info__title">
                                                 {{vip_data.schedular_name}}
                                             </h3>
                                         </a>
                                         <p class="vip-ahead__list__info__tip">
                                             <span class="item-discount__num">{{vip_data.min_discount}}</span>
                                             <span class="vip-ahead__list__info__tip__text">折起</span>
                                         </p>
                                     </div>
                                     <a href="#" class="vip-ahead__list__lab">
                                         立即抢购
                                     </a>
                                </div>
                            </div>
                        </vip-swiper>
                    </div>
                </div>
            </section>
            <section class="home-tour"></section>
            <section class="home-category"></section>
            <section class="home-model"></section>
        </main>
    </div>

</template>
<script>
import Vue from 'vue'
import { NavBar, Icon, Search } from 'vant'
import indexSwiper from './index/IndexSwiper.vue'
import vipSwiper from './index/VipSwiper.vue'
/* import http from '@/util/http' */
import axios from 'axios'
Vue.use(NavBar).use(Icon).use(Search)
export default {
  components: {
    indexSwiper,
    vipSwiper
  },
  data () {
    return {
      value: '',
      bannerlist: [],
      labelList: [],
      vipList: []
    }
  },
  methods: {
    onClickLeft () {
      console.log('left')
    },
    onClickRight () {
      console.log('right')
    }
  },
  mounted () {
    axios.get('https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.22&referer=2').then((res) => {
      this.bannerlist = res.data.data.slide_list
      this.labelList = res.data.data.classify_list
    })
    axios.get('https://api.juooo.com/vip/index/getVipHomeSchedular?city_id=0&version=6.1.22&referer=2').then((res) => {
      this.vipList = res.data.data.allList
    })
  }
}
</script>
<style lang="scss" scoped>
    /* header部分 */
    header{
        width: 100%;
        background: #fefefe;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        .icon-dingweiweizhi{
            color:#ff723f;
            font-size:22px
        }
        .icon-rili{
            font-size:25px
        }
        .city{
            font-size: 0.4rem;
            margin-left: 0.08rem;
            font-weight: 700;
            color: #232323;
        }
        .van-search{
            height: 48px;
        }
        .van-search__content{
            border-radius: 23px;
            margin-left: 20px;
        }
    }
    /* ========== main主内容 =============== */
    /* banner广告区 */
    .home-banner{
       padding: 1.37333rem 0.4rem 0;
    }
    /* 类别与会员 */
    .home-advertion{
        padding-bottom:0;
        padding: 0.4rem 0.4rem 0;
    }
    /* 类别区 */
    .label-item{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.4rem;
        .label-item_block{
            width: 20%;
            margin-bottom: 0.29333rem;
            .label-item__block__column{
                display: flex;
                flex-direction: column;
                align-items: center;
                .label-item__block__column__icon{
                    width: 1.06667rem;;
                    height: 1.06667rem;
                }
                .label-item__block__column__title{
                    color: #666;
                    margin-top: 0.21333rem;
                    font-size: 0.34667rem;
                }
            }
        }
    }
    /* 会员折扣区 */
    .vip-ahead{
        width: 100%;
        background: #fffcf5;
        border-radius:0.08rem;
        border: 1px solid rgba(213,163,112,0.5);
        margin-bottom: 0.8rem;
        .vip-ahead__advert{
            width: 100%;
            height: 1.06667rem;
            padding: 0 0.4rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .vip-ahead__advert__left{
                display: flex;
                align-items: center;
                color: #6b4218;
                .vip-ahead__advert__left__icon{
                    width: 0.53333rem;
                    height: 0.48rem;
                    margin-right: 0.13333rem;
                }
                .vip-ahead__advert__left__tip{
                    font-size: 0.32rem;
                }
            }
            .vip-ahead__advert__right{
                display: flex;
                align-items: center;
                color: #6b4218;
                .vip-ahead__advert__right__lab{
                    font-size: 0.34667rem;
                }
                .vip-ahead__advert__right__icon{
                    width: 0.13333rem;
                    height: 0.26667rem;
                    display: block;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAMAAAAWLodmAAAASFBMVEUAAABrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhhrQhickwvFAAAAF3RSTlMAB+bVwGwT+urcybKolo6HeFtTSx8cD4lE/iYAAABOSURBVBjThdBJDsAwCAPANt33dAv//2mONrKUcBsJAaYpVjhYu52kdrOL2Vv0HIhpdRw7uz0f4r9ML/ELs0g6MQUbdDsuA6IkQlr5RLUyPzgDacl9rNIAAAAASUVORK5CYII=);
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: 100%;
                    margin-left: 0.13333rem;
                }
            }
        }

        .vip-ahead__swiper{
            padding: 0 0.4rem 0px;
            height: 2.85333rem;
            .vip-ahead__list{
                display: flex;
                position: relative;
                .vip-ahead__list__item{
                    width: 1.46667rem;
                    height: 2rem;
                    border-radius: 0.08rem;
                    overflow: hidden;
                    .vip-ahead__list__item__wrap{
                        display: block;
                        width: 100%;
                        height: 100%;
                        .vip-ahead__list__item__wrap__pic{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .vip-ahead__list__info{
                        margin-left: 0.4rem;
                        flex: 1;
                        .vip-ahead__list__info__title{
                            width: 100%;
                            font-size: 0.37333rem;
                            color: #232323;
                            line-height: 0.56rem;
                            min-height: 1.09333rem;
                            max-height: 1.09333rem;
                            font-weight: normal;
                        }
                        .vip-ahead__list__info__tip{
                            font-size: 0.32rem;
                            margin-top: 0.32rem;
                            .item-discount__num{
                                font-size: 0.42667rem;
                                color: #ff6743;
                            }
                            .vip-ahead__list__info__tip__text{
                                color: #999;
                                margin-left: 0.13333rem;
                            }
                        }
                }
                .vip-ahead__list__lab{
                    position: absolute;
                    right: 0;
                    bottom: 0.02667rem;
                    width: 2.02667rem;
                    height: 0.64rem;
                    border-radius: 0.33333rem;
                    font-size: 0.32rem;
                    color: #ff6743;
                    border: solid 1px #ff6743;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>
