import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/views/ListView.vue'),
  },
  {
    path: '/details/:id',
    component: () => import('src/views/DetailsView.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/views/ErrorNotFound.vue'),
  },
]

export default routes
