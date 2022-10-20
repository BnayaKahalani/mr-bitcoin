<template>
  <ContactsList @remove-contact="onRemoveContact" :contacts="contacts" />
</template>

<script>
import { contactService } from "../services/contactService"
import ContactsList from "../components/ContactsList.vue"
export default {
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    onRemoveContact(contactId) {
      contactService.deleteContact(contactId)
      const idx = this.contacts.findIndex(
        (contact) => contact._id === contactId
      )
      this.contacts.splice(idx, 1)
    },
  },
  components: {
    ContactsList,
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
}
</script>

<style></style>
