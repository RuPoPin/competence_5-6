<template>
  <div class="feature-card">
    <img v-if="icon" :src="icon" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

.feature-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}
</style>