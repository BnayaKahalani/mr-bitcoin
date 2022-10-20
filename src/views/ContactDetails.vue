<template>
  <div v-if="contact" class="contact-details">
    <h1>Contact Details</h1>
    <h2>{{ contact.name }}</h2>
    <h3>{{ contact.email }}</h3>
    <h3>{{ contact.phone }}</h3>
    <button><RouterLink to="/contacts">Back</RouterLink></button>
  </div>
  <div v-else>loading...</div>
</template>

<script>
import { contactService } from "../services/contactService";
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    console.log('created')
    const _id = this.$route.params._id
    this.contact = await contactService.getContactById(_id)
  }
}
</script>

<style></style>
