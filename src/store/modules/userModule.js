import { userService } from '../../services/userService'

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
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedInUser = user
    },
  },
  actions: {
    async loadUser({ commit }) {
      const user = await userService.getLoggedInUser()
      commit({ type: 'setUser', user })
    },
    async login({ commit }, { userToLogin }) {
      const user = await userService.login(userToLogin)
      commit({ type: 'setUser', user })
    },
    async signout({ commit }) {
      await userService.signout()
      commit({ type: 'setUser', user: null })
    },
  },
}
