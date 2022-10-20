<template>
  <section class="contact-preview">
    <h3 class="name">{{ contact.name }}</h3>
    <p class="email">{{ contact.email }}</p>
    <p class="phone">{{ contact.phone }}</p>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
