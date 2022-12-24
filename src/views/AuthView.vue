<template>
  <section class="auth" v-if="!loggedInUser">
    <form class="auth-form" @submit.prevent="onLogin">
      <div class="form-control">
        <label for="username">Username: </label>
        <input type="text" placeholder="Enter your username" v-model="userToLogin.username" required />
      </div>
      <div class="form-control">
        <label for="password">Password: </label>
        <input type="password" placeholder="Enter your password" v-model="userToLogin.password" required />
      </div>
      <button class="btn" type="submit">Login</button>
    </form>
  </section>

  <section class="logged-in" v-else>
    <h1 class="name">Username: {{ loggedInUser.username }}</h1>
    <p>Balance: {{ loggedInUser.balance }}</p>
    <ul class="transactions">
      Transactions:
      <li v-for="item in loggedInUser.transactions" :key="item">
        <p>Date: {{ format_date(item.at) }}</p>
        <p>Transferd to: {{ getContactDetails(item.to).name }}</p>
        <p>Amount: {{ item.amount }}</p>
      </li>
    </ul>
    <button class="btn" @click="onSignout">Sign Out</button>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  name: 'AuthView',
  data() {
    return {
      userToLogin: {
        username: '',
        password: '',
      },
    }
  },

  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
    contacts() {
      return this.$store.getters.contacts
    },
  },
  methods: {
    async onLogin() {
      await this.$store.dispatch({
        type: 'login',
        userToLogin: this.userToLogin,
      })
      this.$router.push('/')
    },
    getContactDetails(_id) {
      return this.$store.getters.contacts.find((c) => c._id === _id)
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    },
    async onSignout() {
      await this.$store.dispatch({
        type: 'signout',
      })
    },
  },
}
</script>

<style></style>
