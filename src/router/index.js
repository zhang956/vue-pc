import Vue from 'vue';
import VueRouter from 'vue-router';
import Sidebar from '../components/Sidebar.vue';


Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const routes = [
  {
    path: '/',
    name: 'Sidebar',
    component: Sidebar,
    redirect:'/Home', //重定向路由的路径，默认跳转的路径
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: () => import('../views/Home')
        },
        {
          path: '/userManagement',
          name: 'userManagement',
          component: () => import('../views/systemManagement/userManagement')
        },
        {
          path: '/rolesManagement',
          name: 'rolesManagement',
          component: () => import('../views/systemManagement/rolesManagement')
        },
        {
          path: '/PageOne',
          name: 'PageOne',
          component: () => import('../views/Other/PageOne.vue')
        },
        {
          path: '/PageTwo',
          name: 'PageTwo',
          component: () => import('../views/Other/PageTwo.vue')
        }
      ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
//history模式刷新会出现页面404，hash模式不会出现404
