import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ContactDetails from '../views/ContactDetails.vue'
import StatsView from '../views/StatsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/contacts:_id?',
      name: 'details',
      component: ContactDetails
    },
    {
      path: '/stats',
      name: 'statistics',
      component: StatsView
    }
  ]
})

export default router
