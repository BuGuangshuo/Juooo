import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import SelectCity from '../views/SelectCity.vue'
import Theatre from '../views/Theatre.vue'
import Eticket from '../views/Eticket.vue'
import Center from '../views/Center.vue'
import Ticket from '../views/Ticket.vue'
import TheatreList from '../views/theatre/TheatreList.vue'
import Detail from '../views/theatre/Detail.vue'
import Login from '../views/Login.vue'

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
    path: '/theatre',
    component: Theatre,
    children: [
      {
        path: '/theatre/theatreList',
        component: TheatreList
      },
      {
        path: '/theatre/detail',
        component: Detail
      },
      {
        path: '/theatre',
        redirect: '/theatre/theatreList'
      }
    ]
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
    path: '/ticket',
    component: Ticket
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*', // 通配符
    redirect: '/index' // 重定向地址
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})
export default router
