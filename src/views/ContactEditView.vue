<template>
  <div v-if="contactToEdit" class="contact-edit-container">
    <div class="input-container">
      <span>Name:</span>
      <input
        class="input-name"
        type="text"
        v-model="contactToEdit.name"
        placeholder="Enter your name..."
      />
      <span> Email:</span>
      <input
        class="input-name"
        type="text"
        v-model="contactToEdit.email"
        placeholder="Enter your email..."
      />
      <span>Phone:</span>
      <input
        class="input-name"
        type="text"
        v-model="contactToEdit.phone"
        placeholder="Enter your phone..."
      />
    </div>
    <div class="btn-container">
      <button @click="onSaveContant" class="btn">Save</button>
      <RouterLink to="/contacts">
        <button class="btn">Cancel</button>
      </RouterLink>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { contactService } from '../services/contactService'
export default {
  name: 'ContactEdit',
  data() {
    return {
      contactToEdit: null,
    }
  },
  async created() {
    const { _id } = this.$route.params
    this.contactToEdit = _id
      ? await contactService.getContactById(_id)
      : contactService.getEmptyContact()
  },
  methods: {
    async onSaveContant() {
      await this.$store.dispatch({
        type: 'saveContact',
        contactToSave: this.contactToEdit,
      })
      this.$router.push('/contacts')
    },
  },
}
</script>

<style></style>
