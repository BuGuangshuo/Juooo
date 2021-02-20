import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import SelectCity from '../views/SelectCity.vue'
import Theatre from '../views/Theatre.vue'
import Eticket from '../views/Eticket.vue'
import Center from '../views/Center.vue'
import Ticket from '../views/Ticket.vue'
import Detail from '../views/theatre/Detail.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/selectCity',
    component: SelectCity
  },
  {
    path: '/theatre/theatreList',
    component: Theatre
  },
  {
    path: '/theatre/detail/:id/:id2',
    component: Detail
  },
  {
    path: '/eticket',
    component: Eticket
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/ticket/:id', // 地址命名动态方式 :**id
    component: Ticket // 单文件
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '*', // 通配符
    redirect: '/index' // 重定向地址
  }
]

const router = new VueRouter({
  routes
})

/* //全局拦截
router.beforeEach((to,from,next)=>{

}) */
export default router
