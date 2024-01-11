// router.js
import {createRouter, createWebHistory} from 'vue-router'
import StoriesList from '@/components/StoriesList.vue'

const routes = [
    { path: '/', component: StoriesList },
    { path: '/:id', name: 'story', component: StoriesList, props: true },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router;
