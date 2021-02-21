<template>
    <div class="tour-block">
        <div v-if="tourList">
        <div class="tour-block__content">
            <div class="shade">
                <div class="shade__wrap">
                    <img :src="tourList.mobile_col_img" class="shade__wrap__img">
                </div>
                <div class="shade__mask"></div>
                <div class="shade__info">
                    <header class="shade__info__head">
                        <img src="/static/img/LeftWhite.png" class="backImg" @click="$router.back()">
                        <span class="shade__info__head--title"> 巡演详情</span>
                    </header>
                    <div class="shade__info__content">
                        <div class="show-cell">
                            <div class="show-cell__img">
                                <img :src="tourList.mobile_col_img">
                            </div>
                            <div class="show-cell__content">
                                <h3 class="show-cell__content--title"> {{tourList.name}} </h3>
                                <p class="show-cell__content--tip">{{tourList.city_num}}个城市 | {{tourList.show_num}}场演出</p>
                                <p class="show-cell__content--date">{{tourList.start_time|dateFilter}} - {{tourList.end_time|dateFilter}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tour-block__content__list">
                <div class="tour-block__content__list--item" v-for="tourContentData in tourList.list" :key="tourContentData.sch_id" @click="handleTicketClick(tourContentData.sch_id)">
                    <div class="show-column">
                        <div class="show-column__date show-column--will">
                            <p>
                                <strong class="show-column__date--bold"> {{tourContentData.start_time|dataMFilter}}/</strong>
                                <span class="show-column__date--normal date--lab"> {{tourContentData.start_time|dataDFilter}} </span>
                            </p>
                        </div>
                        <div class="show-column__info show-column--will">
                            <div class="show-column__info--block">
                                <h3 class="show-column__info--title"> {{tourContentData.sch_name}} </h3>
                                <p class="show-column__info--tip">{{tourContentData.city_name}} | {{tourContentData.venue_name}}</p>
                                <p class="show-column__info--bottom">
                                    <span class="show-column__info--bottom__price">¥{{tourContentData.min_price}}</span>
                                    <span>起</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.filter('dataMFilter', (date) => {
  return moment(date * 1000).format('MM')
})
Vue.filter('dataDFilter', (date) => {
  return moment(date * 1000).format('DD')
})
export default {
  data () {
    return {
      tourList: null
    }
  },
  methods: {
    handleTicketClick (id) {
      this.$router.push(`/ticket/${id}`)
    }
  },
  mounted () {
    this.$store.commit('hide')
    axios.get(`https://api.juooo.com/show/tour/getInfo?id=${this.$route.params.id}&version=6.1.22&referer=2`).then((res) => {
      this.tourList = res.data.data
      console.log(this.tourList)
    })
  },
  destroyed () {
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
    .tour-block{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
    .tour-block__content{
        background-color: #f5f5f5;
    }
    .shade{
        position: relative;
        height: 6.12rem;
    }
    .shade__wrap{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .shade__wrap__img{
        filter: blur(0.53333rem);
    }
    .shade__mask{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.1);
    }
    .shade__info{
        position: relative;
    }
    .shade__info__head{
        height: 1.17333rem;
        line-height: 1.17333rem;
        position: relative;
    }
    .backImg{
        position: absolute;
        width: .55rem;
        height: .55rem;
        top: 0.3rem;
        left: 0.26rem;
    }
    .shade__info__head--title{
        display: block;
        text-align: center;
        padding: 0 1.33333rem;
        font-size: 0.48rem;
        color: #fefefe;
    }
    .shade__info__content{
        padding: 0.4rem 0.4rem 0;
    }
    .show-cell{
        height: 4rem;
        width: 100%;
        display: flex;
    }
    .show-cell__img{
        width: 2.93333rem;
        height: 4rem;
        border-radius: 0.10667rem;
        overflow: hidden;
    }
    .show-cell__content{
        flex: 1;
        padding-left: 0.4rem;
        padding-top: 0.13333rem;
        position: relative;
    }
    .show-cell__content--title{
        color: #fefefe;
        font-size: 0.42667rem;
        line-height: 0.66667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: normal;
    }
    .show-cell__content--tip{
        font-size: 0.37333rem;
        color: rgba(254,254,254,0.7);
        margin-top: 0.4rem;
    }
    .show-cell__content--date{
        position: absolute;
        left: 0.4rem;
        bottom: 0.13333rem;
        font-size: 0.42667rem;
        color: #fefefe;
        line-height: 0.64rem;
        font-weight: normal;
    }

    .tour-block__content__list{
            padding: 0.4rem;
    }
    .tour-block__content__list--item{
        margin-bottom: 0.32rem;
    }
    .show-column{
        display: flex;
        height: 2.82667rem;
    }
    .show-column__date{
        width: 2.93333rem;
        border-radius: 0.10667rem 0px 0px 0.10667rem;
        margin-right: 0.13333rem;
        color: #232323;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .show-column--will{
        background-color: #FEFEFE;
    }
    .show-column__date--bold{
        font-size: 0.61333rem;
        font-weight: normal;
    }
    .show-column__date--normal{
        font-size: 0.4rem;
    }
    .date--lab{
        margin-left: -0.08rem;
    }
    .show-column__info{
        width: 6.13333rem;
        border-radius: 0px 0.10667rem 0.10667rem 0px;
        padding: 0.4rem;
        box-sizing: border-box;
    }
    .show-column__info--block{
        display: block;
    }
    .show-column__info--title{
        font-size: 0.42667rem;
        color: #232323;
        line-height: 0.58667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: normal;
    }
    .show-column__info--tip{
        font-size: 0.37333rem;
        color: #666;
        margin-top: 0.18667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .show-column__info--bottom{
        color: #999;
        font-size: 0.29333rem;
        margin-top: 0.21333rem;
    }
    .show-column__info--bottom__price{
        color: #FF6743;
        font-size: 0.42667rem;
        margin-right: 0.13333rem;
        font-weight: 500;
    }
</style>
