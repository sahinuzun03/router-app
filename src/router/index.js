import { createRouter, createWebHistory } from 'vue-router'
//vue-router'dan import eklemesi yaptık
import HomeView from '../views/HomeView.vue'
//component ekler gibi homeview'i buraya ekledik

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //Homeview'i burada component olarak eklemesini yaptım
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/student',
    name:'student',
    component: () => import('../views/Students.vue')
  },
  {
    path:'/students/:id',
    name:'studentInfo',
    component: () => import('../views/StudentInfo.vue')
  }
  //component olarak import olarak ekleme yaptım buna lazy loading deniyor.
  //İhtiyaç olunduu anda sayfanın yüklenmesini sağladık
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//route html içerisine nasıl gönderiliyor.

export default router


