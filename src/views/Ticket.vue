<template>
    <div>
        <div v-if="info">
        <div class="detail-wrapper">
            <div class="detail">
                <div class="brief detail__brief">
                    <div class="brief__bg-wrapper">
                        <img :src="info.pic" class="brief__bg">
                    </div>
                    <div class="brief__mask"></div>
                    <div class="brief__primary">
                        <div class="brief__primary__fg">
                            <div class="brief__primary__fg__title">
                                <span class="brief__primary__fg__title__text">演出详情</span>
                            </div>
                            <div class="brief__primary__fg__content">
                                <div class="image brief__primary__fg__content__cover">
                                    <img :src="info.pic" class="ju-image ju-image--fill">
                                </div>
                                <div class="brief__primary__fg__content__tag">
                                    <div class="juooo_sponsor">
                                        <i class="logo_i"></i>
                                    </div>
                                </div>
                                <div class="brief__primary__fg__content__info">
                                    <div class="brief__primary__fg__content__info__name">{{info.show_name}}</div>
                                    <div class="brief__primary__fg__content__info__tag-wrapper">
                                        <div class="brief__primary__fg__content__info__tag">
                                            <span class="brief__primary__fg__content__info__tag__verify"></span>
                                        </div>
                                    </div>
                                        <div class="brief__primary__fg__content__info__price">
                                            <span class="brief__primary__fg__content__info__price__range">¥{{info.low_price*1}}-{{info.high_price*1}}</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="brief__secondary-wrapper">
                        <div class="brief__secondary">
                            <div class="brief__secondary__info">
                                <div class="brief__secondary__info__date-time-wrapper">
                                    <div class="brief__secondary__info__date-time">
                                        <span class="brief__secondary__info__date-time__date">{{info.show_time_data.show_time_start | showStartFilter}} - {{info.show_time_data.show_time_end | showEndFilter}}</span>
                                    </div>
                                </div>
                                <div class="brief__secondary__info__place">{{info.city.city_name}} | {{info.venue.venue_name}}</div>
                                <div class="brief__secondary__info__address">{{info.venue.venue_address}}</div>
                            </div>
                            <div class="brief__secondary__pointer">
                                    <div class="brief__secondary__pointer__img"></div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <div class="center__right">
                        <div class="verify detail__verify">
                            <span class="verify__tag"></span>
                            <span class="verify__desc">购买该演出需要提前实名认证</span>
                        </div>
                        <div class="center__right__benefit">
                            <div class="show-benefit detail__schedule-discount">
                                <div>
                                    <div class="show-benefit-item">
                                        <span class="show-benefit-item__name">入场</span>
                                        <span class="show-benefit-item__colon">: </span>
                                        <span class="show-benefit-item__content">
                                            <div class="enter">{{info.tips.desc}}</div>
                                        </span>
                                    </div>
                                    <div class="divider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="center__left">
                        <div class="intro detail__intro center__left__intro" style="height:auto;">
                            <div class="intro__title">演出介绍</div>
                            <div class="intro__content">
                                <p v-html="info.show_desc.desc"></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ticket-tabbar></ticket-tabbar>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import moment from 'moment'
