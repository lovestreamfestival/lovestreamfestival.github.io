import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'

Vue.use(Router)
// const pages = ['Home01.vue', 'Home02.vue', 'Home03.vue']

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}/`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue')
          // component: () => import(`./views/${pages[Math.floor(Math.random()*pages.length)]}`)
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/About.vue')
        },
        {
          path: 'games',
          name: 'games',
          component: () => import('./views/Games.vue')
        },
        {
          path: 'partners',
          name: 'partners',
          component: () => import('./views/Partners.vue')
        },
        {
          path: 'career',
          name: 'career',
          component: () => import('./views/Career.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('./views/Contact.vue')
        }
      ]
    }
  ]
})
