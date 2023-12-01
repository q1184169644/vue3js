import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TemplateSyntax.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReactiveBase.vue')
  },
  {
    path: '/ComputedPage',
    name: 'ComputedPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComputedPage.vue')
  },
  {
    path: '/ClassStyle',
    name: 'ClassStyle',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClassStyle.vue')
  },
  {
    path: '/RenderPage',
    name: 'RenderPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/RenderPage.vue')
  },
  {
    path: '/EventPage',
    name: 'EventPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventPage.vue')
  },
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifeCycle.vue')
  },
  {
    path: '/WatchPage',
    name: 'WatchPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchPage.vue')
  },
  {
    path: '/ComponentPage',
    name: 'ComponentPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComponentPage.vue')
  },
  {
    path: '/ModelPage',
    name: 'ModelPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModelPage.vue')
  },
  {
    path: '/InjectPage',
    name: 'InjectPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/InjectPage.vue')
  },
  {
    path: '/SlotPage',
    name: 'SlotPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/SlotPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
