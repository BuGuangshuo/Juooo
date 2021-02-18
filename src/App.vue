<template>
  <div>
      <tabbar></tabbar>
      <section>
          <router-view></router-view>
      </section>
      <!-- Loading -->
      <div class="loading_bg" v-show="false">
          <div class="loading">
            <img src="/static/img/loading.65b0197.svg" class="loading__pic">
          </div>
      </div>
  </div>
</template>
<script>
import './assets/iconfont/iconfont.css'
import tabbar from './components/tabbar'
export default {
  components: {
    tabbar
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
</style>
