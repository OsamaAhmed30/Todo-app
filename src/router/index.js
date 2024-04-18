import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/MyHome.vue'),
      meta:{
        title:"Home"
      }
    },
    {
      path: '/todos',
      name: 'todos',
      component: ()=> import('@/views/ShowTodos.vue'),
      meta:{
        title:"Todos"
      }
    },
    
  ]
})

export default router
