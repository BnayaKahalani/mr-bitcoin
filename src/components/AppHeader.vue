<template>
  <header class="app-header main-layout">
    <div class="app-header-container">
      <div class="logo">
        <RouterLink to="/"><h1 class="logo">Mr. Bitcoin</h1></RouterLink>
        <img :src="imgURL" alt="bitcoin-img" />
        <p class="username">
          Hello, {{ loggedInUser?.username?.split(' ')[0] || 'Guest' }}
        </p>
      </div>
      <nav class="nav-container">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contacts">Contacts</RouterLink>
        <RouterLink to="/stats">Statistics</RouterLink>
        <RouterLink to="/login">login</RouterLink>
      </nav>
      <div class="info-container">
        <div class="custom-select" v-if="currencyOptions">
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
import { bitcoinService } from '../services/bitcoinService'
export default {
  data() {
    return {
      bitcoinRate: null,
      currency: 'USD',
      currencyOptions: [],
    }
  },
  async created() {
    await this.getCurrExchangeRate()
    await this.getCurrencyOptions()
  },
  methods: {
    // getLoggedInUser() {
    //   this.loggedInUser = userService.getLoggedInUser()
    // },
    async getCurrExchangeRate() {
      this.bitcoinRate = await bitcoinService.getRate(this.currency)
    },
    async getCurrencyOptions() {
      this.currencyOptions = await bitcoinService.getCurrencyOptions()
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
    currRate() {
      return `Bitcoin/${this.bitcoinRate.symbol} ${this.bitcoinRate.last}`
    },
    imgURL() {
      return new URL('../assets/imgs/logo.ico', import.meta.url).href
    },
  },
}
</script>

<style></style>
