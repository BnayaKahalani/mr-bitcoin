export const userService = {
  getLoggedInUser,
  login,
  signout,
  transfer
}
let gUser = {
  username: 'Yossi Cohen',
  password: 'YC',
  balance: 1000,
  transactions: [],
}

async function transfer({ amount, to }) {
  gUser.transactions.push({
    to,
    amount,
    at: new Date()
  })
  gUser.balance -= amount

  return gUser
}

async function getLoggedInUser() {
  return gUser
}

async function login(userToLogin) {
  console.log('userToLogin', userToLogin)
  gUser = { ...userToLogin, balance: 1000, transactions: [] }
  console.log('gUser', gUser)
  return gUser
}

async function signout() {
  gUser = null
}
