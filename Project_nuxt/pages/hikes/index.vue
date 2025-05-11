<template>
  <div class="container">
    <h1 class="page-title">Походы и Маршруты</h1>
    <p class="intro-text">Выберите приключение по душе из нашего каталога или вдохновитесь на создание собственного маршрута.</p>

    <div class="hikes-grid">
      <div v-if="pending" class="loading-state">Загрузка походов...</div>
      <div v-else-if="error" class="error-state">Не удалось загрузить походы: {{ error.message }}</div>
      <div v-else-if="hikes && hikes.length > 0" v-for="hike in hikes" :key="hike.id" class="hike-card">
        <img :src="hike.imageUrl" :alt="hike.title">
        <div class="hike-card-content">
          <h3>{{ hike.title }}</h3>
          <p class="short-desc">{{ hike.shortDescription }}</p>
          <p><strong>Сложность:</strong> {{ hike.difficulty }}</p>
          <p><strong>Длительность:</strong> {{ hike.duration }}</p>
          <NuxtLink :to="`/hikes/${hike.id}`" class="button-details">Подробнее</NuxtLink>
        </div>
      </div>
      <div v-else class="empty-state">Пока нет доступных походов.</div>
    </div>
  </div>
</template>

<script setup>
import { hikesData } from '~/data/hikes.js'; 

useHead({
  title: 'Каталог Походов - ТурПланнер',
  meta: [
    { name: 'description', content: 'Найдите идеальный поход или маршрут в нашем каталоге.' }
  ]
})


const { data: hikes, pending, error } = await useAsyncData('hikes', () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hikesData);
    }, 500); 
  });
});


</script>

<style scoped>
.intro-text {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #555;
}
.hikes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}
.hike-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
}
.hike-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}
.hike-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.hike-card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.hike-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #2c3e50;
  font-size: 1.4em;
}
.hike-card .short-desc {
  font-size: 0.95em;
  color: #555;
  margin-bottom: 15px;
  flex-grow: 1; 
}
.hike-card p {
  margin-bottom: 8px;
  font-size: 0.9em;
}
.button-details {
  display: inline-block;
  background-color: #1abc9c;
  color: white;
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: auto; 
  align-self: flex-start; 
  transition: background-color 0.2s;
}
.button-details:hover {
  background-color: #16a085;
}
.loading-state, .error-state, .empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  color: #777;
}
.error-state {
  color: #e74c3c;
}
</style>