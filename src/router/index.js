import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash) {
      window.location.href.split('#')[0]
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }else {
      return {
        x:0,
        y:0
      }
    }
  }
});