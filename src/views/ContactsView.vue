<template>
  <ContactsList
    v-if="contacts"
    :contacts="contactsForDisplay"
    @remove-contact="onRemoveContact"
    @onSetFilter="onSetFilter"
  />
</template>

<script>
import { contactService } from '../services/contactService'
import ContactsList from '../components/ContactsList.vue'
export default {
  data() {
    return {
      contacts: null,
    }
  },
  async created() {
    const loggedInUser = this.$store.getters.loggedInUser
    if (!loggedInUser) {
      this.$router.push('/login')
    }
    this.contacts = await this.$store.dispatch({ type: 'loadContacts' })
  },
  computed: {
    contactsForDisplay() {
      return this.$store.getters.contactsForDisplay
    },
  },
  methods: {
    onRemoveContact(contactId) {
      contactService.deleteContact(contactId)
      const idx = this.contacts.findIndex(
        (contact) => contact._id === contactId
      )
      this.contacts.splice(idx, 1)
    },
    onSetFilter(filterBy) {
      this.$store.commit({ type: 'setFilterBy', filterBy })
    },
  },
  components: {
    ContactsList,
  },
}
</script>

<style></style>
