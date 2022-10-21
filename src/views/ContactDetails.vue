<template>
  <div v-if="contact" class="contact-details">
    <div>
      <img :src="getImgUrl" />
    </div>
    <h1 class="name">{{ contact.name }}</h1>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>

    <div class="contacts-preview-btns">
      <button class="btn btn-remove" @click="onRemoveContact(contact._id)">
        Remove
      </button>
      <button class="btn btn-edit" @click="onEditContact(contact._id)">
        Edit
      </button>
    </div>

    <button class="btn back-btn">
      <RouterLink class="link-back" to="/contacts">Back</RouterLink>
    </button>
  </div>
  <div v-else>loading...</div>
</template>

<script>
import { contactService } from "../services/contactService"
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    console.log("created")
    const _id = this.$route.params._id
    this.contact = await contactService.getContactById(_id)
  },
    methods: {
      onRemoveContact(contactId) {
        console.log('contactId:', contactId)
        this.$emit("remove-contact", contactId)
      },
    },
  computed: {
    getImgUrl() {
      console.log("contact:", this.contact)
      return `https://robohash.org/${this.contact._id}`
    },
  },
}
</script>

<style></style>
