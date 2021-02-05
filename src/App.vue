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
</style>
