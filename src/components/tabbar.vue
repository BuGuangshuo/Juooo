<template>
        <footer>
            <ul>
                <router-link to="/index" custom v-slot="{ navigate, isActive }">
                    <li @click="navigate" :class="isActive ? 'kerwinActive' : ''">
                    <i class="iconfont icon-shouye"></i>
                    <span>首页</span>
                    </li>
                </router-link>
                <router-link to="/theatre" custom v-slot="{ navigate, isActive }">
                    <li @click="navigate" :class="isActive ? 'kerwinActive' : ''">
                    <i class="iconfont icon-yingyuan1"></i>
                    <span>影院</span>
                    </li>
                </router-link>
                <router-link to="/eticket" custom v-slot="{ navigate, isActive }">
                    <li @click="navigate" :class="isActive ? 'kerwinActive' : ''">
                    <i class="iconfont icon-wodepiaojia"></i>
                    <span>票夹</span>
                    </li>
                </router-link>
                <router-link to="/center" custom v-slot="{ navigate, isActive }">
                    <li @click="navigate" :class="isActive ? 'kerwinActive' : ''">
                    <i class="iconfont icon-ren"></i>
                    <span>我的</span>
                    </li>
                </router-link>
            </ul>
        </footer>
</template>
<style lang="scss" scoped>
.kerwinActive {
  color: #ff6743;
}
footer {
  box-shadow: 0px 0px 0.06667rem #ebebeb;
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 25px;
  background: #fff;
  text-align: center;
  ul {
    display: flex;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      i {
        font-size: 28px;
      }
      span {
        font-size: 12px;
        color: #232323;
      }
    }
  }
}
</style>
