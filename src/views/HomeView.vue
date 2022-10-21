<template>
  <section class="home">
    <h1>The Safest Wallet for your Crypto</h1>
    <RouterLink class="btn hero-contacts-btn" :to="`/contacts/`">Transfer crypto securly now</RouterLink>
    <img :src="imgURL" alt="hero-img">
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    imgURL() {
      return new URL("../assets/imgs/home2.svg", import.meta.url).href
    },
  },
}
</script>

<style></style>
