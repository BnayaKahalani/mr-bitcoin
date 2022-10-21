import { createStore } from 'vuex'
import { contactModule } from './modules/contactMoudle'
import { userModule } from './modules/userModule'

export const store = createStore({
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    contactModule,
    userModule,
  },
})
