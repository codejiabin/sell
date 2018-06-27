import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children:[
        {
          path:'/',
          component:Goods
        },
        {
          path:'/goods',
          component:Goods
        },
        {
          path:'/ratings',
          component:Ratings
        },
        {
          path:'/seller',
          component:Seller
        }
      ]
    }
  ],
  linkActiveClass:'active'
})
