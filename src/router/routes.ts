import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/views/ListView.vue'),
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('src/views/DetailsView.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/views/ErrorNotFound.vue'),
  },
]

export default routes
