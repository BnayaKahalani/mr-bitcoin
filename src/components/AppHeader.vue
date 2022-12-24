<template>
  <header class="app-header main-layout">
    <div class="app-header-container">
      <div class="logo">
        <RouterLink to="/"><h1 class="logo">Mr. Bitcoin</h1></RouterLink>
        <img :src="imgURL" alt="bitcoin-img" />
        <RouterLink to="/login">
          <p class="username">
            Hello, {{ loggedInUser?.username?.split(' ')[0] || 'Guest' }}
          </p>
          <p class="username" v-if="loggedInUser">Your balance: {{ loggedInUser.balance }}</p>
        </RouterLink>
      </div>

      <div class="menu__btn" @click="toggleMenu(true)">☰</div>
      <NavLinks @toggleMenu="toggleMenu" :isOpen="isOpen" />

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
import NavLinks from './NavLinks.vue'

export default {
  data() {
    return {
      bitcoinRate: null,
      currency: 'USD',
      currencyOptions: [],
      isOpen: false,
    }
  },
  async created() {
    await this.getCurrExchangeRate()
    await this.getCurrencyOptions()
  },
  methods: {
    async getCurrExchangeRate() {
      this.bitcoinRate = await bitcoinService.getRate(this.currency)
    },
    async getCurrencyOptions() {
      this.currencyOptions = await bitcoinService.getCurrencyOptions()
    },
    toggleMenu(state) {
      this.isOpen = state
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
    userBalance() {
      return this.$store.getters.userBalance
    },
    currRate() {
      return `Bitcoin/${this.bitcoinRate.symbol} ${this.bitcoinRate.last}`
    },
    imgURL() {
      return new URL('../assets/imgs/logo.ico', import.meta.url).href
    },
  },
  components: {
    NavLinks,
  }
 
}
</script>

