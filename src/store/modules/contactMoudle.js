import { contactService } from '../../services/contactService'

export const contactModule = {
  state() {
    return {
      contacts: null,
      filterBy: {},
    }
  },
  getters: {
    contacts(state) {
      return state.contacts
    },
    contactsForDisplay({ contacts, filterBy }) {
      let filteredContacts = JSON.parse(JSON.stringify(contacts))
      if (filterBy.text) {
        filteredContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterBy.text.toLowerCase())
        )
      }

      return filteredContacts
    },
    filterBy(state) {
      return state.filterBy
    },
  },
  mutations: {
    setContacts(state, { contacts }) {
      state.contacts = contacts
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
    addContact(state, { contact }) {
      state.contacts.push(contact)
    },
    updateContact(state, { contact }) {
      const idx = state.contacts.findIndex((c) => c._id === contact._id)
      state.contacts.splice(idx, 1, contact)
    },
    removeContact(state, { contactId }) {
      const idx = state.contacts.findIndex((c) => c._id === contactId)
      state.contacts.splice(idx, 1)
    },
  },
  actions: {
    async loadContacts({ commit }) {
      const contacts = await contactService.getContacts()
      commit({ type: 'setContacts', contacts })
      return contacts
    },
    async saveContact({ commit }, { contactToSave }) {
      console.log('contactToSave', contactToSave)
      const type = contactToSave._id ? 'updateContact' : 'addContact'
      const contact = await contactService.saveContact(contactToSave)
      commit({ type, contact })
    },
    async removeContact({ commit }, { contactId }) {
      await contactService.deleteContact(contactId)
      commit({ type: 'removeContact', contactId })
    },
  },
}
