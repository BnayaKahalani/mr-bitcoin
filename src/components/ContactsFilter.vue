<template>
  <input class="contacts-filter" type="text" v-model="filterBy.text" @input="onFilter" placeholder="Search for a contact..." />
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        text:''
      }
    }
  },
  methods: {
    onFilter() {
      this.$emit('filter', this.filterBy)
    }
  }

}
</script>

<style>

</style>