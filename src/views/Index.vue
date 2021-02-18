<template>
    <div>
        <!-- ======== header导航栏 ========= -->
        <header class="stiky">
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
                    <a href="javascript:;">
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
                            <div class="swiper-slide" v-for="vip_data in vipList" :key="vip_data.schedular_id" @click="handleClick(vip_data.schedular_id)">
                                <div class="vip-ahead__list">
                                    <div class="vip-ahead__list__item">
                                        <a href="javascript:;" class="vip-ahead__list__item__wrap">
                                            <img :src="vip_data.pic" class="vip-ahead__list__item__wrap__pic">
                                        </a>
                                    </div>

                                     <div class="vip-ahead__list__info">
                                         <a href="javascript:;" >
                                             <h3 class="vip-ahead__list__info__title">
                                                 {{vip_data.schedular_name}}
                                             </h3>
                                         </a>
                                         <p class="vip-ahead__list__info__tip">
                                             <span class="item-discount__num">{{vip_data.min_discount}}</span>
                                             <span class="vip-ahead__list__info__tip__text">折起</span>
                                         </p>
                                     </div>
                                     <a href="javascript:;" class="vip-ahead__list__lab">
                                         立即抢购
                                     </a>
                                </div>
                            </div>
                        </vip-swiper>
                    </div>
                </div>
            </section>
            <!-- 巡回演出区 -->
            <section class="home-tour">
                <div class="block-content">
                    <div class="block-content__title">
                        <h3 class="block-content__title--title">巡回演出</h3>
                        <div class="block-content__title__arrow">
                            <span class="block-content__title__arrow--tips">全部</span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="" class="block-content__title__arrow--icon">
                        </div>
                    </div>
                    <div>
                        <div class="tour-wrap__info">
                            <div class="tour-block">
                                <tour-swiper :key="tourList.length">
                                    <div class="swiper-slide" v-for="tour_data in tourList" :key="tour_data.id">
                                        <div class="tour-block__item">
                                            <div class="ju-schedule-cell-wrapper">
                                                <div class="ju-schedule-cell">
                                                    <div class="ju-schedule-cell__cover">
                                                        <div class="ju-schedule-cell__cover__img">
                                                            <img :src="tour_data.mobile_col_img" alt="" class="ju-image">
                                                        </div>
                                                    </div>
                                                    <div class="ju-schedule-cell__info">
                                                        <div class="ju-schedule-cell__info__date-week">
                                                            <span class="ju-schedule-cell__info__date-week__date"></span>
                                                            <span class="ju-schedule-cell__info__date-week__week">{{tour_data.start_time | dateFilter}} - {{tour_data.end_time | dateFilter}}</span>
                                                        </div>
                                                        <div class="ju-schedule-cell__info__name">
                                                            <div class="ju-schedule-cell__info__name__content ">
                                                                {{tour_data.name}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tour-block__item__bottom">
                                                <p class="tour-block__item__bottom__price">
                                                    <span class="tour-block__item__bottom__price--price">￥</span>
                                                    <span class="tour-block__item__bottom__price--price">{{tour_data.min_price}} </span>
                                                    <span class="tour-block__item__bottom__price--tips">起</span>
                                                </p>
                                                <div class="tour-block__item__bottom__citys">
                                                    <div class="tour-block__item__bottom__citys__left">
                                                        <span class="tour-block__item__bottom__citys__left--num">{{tour_data.sch_num}} </span>
                                                        <span>城巡演</span>
                                                    </div>
                                                    <div class="tour-block__item__bottom__citys__right">
                                                        <span>
                                                            {{tour_data.citys | cityFilter}}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tour-swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 演唱会区 -->
            <section class="home-category">
                <div class="category-block__list">
                    <div class="category-block__list__wrap">
                        <h3 class="category-block__list__wrap__title">演唱会</h3>
                        <a href="#" class="category-block__list__wrap__arrow">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="">
                        </a>
                    </div>
                    <div class="category-block__list__row">
                        <div class="row--bg" style="background: rgb(171, 149, 119)" v-for="(firstData,index) in categoryFirstList" :key="index" @click="handleClick(firstData.sche_id)">
                            <a href="javascript:;" class="category-block__list__row__wrap">
                                <div class="category-block__list__row__item">
                                    <img :src="firstData.pic" class="img">
                                    <div class="juooo_sponsor">
                                        <span class="icon-img icon-destine"></span>
                                        <span class="logo_i"></span>
                                    </div>
                                </div>
                                <div class="category-block__list__row__info">
                                    <p class="category-block__list__row__info__date">
                                        <strong>{{firstData.show_time|firstFilter}} </strong>
                                        <span>{{firstData.week}} 19:30</span>
                                    </p>
                                    <h3 class="category-block__list__row__info__title text-double">{{firstData.schedular_name}}</h3>
                                    <p class="category-block__list__row__info__venue text-single">{{firstData.city_name}} | {{firstData.venue_name}}</p>
                                </div>
                            </a>
                        </div>
                        <div class="category-block__list__column">
                            <category-swiper :key="categoryList.length">
                                <div class="swiper-slide" style="width: 118.562px; margin-right: 8px;" v-for="category_data in categoryList" :key="category_data.sche_id" @click="handleClick(category_data.sche_id)">
                                    <a href="javascript:;" class="category-block__list__column__wrap">
                                        <div class="category-block__list__column__item">
                                            <img :src="category_data.pic" alt="">
                                            <div class="juooo_sponsor" >
                                                <span v-html="category_data.ico"></span>
                                            </div>
                                        </div>
                                        <h3 class="category-block__list__column__title text-double">{{category_data.schedular_name}}</h3>
                                        <p class="category-block__list__column__price">
                                            <strong class="c_ff6">￥{{Number(category_data.low_price)}}</strong>
                                            <span>起</span>
                                        </p>
                                    </a>
                                </div>
                            </category-swiper>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 为你推荐区域 -->
            <section class="home-model">
                <h3 class="model-block__title">为你推荐</h3>
                <div class="show-model">
                    <div class="show-model__main">
                        <van-list
                            v-model="loading"
                            :finished="finished" loading-text=""
                            @load="onLoad" :immediate-check="false"
                        >
                        <div class="show-model__item" v-for="(model_data,index) in modelList" :key="index" @click="handleClick(model_data.schedular_id)">
                            <div>
                                <div class="falls-cell">
                                    <div class="falls-cell__image">
                                        <img :src="model_data.pic" alt="">
                                        <span class="falls-cell__image__label">{{model_data.city_name}}</span>
                                    </div>
                                        <div class="falls-cell__info">
                                    <div class="falls-cell__info__title">
                                        <div class="falls-cell__info__title__sponsor" v-show="model_data.tag_icon">
                                            <img :src="model_data.method_icon" alt="">
                                        </div>
                                        <h3 class="falls-cell__info__title__cell" :class="model_data.tag_icon?'text-space':''">{{model_data.name}}</h3>
                                    </div>
                                    <p class="falls-cell__info__date">
                                        <span>{{model_data.start_show_time}} {{model_data.show_time_bottom}}</span>
                                    </p>
                                    <p class="falls-cell__info__price">
                                        <span class="falls-cell__info__price--price">￥{{model_data.max_price}} </span>
                                        <span class="falls-cell__info__price__tip">起</span>
                                    </p>
                                    <p class="falls-cell__info__support">
                                        <span class="falls-cell__info__support--label" v-for="(desc_data,index) in model_data.support_desc" :key="index">{{desc_data}}</span>
                                    </p>
                                </div>
                                </div>

                            </div>
                        </div>
                        </van-list>
                    </div>
                    <van-loading color="rgb(255, 121, 25)" v-show="!finished"/>
                    <div class="no-more"  v-show="finished">
                        <span class="no-more__tips">没有更多了</span>
                    </div>
                </div>
            </section>
        </main>
    </div>

</template>
<script>
import Vue from 'vue'
import { NavBar, Icon, Search, List, Loading } from 'vant'
import indexSwiper from './index/IndexSwiper.vue'
import vipSwiper from './index/VipSwiper.vue'
import tourSwiper from './index/TourSwiper.vue'
import moment from 'moment'
import categorySwiper from './index/CategorySwiper.vue'
/* import http from '@/util/http' */
import axios from 'axios'
Vue.use(NavBar).use(Icon).use(Search).use(List).use(Loading)
Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.filter('cityFilter', (citys) => {
  return citys.map((item) => item.name).join(' | ')
})
Vue.filter('firstFilter', (firstDate) => {
  return moment(firstDate * 1000).format('YYYY-MM-DD')
})
/* Vue.filter('icoFilter',(ico)=>{
    console.log(ico.replace(/&lt;/g,'<'))
    return ico.replace(/&lt;/g,'<')
}) */
export default {
  components: {
    indexSwiper,
    vipSwiper,
    tourSwiper,
    categorySwiper
  },
  data () {
    return {
      value: '',
      bannerlist: [],
      labelList: [],
      vipList: [],
      tourList: [],
      categoryFirstList: [],
      categoryList: [],
      modelList: [],
      descList: [],
      current: 1, // 数据页
      total: 0, // 数据总长度
      loading: false, // 当页面到底时 loading会自动变为true 方式页面重复提交
      finished: false // 当数据都加载完毕时，将finished设置为true会停止加载
    }
  },
  methods: {
    onClickLeft () {
      console.log('left')
    },
    onClickRight () {
      console.log('right')
    },
    onLoad () { // 懒加载onLoad事件
      console.log('到底了')
      if (this.modelList.length === this.total && this.total !== 0) { // 判断数据是否加载完以及在别的页面跳转回来时的bug
        this.finished = true
      }
      this.current++
      axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&show_ids=&page=${this.current}&referer_type=index`).then((res) => {
        setTimeout(() => {
          this.modelList = [...this.modelList, ...res.data.data.list]
          this.loading = false // 取得数据后将loading赋为false，等到下次到底之后再自动变为true
        }, 0)
      })
    },
    handleClick (id) {
      this.$router.push(`/ticket/${id}`)
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
    axios.get('https://api.juooo.com/show/tour/getList?version=6.1.22&referer=2').then((res) => {
      this.tourList = res.data.data.list
    })
    axios.get('https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.1.22&referer=2').then((res) => {
      this.categoryList = res.data.data[0].list
      this.categoryFirstList.push(res.data.data[0].list[0])
      console.log(this.categoryFirstList)
    })
    axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&show_ids=&page=${this.current}&referer_type=index`).then((res) => {
      this.modelList = res.data.data.list
      this.total = res.data.data.total // 在第一次加载数据时将total总长度赋值
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
    .stiky {
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 6;
    }
    /* ========== main主内容 =============== */
    /* banner广告区 */
    .home-banner{
       padding: 0.37333rem 0.4rem 0;
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
    /* 巡回演出区 */
    .home-tour{
        padding: 0.53333rem 0.13333rem 0.4rem 0.34667rem;
        .block-content__title{
            display: flex;
            justify-content: space-between;
            .block-content__title--title{
                font-size: 0.48rem;
                line-height: 0.61333rem;
                height: 0.61333rem;
                color: #232323;
                font-weight: 700;
            }
            .block-content__title__arrow{
                display: flex;
                align-items: center;
                padding-right: 0.13333rem;
                .block-content__title__arrow--tips{
                    font-size: 0.34667rem;
                    color: #232323;
                }
                .block-content__title__arrow--icon{
                    width: 0.53333rem;
                    height: 0.53333rem;
                }
            }
        }
        .tour-wrap__info{
            padding-right: 0.26667rem;
            .tour-block{
                margin-top: 0.29333rem;
                .tour-block__item{
                    height: 4.42667rem;
                    background-color: #F5F5F5;
                    border-radius: 0.16rem;
                    padding: 0.4rem 0.34667rem;
                    box-sizing: border-box;
                    position: relative;
                    .ju-schedule-cell-wrapper {
                        width: 100%;
                        .ju-schedule-cell{
                            display: flex;
                            height: 3.84rem;
                            width: 100%;
                            .ju-schedule-cell__cover{
                                width: 2.66667rem;
                                height: 3.62667rem;
                                border-radius: 0.13333rem;
                                border: 1px solid #EBEBEB;
                                .ju-schedule-cell__cover__img{
                                    width: 100%;
                                    height: 100%;
                                    border-radius: 0.10667rem;
                                    overflow: hidden;
                                    .ju-image{
                                            margin: 0;
                                            padding: 0;
                                            border: 0;
                                            outline: 0;
                                            width: 100%;
                                    height: 100%;
                                    }
                                }
                            }
                            .ju-schedule-cell__info{
                                    margin-left: 0.4rem;
                                    width: 0;
                                    flex: 1;
                                    .ju-schedule-cell__info__date-week{
                                        color: #666;
                                        margin-top: 0.10667rem;
                                        display: flex;
                                        align-items: center;
                                        .ju-schedule-cell__info__date-week__date{
                                            display: inline-block;
                                            height: 0.42667rem;
                                            line-height: 0.42667rem;
                                            font-size: 0.42667rem;
                                        }
                                        .ju-schedule-cell__info__date-week__week{
                                            margin-left: 0;
                                            display: inline-block;
                                            font-size: 0.32rem;
                                            height: 0.32rem;
                                            line-height: 0.32rem;
                                            vertical-align: bottom;
                                        }

                                        }
                                    .ju-schedule-cell__info__name{
                                        display: flex;
                                        align-items: center;
                                        flex-wrap: wrap;
                                        height: 1.49333rem;
                                        .ju-schedule-cell__info__name__content {
                                            font-size: 0.37333rem;
                                            font-weight: normal;
                                            color: #232323;
                                            line-height: 0.61333rem;
                                            height: 1.22667rem;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            word-break: break-all;
                                    }
                                    }
                            }
                        }
                    }
                    .tour-block__item__bottom{
                            position: absolute;
                            bottom: 0.50667rem;
                            left: 3.41333rem;
                            width: 5.48rem;
                            .tour-block__item__bottom__price{
                                height: 0.53333rem;
                                line-height: 0.53333rem;
                                .tour-block__item__bottom__price--price{
                                    color: #ff6743;
                                    font-size: 0.42667rem;
                                }
                                .tour-block__item__bottom__price--tips{
                                    color: #999;
                                    font-size: 0.32rem;
                                }
                            }
                            .tour-block__item__bottom__citys{
                                border-top: 1px solid rgba(204,204,204,0.5);
                                    display: flex;
                                    padding-top: 0.2rem;
                                    margin-top: 0.26667rem;
                                    .tour-block__item__bottom__citys__left{
                                        color: #999;
                                        font-size: 0.32rem;
                                        margin-right: 0.2rem;
                                        max-width: 1.73333rem;
                                        .tour-block__item__bottom__citys__left--num{
                                            color: #ff6743;
                                        }
                                    }
                                    .tour-block__item__bottom__citys__right{
                                        flex: 1;
                                        color: #666;
                                        font-size: 0.32rem;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        .delimiter{
                                            display: inline-block;
                                            margin-left: 0.13333rem;
                                            margin-right: 0.13333rem;
                                        }
                                    }
                            }
                    }
                }
            }
        }
    }
    /* 演唱会区 */
    .home-category{
        padding-bottom: 0;
        margin-bottom: 0.66667rem;
        .category-block__list{
            padding-bottom: 0;
            .category-block__list__wrap{
                overflow: hidden;
                .category-block__list__wrap__title{
                    height: 0.61333rem;
                    line-height: 0.61333rem;
                    font-size: 0.50667rem;
                    font-weight: 700;
                    color: #232323;
                    padding-left: 0.4rem;
                    float: left;
                }
                .category-block__list__wrap__arrow{
                    display: block;
                    width: 0.53333rem;
                    height: 0.53333rem;
                    margin-right: 0.26667rem;
                    margin-top: 0.04rem;
                    float: right;
                    position: relative;
                    img{
                        position: absolute;
                    }
                }
            }
            .category-block__list__row{
                margin-top: 0.4rem;
                .row--bg{
                    background-color: rgba(0,0,0,0.2);
                    padding: 0.37333rem 0 0.37333rem 0.4rem;
                    .category-block__list__row__wrap{
                        display: flex;
                        .category-block__list__row__item{
                            width: 2.66667rem;
                            height: 3.62667rem;
                            border-radius: 0.10667rem;
                            border: solid 1px #ebebeb;
                            overflow: hidden;
                            position: relative;
                            .juooo_sponsor{
                                .icon-destine{

                                }
                                .icon-img{
                                position: absolute;
                                right: 0.10667rem;
                                top: 0.10667rem;
                                display: block;
                            }
                            .logo_i{
                                position: absolute;
                                left: 0.10667rem;
                                top: -0.02667rem;
                                width: 0.77333rem;
                                height: 0.93333rem;
                                display: block;
                                background: url(/static/img/juooo.f698448.png) center center no-repeat;
                                background-size: 100%;
                            }
                            }

                        }
                        .category-block__list__row__info{
                            flex: 1;
                            margin-left: 0.4rem;
                            color: #fefefe;
                            padding-top: 0.42667rem;
                            .category-block__list__row__info__date{
                                font-size: 0.32rem;
                                height: 0.64rem;
                                line-height: 0.64rem;
                                letter-spacing: 1px;
                                strong{
                                    font-weight: normal;
                                    font-size: 0.42667rem;
                                }
                            }
                            .category-block__list__row__info__title{
                                width: 90%;
                                font-size: 0.37333rem;
                                line-height: 0.6rem;
                                max-height: 1.2rem;
                                min-height: 0.6rem;
                                margin-top: 0.26667rem;
                                font-weight: normal;
                            }
                            .category-block__list__row__info__venue{
                                width: 5.6rem;
                                font-size: 0.32rem;
                                height: 0.64rem;
                                line-height: 0.64rem;
                                margin-top: 0.26667rem;
                            }
                        }
                    }
                }
                .category-block__list__column{
                    padding: 0.4rem 0 0 0.4rem;
                    .category-block__list__column__wrap{
                        display: block;
                        .category-block__list__column__item{
                            width: 2.85333rem;
                            height: 3.89333rem;
                            border-radius: 0.10667rem;
                            border: solid 1px #ebebeb;
                            position: relative;
                            overflow: hidden;
                            .juooo_sponsor{
                                .icon-destine{

                                }
                                .icon-img {
                                position: absolute;
                                right: 0.10667rem;
                                top: 0.10667rem;
                                display: block;
                            }
                            .logo_i{
                                position: absolute;
                                left: 0.10667rem;
                                top: -0.02667rem;
                                width: 0.77333rem;
                                height: 0.93333rem;
                                display: block;
                                background: url(/static/img/juooo.f698448.png) center center no-repeat;
                                background-size: 100%;
                            }
                            .ju_cheng {
                                background: url(/static/img/ju_cheng.b8e9574.png) center center no-repeat;
                                background-size: 100%;
                                }
                            }
                        }
                        .category-block__list__column__title{
                            width: 100%;
                            line-height: 0.56rem;
                            min-height: 1.09333rem;
                            font-size: 0.37333rem;
                            color: #232323;
                            margin-top: 0.32rem;
                            font-weight: normal;
                        }
                        .category-block__list__column__price{
                            font-size: 0.29333rem;
                            color: #999;
                            height: 0.53333rem;
                            display: flex;
                            align-items: baseline;
                            margin-top: 0px;
                            strong{
                                font-size: 0.42667rem;
                                letter-spacing: 0px;
                                margin-right: 0.10667rem;
                                font-weight: normal;
                            }
                        }
                    }
                }
            }
        }
    }
    /* 为你推荐区 */
    .van-loading{
        margin-top: 0.26667rem;
        margin: 0 auto;
        width: 0.8rem;
        height: 0.8rem;
        z-index: 0;
        font-size: 0;
        line-height: 0;
        position: relative;
        vertical-align: middle;
        color: rgb(255, 121, 25);
    }
    .home-model{
        width: 100%;
        padding-bottom: 0;
        background: linear-gradient(0deg, #f0f0f0, #f0f0f0, #fefefe);
        .model-block__title{
            padding: 0.26667rem 0.4rem 0.13333rem;
            font-weight: 700;
            font-size: 0.48rem;
            line-height: 0.61333rem;
            height: 0.61333rem;
            color: #232323;
        }
        .show-model{
            width: 100%;
            padding: 0 0.4rem;
            box-sizing: border-box;
            .show-model__main{
                width: 100%;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                .van-list{
                    display: flex;
                    flex-wrap: wrap;
                        .show-model__item{
                    flex: 1;
                    width: 4.52rem;
                    transition: all 1s;
                    .falls-cell{
                        width: 4.52rem;
                        border-radius: 0.16rem;
                        overflow: hidden;
                        background-color: #fefefe;
                        border: 1px solid #ebebeb;
                        .falls-cell__image{
                        position: relative;
                        width: 100%;
                        height: 6.17333rem;

                        .img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                        .falls-cell__image__label{
                            position: absolute;
                            right: 0.2rem;
                            top: 0.2rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 0.48rem;
                            padding: 0 0.12rem;
                            background: linear-gradient(-45deg, rgba(38,38,38,0.8), rgba(70,68,65,0.8));
                            border-radius: 0.02667rem;
                            color: #FEFEFE;
                            font-size: 0.32rem;
                        }
                    }
                    .falls-cell__info{
                        padding: 0.21333rem 0.29333rem 0.29333rem;
                        .falls-cell__info__title{
                            position: relative;
                            .falls-cell__info__title__sponsor{
                                position: absolute;
                                left: 0;
                                top: 0;
                                display: block;
                                width: 0.89333rem;
                                height: 0.45333rem;
                                img{
                                    border: none;
                                    border-color: transparent;
                                    vertical-align: middle;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .falls-cell__info__title__cell{
                                color: #232323;
                                font-weight: normal;
                                font-size: 0.37333rem;
                                line-height: 0.53333rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
                        }
                        .falls-cell__info__date{
                            margin-top: 0.10667rem;
                            font-size: 0.34667rem;
                            color: #666;
                            line-height: 0.53333rem;
                        }
                        .falls-cell__info__price{
                            margin-top: 0.10667rem;
                            .falls-cell__info__price--price{
                                color: #FF6743;
                                font-size: 0.42667rem;
                            }
                            .falls-cell__info__price__tip{
                                color: #999;
                                font-size: 0.29333rem;
                            }
                        }
                        .falls-cell__info__support{
                            overflow: hidden;
                            margin-top: 0.13333rem;
                            .falls-cell__info__support--label{
                                display: inline-block;
                                padding: 1px 0.13333rem;
                                background-color: #fff1ef;
                                border-radius: 0.22667rem;
                                color: #FF6743;
                                font-size: 0.29333rem;
                                margin-right: 0.13333rem;
                                margin-bottom: 0.13333rem;
                            }
                        }
                    }
                    }
                }
                }
            }
            .no-more{
                margin-top: 1.53333rem;
                line-height: 0.53333rem;
                text-align: center;
                color: #ccc;
                padding-bottom: 0.13333rem;
                font-size: 12px;
                border-top: 1px dashed #ccc;
            }
        }
    }
</style>
