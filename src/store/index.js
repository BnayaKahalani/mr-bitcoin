import { createStore } from 'vuex'
import { contactModule } from './modules/contactMoudle'
import { userModule } from './modules/userModule'

export const store = createStore({
  state() {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    contactModule,
    userModule,
  },
})
