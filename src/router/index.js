import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'manage_attendance',
      component: () => import('../views/ManageAttendance.vue')
    },
  ]
})

export default router
