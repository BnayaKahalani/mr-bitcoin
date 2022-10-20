const user = {
  name: "Puki Cohen",
  balance: 100,
  transactions: []
  }

  export const userService = {
  getLoggedInUser,
  }

  function getLoggedInUser() {
    return user
  }