<template>
  <nav :class="`nav__links ${isOpen ? 'open' : ''}`">
    <span @click="onToggleMenu(false)" class="btn__close">&#10006;</span>
    <RouterLink to="/" @click="onToggleMenu(false)">Home</RouterLink>
    <RouterLink to="/contacts" @click="onToggleMenu(false)">Contacts</RouterLink>
    <RouterLink to="/stats" @click="onToggleMenu(false)">Statistics</RouterLink>
    <RouterLink to="/login" @click="onToggleMenu(false)">login</RouterLink>
  </nav>
</template>
<script>
export default {
  name: 'NavLinks',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    styledClass() {
      return `nav__links ${this.isOpen ? 'open' : ''}`
    },
  },
  methods: {
    onToggleMenu(state) {
      this.$emit('toggleMenu', state)
    }
  }
}
</script>