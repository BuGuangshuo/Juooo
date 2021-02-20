<template>
    <!-- 影院(影院列表与影院详情) -->
    <div class="theater-wrap">
        <!-- header区域 -->
        <div class="theater-head">
            <header class="head_nav" ref="headNav">
                <h3 class="title text-single">剧院</h3>
            </header>
        </div>
        <!-- 内容区 -->
        <div class="theater-body">
            <div class="theater-body__main">
                <div class="wrapper" :style="{
                        height: theaterHeight,
                    }">
                    <div class="content">
                        <div class="theater-list">
                            <ul class="theater-ul">
                                <li v-for="theaterData in theaterList" :key="theaterData.id" @click="handleClick(theaterData.vid,theaterData.id)" >
                                    <div class="theater-info-shows" >
                                        <div class="theater-info">
                                            <a href="javascript:;" class="theater-pic-name-count">
                                                <div class="theater-pic-wrap">
                                                    <img :src="theaterData.pic" class="theater-pic">
                                                </div>
                                                <div class="theater-name-count-wrap">
                                                    <p class="theater-name">{{theaterData.name}}</p>
                                                    <p class="theater-count">{{theaterData.count}}场在售演出</p>
                                                </div>
                                            </a>
                                            <a href="javascript:;" class="theater-link">
                                                <img src="/static/img/more.2ce7873.png" class="theater-more-btn">
                                            </a>
                                        </div>
                                        <div class="theater-shows">
                                            <div class="theater-show-wrap">
                                                <theater-swiper :key="theaterData.showList.length">
                                                    <div class="swiper-slide" v-for="showData in theaterData.showList" :key="showData.id">
                                                        <div class="theater-show-date">
                                                            <p class="show-date">{{showData.show_time}}</p>
                                                            <span class="dot"></span>
                                                        </div>
                                                        <a class="theater-show-pic" href="javascript:;">
                                                            <img :src="showData.pic" class="show-pic">
                                                        </a>
                                                    </div>
                                                </theater-swiper>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Loading -->
        <div class="loading_bg" v-show="loadingShow">
            <div class="loading">
                <img src="/static/img/loading.65b0197.svg" class="loading__pic">
            </div>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import theaterSwiper from './theatre/TheatreSwiper.vue'
import axios from 'axios'
export default {
  components: {
    theaterSwiper
  },
  data () {
    return {
      theaterList: [],
      theaterHeight: '0px',
      loadingShow: true
    }
  },
  methods: {
    handleClick (id, id2) {
      this.$router.push(`/theatre/detail/${id}/${id2}`)
    }
  },
  mounted () {
    axios.get('https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.22&referer=2').then((res) => {
      if (res.data.code === '200') {
        this.loadingShow = false
        this.theaterList = res.data.data.theatre_list
        this.$nextTick(() => {
          new BetterScroll('.wrapper', {
          })
        })
      }
    })
    this.theaterHeight = document.documentElement.clientHeight - 50 - this.$refs.headNav.clientHeight + 'px'
  }
}
</script>
<style lang="scss" scoped>
    .theater-wrap{
        height: 100%;
        position: relative;
        /* header区 */
        .head_nav{
            position: fixed;
            top: 0;
            width: 10rem;
            height: 1.17333rem;
            line-height: 1.17333rem;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 1px solid #ebebeb;
            background-color: #fefefe;
            z-index: 100;
            .title{
                font-size: 0.48rem;
                font-weight: normal;
                color: #232323;
                padding: 0 1.33333rem;
            }
        }
        /* 内容区 */
        .theater-body{
            height: 100%;
            background-color: #fdfdfd;
            padding-top: 1.17333rem;
            box-sizing: border-box;
            .theater-body__main{
                height: 100%;
                padding-top: 0.32rem;
                box-sizing: border-box;
                overflow-y: auto;
                .wrapper{
                    height: 100%;
                    position: relative;
                    .theater-list{
                        width: 9.2rem;
                        margin: 0 auto;
                        .theater-info-shows{
                            background-color: #fefefe;
                            box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,0.08);
                            border-radius: 0.10667rem;
                            border: solid 1px #ebebeb;
                            margin-bottom: 0.4rem;
                            padding: 0.54667rem 0.44rem 0.56rem;
                            .theater-info{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .theater-pic-name-count{
                                    display: flex;
                                    .theater-pic-wrap{
                                        width: 1.33333rem;
                                        height: 1.33333rem;
                                        margin-right: 0.26667rem;
                                        overflow: hidden;
                                        .theater-pic{
                                            width: 1.33333rem;
                                            vertical-align: middle;
                                            border-radius: 0.10667rem;
                                        }
                                    }
                                    .theater-name-count-wrap{
                                        max-width: 6rem;
                                        .theater-name{
                                            width: 100%;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        padding: 0.08rem 0 0.13333rem;
                                        font-size: 0.45333rem;
                                        color: #232323;
                                        font-weight: bold;
                                        }
                                        .theater-count{
                                            color: #666666;
                                            font-size: 0.32rem;
                                        }
                                    }
                                }
                                .theater-link{
                                    display: block;
                                    padding: 0.26667rem 0 0.26667rem 0.26667rem;
                                    .theater-more-btn{
                                        width: 0.37333rem;
                                        height: 0.37333rem;
                                    }
                                }
                            }
                            .theater-shows{
                                margin-top: 0.34667rem;
                                .swiper-slide{
                                    width: 3.04rem;
                                    .theater-show-date{
                                        position: relative;
                                        width: 3.04rem;
                                        border-bottom: 0.05333rem solid #ebebeb;
                                        border-radius: 0.02667rem;
                                        padding-bottom: 0.38667rem;
                                        margin-bottom: 0.46667rem;
                                        .show-date{
                                            color: #b3b3b3;
                                            font-size: 0.37333rem;
                                            padding-right: 0.18667rem;
                                            text-align: center;
                                            height: 0.33333rem;
                                        }
                                        .dot{
                                            position: absolute;
                                            left: 50%;
                                            bottom: -0.12rem;
                                            display: inline-block;
                                            width: 0.18667rem;
                                            height: 0.18667rem;
                                            margin-left: -0.18667rem;
                                            border-radius: 50%;
                                            background-color: #cccccc;
                                        }
                                    }
                                    .theater-show-pic{
                                        display: block;
                                        width: 3.04rem;
                                        height: 3.89333rem;
                                        line-height: 3.89333rem;
                                        overflow: hidden;
                                        .show-pic{
                                            width: 2.85333rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        /* Loading */
        .loading_bg{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        overflow: hidden;
        background-color: #FFFFFF;
        .loading{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            .loading__pic{
            width: 1.06667rem;
            height: 1.06667rem;
            }
        }
        }
    }
</style>
