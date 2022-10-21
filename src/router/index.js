import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ContactDetails from '../views/ContactDetails.vue'
import StatsView from '../views/StatsView.vue'
import ContactsEdit from '../views/ContactEdit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-active',
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
      path: '/contacts/:_id',
      name: 'details',
      component: ContactDetails
    },
    {
      path: '/contacts/edit/:_id?',
      name: 'edit',
      // component: ContactEdit
    },
    {
      path: '/stats',
      name: 'statistics',
      component: StatsView
    }
  ]
})

export default router
