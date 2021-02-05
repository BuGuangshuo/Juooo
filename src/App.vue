<template>
  <div>
      <section>
          <router-view></router-view>
      </section>
  </div>
</template>
<script>
export default {

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
      background: #fefefe;
    }
    ul {
  list-style: none;
}
section {
  padding-bottom: 50px;
}
</style>
