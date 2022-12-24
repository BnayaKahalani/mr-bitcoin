import { userService } from '../../services/userService'
import _ from 'lodash'

export const userModule = {
  state() {
    return {
      loggedInUser: null,
    }
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    },
    userBalance(state) {
      return state.loggedInUser.balance
    },
  },
  mutations: {

    setUser(state, { loggedInUser }) {
      if (_.isEmpty(loggedInUser)) state.loggedInUser = null
      else state.loggedInUser = { ...loggedInUser }
    },
  },
  actions: {
    async loadUser({ commit }) {
      const loggedInUser = await userService.getLoggedInUser()
      commit({ type: 'setUser', loggedInUser })
    },
    async login({ commit }, { userToLogin }) {
      const loggedInUser = await userService.login(userToLogin)
      commit({ type: 'setUser', loggedInUser })
    },
    async signout({ commit }) {
      await userService.signout()
      commit({ type: 'setUser', loggedInUser: null })
    },
    async onTransfer({ commit }, { transaction }) {
      const loggedInUser = await userService.transfer(transaction)
      commit({ type: 'setUser', loggedInUser })
    }
  },
}
