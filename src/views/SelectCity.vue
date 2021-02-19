<template>
    <div class="city">
        <header class="head_nav">
            <span class="head_icon back_icon"></span>
            <h3 class="title text-single">城市选择</h3>
        </header>
        <van-index-bar :index-list="computedCityList()">
            <div v-for="(data,index) in cityList" :key="index">     <!-- 嵌套循环 -->
                <van-index-anchor :index="data.id" />             <!-- 城市首字母 -->
                <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleClick(item)"/><!-- 城市名 -->
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell } from 'vant'
import axios from 'axios'
import { mapMutations } from 'vuex'
Vue.use(IndexBar).use(IndexAnchor).use(Cell)
export default {
  data () {
    return {
      cityList: null,
      cityIndex: []
    }
  },
  methods: {
    ...mapMutations(['changeCityName', 'changeCityId', 'changeCityAbbreviation']),
    handleClick (item) {
      this.changeCityName(item.name)
      this.changeCityId(item.id)
      this.changeCityAbbreviation(item.Abbreviation)
      this.$router.back()
    },
    computedCityList () {
      for (var i in this.cityList) {
        this.cityIndex.push(i) // 计算属性 只遍历存在城市的数组
      }
      return this.cityIndex
    }
  },
  mounted () {
    this.$store.commit('hide')
    axios.get('https://api.juooo.com/city/city/getSortedCityList?version=6.1.22&referer=2').then((res) => {
      this.cityList = res.data.data
    })
  },
  destroyed () {
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
    .city{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
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
        .head_icon {
            position: absolute;
            top: 0;
            display: inline-block;
            width: 1.33333rem;
            height: 100%;
            &.back_icon{
                left: 0;
                background: url(/static/img/back_icon.754b906.png) no-repeat 0.4rem 50%;
                background-size: 0.53333rem 0.53333rem;
            }
        }
        .title{
            font-size: 0.48rem;
            font-weight: normal;
            color: #232323;
            padding: 0 1.33333rem;
        }
    }
    .van-index-bar{
        margin-top:1rem;
    }
</style>
