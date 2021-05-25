import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home.vue'
import Example from '@/pages/Example.vue'

export default new Router({
   routes: [
      {
         path: '/',
         name: "home",
         component: Home
      },
      {
         path: '/example',
         name: "example",
         component: Example
      },
   ]
})