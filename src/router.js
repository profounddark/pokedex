import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Entry from '@/components/Entry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/entry',
      name: 'entry',
      component: Entry
    }
    
  ]
})
