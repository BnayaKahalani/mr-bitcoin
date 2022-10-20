<template>
  <section class="contacts-list">
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <div class="contacts-preview-btns">
          <button class="btn btn-remove" @click="onRemoveContact(contact._id)">Remove</button>
          <button class="btn btn-edit" @click="onEditContact(contact._id)">Edit</button>
          <button class="btn btn-details">
            <RouterLink class="link-details" :to="`/contact/${contact._id}`">Details</RouterLink>
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue"
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("remove-contact", contactId)
    },
  },
  components: { ContactPreview },
}
</script>

<style></style>
