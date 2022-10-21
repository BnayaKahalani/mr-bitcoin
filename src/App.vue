<template>
  <AppHeader />
  <main class="main-container main-layout">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  created() {
    this.$store.dispatch({ type: 'loadUser' })
  },
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
.main-container {
  min-height: 90vh;
}
</style>
