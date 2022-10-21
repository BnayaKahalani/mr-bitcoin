<template>
  <section class="auth" v-if="!loggedInUser">
    <form @submit.prevent="onLogin">
      <div class="form-control">
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="enter your username"
          v-model="userToLogin.username"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          v-model="userToLogin.password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </section>
  <section v-else>
    Hello {{ loggedInUser }}
    <button @click="onSignout">Sign Out</button>
  </section>
</template>

<script>
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
  },
  methods: {
    async onLogin() {
      await this.$store.dispatch({
        type: 'login',
        userToLogin: this.userToLogin,
      })
      this.$router.push('/')
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
