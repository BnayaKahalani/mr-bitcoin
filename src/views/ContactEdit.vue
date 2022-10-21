<template>
  <div v-if="contact" class="contact-edit-container">
    <h1>{{ name }}</h1>
    <div class="input-edit">
      <input class="input-name" type="text" v-model="name" />
      <button @click="onSaveContant" class="button green">Save</button>
      <RouterLink :to="`/contact/${contact._id}`">
        <button class="button red">Cancel</button>
      </RouterLink>
    </div>

    <!-- <div class="contact-edit-container add" v-else> -->
      <div class="input-container">
        <span>Name:</span>
        <input class="input-name" type="text" v-model="name" />
        <span> Email:</span>
        <input class="input-name" type="text" v-model="email" />
        <span>Phone:</span>
        <input class="input-name" type="text" v-model="phone" />
      </div>
      <div class="btn-container">
        <RouterLink to="/contact">
          <button @click="onSaveContant" class="button green">Save</button>
        </RouterLink>
        <RouterLink to="/contact">
          <button class="button red">Cencel</button>
        </RouterLink>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {}
</script>

<style></style>
