<template>
  <div>
      <tabbar></tabbar>
      <section>
          <router-view></router-view>
      </section>
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
</style>
