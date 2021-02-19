<template>
    <div class="theater">
        <div v-if="theatreList">
        <div class="load-more theater-detail">
            <div>
                <div class="theater-detail__header">
                    <div class="theater-detail__header__title">
                        <img src="/static/img/LeftWhite.png" class="backImg" @click="$router.back()">
                    </div>
                    <div class="theater-detail__header__theater">
                        <div class="theater-detail__header__theater__detail">
                            <div class="theater-detail__header__theater__detail__top">
                                <div class="theater-detail__header__theater__detail__top__head">
                                    <img :src="theatreList.theatre_pic">
                                </div>
                                <div class="theater-detail__header__theater__detail__top__right">
                                    <div class="theater-detail__header__theater__detail__top__right__name">{{theatreList.theatre_name}}</div>
                                    <div class="theater-detail__header__theater__detail__top__right__sale-count">{{theatreList.sch_num}}场在售演出</div>
                                </div>
                            </div>
                            <div class="theater-detail__header__theater__detail__address">{{theatreList.city_name}}&nbsp; |&nbsp; {{theatreList.theatre_address}}</div>
                        </div>
                        <div class="theater-detail__header__pointer">
                            <div class="theater-detail__header__pointer__img"></div>
                        </div>
                    </div>
                </div>
                <div class="theater-detail__tip">
                    热门演出
                </div>
                <div class="theater-detail__list">
                    <div class="item" v-for="detailData in detailList" :key="detailData.schedular_id" @click="handleClick(detailData.schedular_id)">
                        <div class="ju-schedule-cell-wrapper cell__base middle">
                            <div class="ju-schedule-cell">
                                <div class="ju-schedule-cell__cover">
                                    <div class="image ju-schedule-cell__cover__img">
                                        <img :src="detailData.pic" class="ju-image ju-image--fill">
                                    </div>
                                </div>
                                <div class="ju-schedule-cell__info">
                                    <div class="ju-schedule-cell__info__date-week">
                                        <span class="ju-schedule-cell__info__date-week__date">{{detailData.show_time_top}}</span>
                                        <span class="ju-schedule-cell__info__date-week__week"></span>
                                    </div>
                                    <div class="ju-schedule-cell__info__name">
                                        <div class="ju-schedule-cell__info__name__content ">{{detailData.name}}</div>
                                    </div>
                                    <div class="ju-schedule-cell__info__place">{{detailData.city_name}} | {{detailData.venue_name}}</div>
                                </div>
                            </div>
                            <div class=""></div>
                        </div>
                        <div class="item__label">
                            <span class="item__label__desc" v-for="descData in detailData.support_desc" :key="descData">{{descData}}</span>
                        </div>
                        <div class="item__price">
                            <span class="item__price__num">￥{{detailData.min_price}}</span>
                            <span class="item__price__text">起</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="load-more__tips">没有更多了</div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      detail: 0,
      detailList: [],
      theatreList: null
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/ticket/${id}`)
    }
  },
  mounted () {
    this.$store.commit('hide')
    axios.get(`https://api.juooo.com/Show/Search/getShowList?page=1&venue_id=${this.$route.params.id}`).then((res) => {
      this.detailList = res.data.data.list
    })
    axios.get(`https://api.juooo.com/theatre/index/getTheatreInfo?theatre_id=${this.$route.params.id2}&longitude=&latitude=&version=6.1.22&referer=2`).then((res) => {
      this.theatreList = res.data.data
    })
  },
  destroyed () {
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
    .theater{
        height: 100%;
    }
    .load-more{
        height: 100%;
        overflow-y: scroll;
    }
    .theater-detail{
        height: 100%;
        width: 100%;
    }
    .theater-detail__header{
        height: 4.26667rem;
        width: 100%;
        background: url(/static/img/theater_detail_bg.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
    }
    .theater-detail__header__title{
        height: 1.17333rem;
        width: 100%;
        position: relative;
    }
    .backImg{
        position: absolute;
        width: .55rem;
        height: .55rem;
        top: 0.3rem;
        left: 0.26rem;
    }
    .theater-detail__header__theater{
        height: 3.70667rem;
        width: 100%;
    }
    .theater-detail__header__theater__detail{
        position: absolute;
        bottom: 0.4rem;
        left: 0.4rem;
    }
    .theater-detail__header__theater__detail__top{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .theater-detail__header__theater__detail__top__head{
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        display: inline-block;
        background: #f5f5f5;
        overflow: hidden;
    }
    .theater-detail__header__theater__detail__top__right{
        margin-left: 0.29333rem;
        flex: 1;
    }
    .theater-detail__header__theater__detail__top__right__name{
        color: white;
        font-size: 0.48rem;
        font-weight: bold;
    }
    .theater-detail__header__theater__detail__top__right__sale-count{
        color: white;
        font-size: 0.34667rem;
    }
    .theater-detail__header__theater__detail__address{
        margin-top: 0.52rem;
        color: white;
        font-size: 0.32rem;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 1.52rem;
    }
    .theater-detail__header__pointer{
        position: absolute;
        bottom: 0.4rem;
        right: 0px;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1.76rem;
    }
    .theater-detail__header__pointer__img{
        border-radius: 0.77333rem;
        width: 0.77333rem;
        height: 0.77333rem;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABQVBMVEUAAAD/fzz/dj7/fD3/ZET/Y0T/fzv/dD7/bEL/Z0P/bEH/fTz/ZkP/cz//akL/YUX/hTr/YUT/bUH/fTz/jTf/jTj/gTv/bEH/ZET/fjz/ez3/ezz/ezz/gzv/YUX/YEX/jjj/dD//cUD/izj/YEX/eD7/jjf/dD//YUT/iTn/ezz/hzn/YUX/jTj/YkT/YEX/eD7/X0X/bUH/jjf/hzn/YEX/eT3/eD7/bEH/fD3/iDn/izj/ej3/hDr/Y0T/hzr/dj//aEP/YUX/gzv/b0H/gzv/bEH/gzv/bEH/ej3/jjj/bUH/gDz/fTz/ckD/jzf/bUH/eD7/hTr/gjv/gTv/dT//bEH/Y0T/hTr/iDn/gTv/aUL/ZUP/cUD/Z0P/eD7/bkH/fjz/izj/ej3/fDz/gzv/dT//cz//ijn/jTj/YUVF8FolAAAAVnRSTlMAAhALQurEmE42Lhv7+ff19fHx08avmZdaWjowLP76+vrv7NXSv7y0nJuJbmNYU05EPDs7JRsX+uzs7Onn1szMycO9vbyzrayTk4uHfHx6empqZFFGJpDcPtEAAAHiSURBVDjLfdNnXxpBEAbw5w4pgigKiAgmlhi7SYyaHnvv7Y4DThQrfP8P4LJuvUWf1//fzN7MHNQszmTHUl4p9W9nZhFtY81l6s+e55VKpYdyuRzJW6b5PlanxiOmhW5v04PBMvsNYnghau7v76a1YqHPxNSD5q42HlJMptFoZ2q1VaGs7Fvm8XGCdzxRDUXCPD0dg6Y43Ah8GEHc+MkiRe0fzYzvb9IBqc2GIof5/FGENyPm5mYBQFYxkQJoCuOsEDHONmAPS9MvhmdFqSHIcbptzMlHbxEj1MSrIcgZwJTYRioBJYkkN5UcMrIZtES5qazhj/j4Sx195eY6DDmgZR0t+8xcd0FOGoG0ClUIqlbxLCZt68bmhaoufottBA5xgZtqGCtiY9M6OuDG/Y8psdVfttbtJzfuJM7Jo9nm91S0K4w7i8SQPKEzaU5pM2qaS8CGckJRm/XKObLQOoAL9aZHorF4PJbrU0xzHoCV5kaekGo+WXRJuvF10+wATb9m2Da4meT/ZlrcvdksJA7sLynU1oSXIDL4o1XINB+/QUkhSQuZRsvViPnonjgCKY6yQty4vZ0wEh9VmjFjprNPNT1siKYyjZmObm4+fAHeVqYxE+uiaAB4X5nGzHy4dxaBvADSVUHeBpCfPgAAAABJRU5ErkJggg==);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 0.4rem 0.48rem;
        background-color: #ededed;
        margin-bottom: 0.05333rem;
    }
    .theater-detail__tip{
        color: #232323;
        font-size: 0.48rem;
        font-weight: bold;
        margin-top: 0.56rem;
        margin-left: 0.34667rem;
    }
    .theater-detail__list{
        margin-top: 0.48rem;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
    }
    .item{
        display: flex;
        height: 4.61333rem;
        position: relative;
    }
    .ju-schedule-cell-wrapper{
        width: 100%;
    }
    .ju-schedule-cell{
        display: flex;
        height: 3.84rem;
        width: 100%;
    }
    .ju-schedule-cell__cover{
        width: 2.8rem;
        height: 3.84rem;
        flex-shrink: 0;
        position: relative;
    }
    .ju-schedule-cell__cover__img{
        width: 100%;
        height: 100%;
        border-radius: 0.10667rem;
        overflow: hidden;
    }
    .ju-image{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }
    .ju-schedule-cell__info{
        margin-left: 0.4rem;
        width: 0;
        flex: 1;
    }
    .ju-schedule-cell__info__date-week{
        margin-top: 0.10667rem;
        display: flex;
        align-items: center;
        color: #232323;
    }
    .ju-schedule-cell__info__date-week__date{
        display: inline-block;
        height: 0.42667rem;
        line-height: 0.42667rem;
        font-size: 0.42667rem;
    }
    .ju-schedule-cell__info__date-week__week{
        display: inline-block;
        font-size: 0.32rem;
        height: 0.32rem;
        line-height: 0.32rem;
        margin-left: 0.13333rem;
        vertical-align: bottom;
    }
    .ju-schedule-cell__info__name{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 1.49333rem;
    }
    .ju-schedule-cell__info__name__content {
        font-size: 0.42667rem;
        color: #232323;
        line-height: 0.61333rem;
        height: 1.22667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .ju-schedule-cell__info__place{
        font-size: 0.32rem;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 0.37333rem;
        line-height: 0.37333rem;
    }
    .item__label{
        position: absolute;
        top: 2.66667rem;
        left: 3.2rem;
    }
    .item__label__desc{
        display: inline-block;
        margin-right: 0.13333rem;
        border-radius: 0.22667rem;
        padding: 0.02667rem 0.13333rem;
        color: #ff6743;
        font-size: 0.29333rem;
        background-color: #fff1ef;
    }
    .item__price{
        position: absolute;
        display: flex;
        align-items: center;
        left: 3.14667rem;
        top: 3.4rem;
    }
    .item__price__num{
        display: inline-block;
        font-size: 0.42667rem;
        color: #ff6743;
        height: 0.42667rem;
        line-height: 0.42667rem;
    }
    .item__price__text{
        display: inline-block;
        font-size: 0.29333rem;
        height: 0.29333rem;
        line-height: 0.29333rem;
        color: #999999;
        margin-top: 0.02667rem;
        margin-left: 0.12rem;
    }
    .load-more__tips{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 0.29333rem;
        height: 1.17333rem;
        color: #999999;
    }
</style>
