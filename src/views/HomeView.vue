<template>
  <section class="home">
    <h1>The Most Secured Wallet for your Crypto</h1>
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
