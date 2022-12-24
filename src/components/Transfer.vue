<template>
  <form @submit.prevent="onFormSubmit" class="transfer">
    Amount to transfer: {{ amount }}
    <input type="range" v-model.number="amount" :max="user.balance" />
    <button @click="open1" type="submit" class="btn btn-transfer">Transfer</button>
  </form>
</template>

<script>
import { ElNotification } from 'element-plus'

export default {
  name: 'Transfer',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      amount: 0,
    }
  },
  methods: {
    onFormSubmit() {
      this.$emit('onTransfer', this.amount)
    },
    open1() {
      ElNotification({
        title: 'Done!',
        message: 'Your crypto transferred safely',
        type: 'success',
      })
    },
  },
}
</script>

<style></style>