import ticketTabbar from '../components/ticket_tabbar.vue'
import axios from 'axios'
Vue.filter('showStartFilter', (showStartData) => {
  return moment(showStartData * 1000).format('YYYY.MM.DD')
})
Vue.filter('showEndFilter', (showEndData) => {
  return moment(showEndData * 1000).format('MM.DD')
})
export default {
  components: {
    ticketTabbar
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios.get(`https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=${this.$route.params.id}&version=6.1.22&referer=2`).then((res) => {
      this.info = res.data.data.static_data
    })
  }
}
</script>
<style lang="scss" scoped>
    .detail-wrapper{
        position: relative;
    }
    .detail{
        background-color: #f5f5f5;
    }
    .brief{
        background-color: #fefefe;
    }
    .brief__bg-wrapper{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 5.8rem;
        overflow: hidden;
    }
    .brief__bg{
        width: 100%;
        height: 100%;
        background-color: #b8abab;
        filter: blur(0.53333rem);
    }
    .brief__mask{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5.8rem;
        background-color: rgba(0,0,0,0.24);
        overflow: hidden;
    }
    .brief__primary{
        position: relative;
        height: 5.8rem;
        overflow: hidden;
    }
    .brief__primary__fg{
        position: relative;
        height: 5.8rem;
    }
    .brief__primary__fg__title{
        position: relative;
        height: 1.18667rem;
    }
    .brief__primary__fg__title__text{
        text-align: center;
        font-size: 0.48rem;
        font-weight: bold;
        color: #fefefe;
        height: 1.18667rem;
        line-height: 1.18667rem;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .brief__primary__fg__content{
        display: flex;
        padding: 0 0.4rem;
        position: relative;
    }
    .image{
        display: inline-block;
    }
    .brief__primary__fg__content__cover{
        width: 2.8rem;
        height: 3.81333rem;
        margin-top: 0.4rem;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        border-radius: 0.10667rem;
        overflow: hidden;
    }
    .ju-image {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }
    .brief__primary__fg__content__tag{
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
        width: 2.93333rem;
        height: 4rem;
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
    .brief__primary__fg__content__info{
        margin-top: 0.6rem;
        margin-left: 0.38667rem;
        display: flex;
        flex-direction: column;
    }
    .brief__primary__fg__content__info__name{
        font-size: 0.42667rem;
        line-height: 0.53333rem;
        color: #fefefe;
        min-height: 1.06667rem;
        word-break: break-all;
    }
    .brief__primary__fg__content__info__tag-wrapper{
        overflow: hidden;
        height: 0.45333rem;
        box-sizing: border-box;
        margin-top: 0.44rem;
    }
    .brief__primary__fg__content__info__tag{
        color: #fefefe;
        display: flex;
        align-items: center;
    }
    .brief__primary__fg__content__info__tag__verify{
        display: inline-block;
        margin-left: 0.10667rem;
        width: 2.06667rem;
        height: 0.45333rem;
        background-image: url(/static/img/verify.222fe75.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .brief__primary__fg__content__info__price{
        display: flex;
        flex-grow: 1;
        align-items: flex-end;
        padding-bottom: 0.21333rem;
        margin-top: 0.06667rem;
    }
    .brief__primary__fg__content__info__price__range{
        font-size: 0.50667rem;
        font-weight: bold;
        height: 0.50667rem;
        line-height: 0.50667rem;
        color: #fefefe;
        display: inline-block;
        white-space: nowrap;
    }

    .brief__secondary-wrapper{
        position: relative;
    }
    .support{
        height: 1.10667rem;
        display: flex;
        padding: 0 0.4rem;
        align-items: center;
        position: relative;
    }
    .support__item{
        display: flex;
        align-items: center;
    }
    .support__item__name{
        margin-left: 0.13333rem;
        font-size: 0.34667rem;
        padding-bottom: 1px;
        color: #666666;
    }
    .brief__secondary{
        padding: 0 0.4rem 0.57333rem 0.4rem;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
    }
    .brief__secondary__info{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .brief__secondary__info__date-time-wrapper{
        margin-top: 0.48rem;
        font-size: 0.48rem;
        color: #232323;
        display: flex;
        align-items: flex-start;
        cursor: pointer;
    }
    .brief__secondary__info__date-time{
        display: flex;
        align-items: center;
        height: 0.42667rem;
        line-height: 0.42667rem;
        overflow: hidden;
    }
    .brief__secondary__info__date-time__date{
        display: inline-block;
        height: 0.42667rem;
        line-height: 0.42667rem;
        margin-right: 0.12rem;
        display: flex;
        align-items: center;
    }
    .brief__secondary__info__place{
        font-size: 0.4rem;
        color: #232323;
        margin-top: 0.4rem;
        margin-right: 0.66667rem;
    }
    .brief__secondary__info__address{
        font-size: 0.32rem;
        margin-top: 0.12rem;
        margin-right: 0.66667rem;
        color: #666;
    }
    .brief__secondary__pointer{
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 0.77333rem;
        margin-right: 0.34667rem;
    }
    .brief__secondary__pointer__img{
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
    .verify{
        display: flex;
        align-items: center;
        height: 1.38667rem;
        background-color: #ffe8d6;
        margin-top: 0.32rem;
        padding: 0 0.4rem;
    }
    .verify__tag{
        display: inline-block;
        width: 2.06667rem;
        height: 0.45333rem;
        background-image: url(/static/img/verify.222fe75.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .verify__desc{
        font-size: 0.37333rem;
        color: #ec6900;
        margin-left: 0.4rem;
        flex: 1;
    }
    .show-benefit{
        background-color: #fefefe;
    }
    .detail__schedule-discount{
        margin-top: 0.32rem;
    }
    .show-benefit-item{
        display: flex;
        padding: 0.30667rem 0.4rem;
    }
    .show-benefit-item__name{
        width: 1.2rem;
        font-size: 0.37333rem;
        color: #999999;
        display: inline-block;
        text-align: justify;
        text-align-last: justify;
        height: 0.64rem;
        line-height: 0.64rem;
        flex-shrink: 0;
    }
    .show-benefit-item__colon{
        font-size: 0.37333rem;
        color: #999999;
        height: 0.64rem;
        line-height: 0.64rem;
    }
    .show-benefit-item__content{
        flex-grow: 1;
        margin-left: -0.16rem;
    }
    .enter{
        font-size: 0.34667rem;
        color: #232323;
        line-height: 0.64rem;
        padding-top: 0.02667rem;
        margin-left: 0.4rem;
        margin-bottom: -0.14667rem;
    }
    .divider{
        margin: 0 0.4rem;
        border-bottom: 1px solid #ebebeb;
    }

    .intro{
        height: 16.89333rem;
        background-color: #fefefe;
        padding: 0 0.4rem;
        overflow: hidden;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .detail__intro{
        margin-top: 0.32rem;
    }
    .intro__title{
        font-size: 0.48rem;
        font-weight: bold;
        color: #232323;
        margin-top: 0.44rem;
    }
    .intro__content{
        margin-top: 0.29333rem;
        padding-bottom: 0.66667rem;
        p{
            font-size: 0.34667rem;
            line-height: 0.66667rem;
            color: #232323;
        }
        img{
            max-width: 100%;
            height: auto;
            width: auto;
        }
    }
    .intro__mask{
        position: absolute;
        left: 0;
        right: 0;
        height: 1.33333rem;
        bottom: 0;
        background-color: white;
        color: #ff6743;
        font-size: 0.37333rem;
        line-height: 0.37333rem;
        text-align: center;
        padding-top: 0.29333rem;
        box-sizing: border-box;
    }
    .intro__more{
        position: absolute;
        width: 100%;
        height: 2.68rem;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        bottom: 1.33333rem;
        text-align: center;
        font-size: 0.37333rem;
        line-height: 0.37333rem;
        font-weight: bold;
        color: #ff6743;
        padding-top: 1.64rem;
        background-image: url(/static/img/white-mask.ff6558e.png);
        background-repeat: no-repeat;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
</style>
