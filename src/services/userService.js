export const userService = {
  getLoggedInUser,
  login,
  signout,
}
let gUser = {
  username: 'Puki Cohen',
  password: 'puki',
  balance: 100,
  transactions: [],
}

async function getLoggedInUser() {
  return gUser
}

async function login(userToLogin) {
  gUser = { ...userToLogin, balance: 100, transactions: [] }
  return gUser
}

async function signout() {
  gUser = null
}
