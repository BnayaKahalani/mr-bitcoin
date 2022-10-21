<template>
  <section class="contacts-list">
    <div class="list-uppersection-container">
      <h1>Transfer to...</h1>
      <ContactsFilter />
      <button class="btn">Add Contact</button>
    </div>
    <ul>
      <TransitionGroup name="list" tag="ul">
        <li v-for="contact in contacts" :key="contact._id">
          <ContactPreview :contact="contact" />
          <div class="contacts-preview-btns">
            <button class="btn btn-details">
              <RouterLink class="link-details" :to="`/contacts/${contact._id}`"
                >Details</RouterLink
              >
            </button>
          </div>
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue"
import ContactsFilter from "./ContactsFilter.vue"
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
  components: { ContactPreview, ContactsFilter },
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
