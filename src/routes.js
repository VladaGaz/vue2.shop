import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home.vue'
import Shop from '@/pages/Shop.vue'
import Product from '@/pages/Product.vue'

export default new Router({
   routes: [
      {
         path: '/',
         name: "home",
         component: Home
      },
      {
         path: '/shop',
         name: "shop",
         component: Shop
      },
      {
         path: '/shop/:id',
         name: "product",
         component: Product
      },
   ]
})