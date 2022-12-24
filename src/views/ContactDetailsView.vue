<template>
  <div v-if="contact" class="contact-details">
    <div>
      <img :src="getImgUrl" />
    </div>
    <h1 class="name">{{ contact.name }}</h1>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>

    <Transfer :user="user" @onTransfer="onTransfer"/>
    


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
import { contactService } from '../services/contactService'
import Transfer from '../components/Transfer.vue'

export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const _id = this.$route.params._id
    this.contact = await contactService.getContactById(_id)
  },
  methods: {
    async onRemoveContact(contactId) {
      console.log('contactId', contactId)
      await this.$store.dispatch({ type: 'removeContact', contactId })
      this.$router.push(`/contacts`)
    },
    async onTransfer(amount) {
      const transaction = {
        amount,
        to: this.contact._id
      }
      await this.$store.dispatch({type: 'onTransfer', transaction})
      // await this.$store.dispatch({type: 'updateContact', amount})
    },
    onEditContact(contactId) {
      this.$router.push(`/contacts/edit/${contactId}`)
    },
  },
  computed: {
    getImgUrl() {
      return `https://robohash.org/${this.contact._id}`
    },
    user() {
      return this.$store.getters.loggedInUser
    }
  },
  components: {
    Transfer
  }
}
</script>

<style></style>
