<template>
    <div class="search">
        <header class="head">
            <div class="search-ipt">
                <span class="search-icon"></span>
                <form action="">
                    <input type="search" placeholder="搜索热门演出" class="text" v-model="SearchContent">
                </form>
                <span class="cancel-icon" @click="SearchContent=''"></span>
            </div>
            <span class="cancel" @click="$router.back()">取消</span>
        </header>
        <section class="search_com">
            <div class="search_com__wrap" v-show="SearchContent">
                <div class="empty-wrap">
                    <section class="show-block">
                        <div class="show-main">
                            <div class="show-model">
                                <div class="show-model__main">
                                    <div class="show-model__item" v-for="data in computedList" :key="data.schedular_id" @click="handleClick(data.schedular_id)">
                                        <div>
                                            <div class="falls-cell">
                                                <div class="falls-cell__image">
                                                    <img :src="data.pic">
                                                    <span class="falls-cell__image__label">{{data.city_name}}</span>
                                                </div>
                                                <div class="falls-cell__info">
                                                    <div class="falls-cell__info__title">
                                                        <h3 class="falls-cell__info__title__cell">
                                                            {{data.name}}
                                                        </h3>
                                                    </div>
                                                    <p class="falls-cell__info__date">
                                                        <span>{{data.start_show_timestamp | showStartFilter}} - {{data.end_show_timestamp | showEndFilter}}</span>
                                                    </p>
                                                    <p class="falls-cell__info__price">
                                                        <span class="falls-cell__info__price--price">￥{{data.min_price}} </span>
                                                        <span class="falls-cell__info__price__tip">起</span>
                                                    </p>
                                                    <p class="falls-cell__info__support">
                                                        <span class="falls-cell__info__support--label" v-for="(supportData,index) in data.support_desc" :key="index">{{supportData}}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Vue from 'vue'
import moment from 'moment'
Vue.filter('showStartFilter', (showStartData) => {
  return moment(showStartData * 1000).format('YYYY.MM.DD')
})
Vue.filter('showEndFilter', (showEndData) => {
  return moment(showEndData * 1000).format('MM.DD')
})
export default {
  data () {
    return {
      SearchContent: ''
    }
  },
  computed: {
    ...mapState(['searchList']), // 状态切割
    computedList () {
      return this.searchList.filter(item => item.city_name.toUpperCase().includes(this.SearchContent.toUpperCase()) ||
            item.name.toUpperCase().includes(this.SearchContent.toUpperCase()))
    }
  },
  methods: {
    ...mapActions(['getSearchListAction']),
    handleClick (id) {
      this.$router.push(`/ticket/${id}`)
    }
  },
  mounted () {
    if (this.searchList.length === 0) {
      console.log(this.SearchContent)
      this.getSearchListAction(this.SearchContent)
    }
  }
}
</script>
<style lang="scss" scoped>
    .search{
        width: 100%;
        height: 100%;
        .head{
            height: 1.17333rem;
            width: 100%;
            padding: 0 0.4rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: center;
            align-items: center;
            justify-content: space-between;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 10;
            background-color: #fefefe;
            .search-ipt{
                width: 8.05333rem;
                height: 0.8rem;
                background-color: #f5f5f5;
                border-radius: 0.4rem;
                box-sizing: border-box;
                padding: 0 0.22667rem 0 0.37333rem;
                border: solid 1px #ebebeb;
                display: flex;
                align-items: center;
                span{
                    width: 0.53333rem;
                    height: 0.53333rem;
                    display: block;
                }
                .search-icon{
                    background-image: url(/static/img/search_icon.c387af4.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;
                }
                .text{
                    height: 0.53333rem;
                    line-height: 0.53333rem;
                    width: 6.26667rem;
                    font-size: 0.34667rem;
                    letter-spacing: 0px;
                    color: #232323;
                }
                .cancel-icon{
                    background-image: url(/static/img/cancel.4cc4580.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;
                }
            }
            .cancel{
                font-family: 'PingFang-SC-Medium';
                font-size: 0.37333rem;
                color: #666;
            }
        }
        .search_com{
            width: 100%;
            height: 100%;
            overflow-y: auto;
            background: #fefefe;
            .search_com__wrap{
                padding-top: 1.17333rem;
            }
        }
    }
    .empty-wrap{
        overflow: hidden;
    }
    .show-main{
        padding-top: 0.26667rem;
    }
    .show-model{
        width: 100%;
        padding: 0 0.4rem;
        box-sizing: border-box;
    }
    .show-model__main{
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
    }
    .show-model__item{
        flex: 1;
        width: 4.52rem;
        transition: all 1s;
    }
    .falls-cell{
        width: 4.52rem;
        border-radius: 0.16rem;
        overflow: hidden;
        background-color: #fefefe;
        border: 1px solid #ebebeb;
    }
    .falls-cell__image{
        position: relative;
        width: 100%;
        height: 6.17333rem;
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
    .falls-cell__info{
        padding: 0.21333rem 0.29333rem 0.29333rem;
    }
    .falls-cell__info__title{
        position: relative;
    }
    .falls-cell__info__title__cell{
        color: #232323;
        font-weight: normal;
        font-size: 0.37333rem;
        line-height: 0.53333rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .falls-cell__info__date{
        margin-top: 0.10667rem;
        font-size: 0.34667rem;
        color: #666;
        line-height: 0.53333rem;
    }
    .falls-cell__info__price{
        margin-top: 0.10667rem;
    }
    .falls-cell__info__price--price{
        color: #FF6743;
        font-size: 0.42667rem;
    }
    .falls-cell__info__price__tip{
        color: #999;
        font-size: 0.29333rem;
    }
    .falls-cell__info__support{
        overflow: hidden;
        margin-top: 0.13333rem;
    }
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
</style>
