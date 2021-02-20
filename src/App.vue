<template>
  <div>
      <tabbar v-show="isTabbarShow"></tabbar>
      <section>
          <router-view></router-view>
      </section>
  </div>
</template>
<script>
import './assets/iconfont/iconfont.css'
import tabbar from './components/tabbar'
import { mapState } from 'vuex' // mapState 函数作用是  映射(切割)想要的状态
export default {
  components: {
    tabbar
  },
  computed: {
    ...mapState(['isTabbarShow']) // ['']里名必须在状态state中存在
  }
}
</script>
<style lang="scss">
    *{
      margin: 0;
      padding: 0;
    }
    html,body{
      width: 100%;
      height: 100%;
      background-color: #fefefe;
      font-size:41.4px
    }
    ul {
      list-style: none;
    }
    a{
      display: block;
      text-decoration: none;
      color: #666;
      outline: none;
    }
    a:link, a:visited, a:hover, a:active {
      text-decoration: none;
      outline: none;
  }
    section {
      padding-bottom: 50px;
    }
    img{
    border: none;
      border-color: transparent;
      vertical-align: middle;
      width: 100%;
      height: 100%;
    }
    .ju-image--fill{
      width: 100%;
      height: 100%;
    }
    input{
      background: transparent;
      border: none;
      outline: none;
      font-weight: normal;
      font: inherit;
    }
    input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
}
    .text-double {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    }
    .text-space{
      text-indent: 1rem;
    }
    .text-single {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .c_ff6{
      color: #ff6743!important;
    }
    .title{
      height: 1.17333rem;
      width: 100%;
      background-color: white;
      font-size: 0.48rem;
      color: #232323;
      position: relative;
      border-bottom: 1px solid #ebebeb;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

</style>
