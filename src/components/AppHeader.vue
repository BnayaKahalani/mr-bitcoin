<template>
  <header class="app-header main-layout">
    <div class="app-header-container">
      <div class="logo">
        <RouterLink to="/"><h1 class="logo">Mr. Bitcoin</h1></RouterLink>
        <img :src="imgURL" alt="bitcoin-img" />
        <p class="username">Hello, {{ loggedInUser.name.split(" ")[0] }} </p>
      </div>
      <nav class="nav-container">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink to="/stats">Statistics</RouterLink>
      </nav>
      <div class="info-container">
        <div class="custom-select">
          <select @change="getCurrExchangeRate" v-model="currency">
            <option
              v-for="currencyOption in currencyOptions"
              :key="currencyOption"
              :value="currencyOption"
            >
              {{ currencyOption }}
            </option>
          </select>
        </div>
        <p class="rate" v-if="bitcoinRate">{{ currRate }}</p>
      </div>
    </div>
  </header>
</template>

<script>
import { userService } from "../services/userService"
import { bitcoinService } from "../services/bitcoinService"
export default {
  data() {
    return {
      loggedInUser: null,
      bitcoinRate: null,
      currency: "USD",
      currencyOptions: [],
    }
  },
  async created() {
    this.getLoggedInUser(),
      await this.getCurrExchangeRate(),
      await this.getCurrencyOptions()
  },
  methods: {
    getLoggedInUser() {
      this.loggedInUser = userService.getLoggedInUser()
    },
    async getCurrExchangeRate() {
      this.bitcoinRate = await bitcoinService.getRate(this.currency)
    },
    async getCurrencyOptions() {
      this.currencyOptions = await bitcoinService.getCurrencyOptions()
    },
  },
  computed: {
    currRate() {
      return `Bitcoin/${this.bitcoinRate.symbol} ${this.bitcoinRate.last}`
    },
    imgURL() {
      return new URL("../assets/imgs/logo.ico", import.meta.url).href
    },
  },
}
</script>

<style></style>
