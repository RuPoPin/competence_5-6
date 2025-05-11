<template>
  <div class="container">
    <h1 class="page-title">Походы и Маршруты</h1>
    <p class="intro-text">Здесь вы сможете находить вдохновение для своих следующих приключений, просматривать популярные маршруты, а также делиться собственными планами и отчетами о походах.</p>

    <div class="call-to-action">
      <h2>Готовы к новому походу?</h2>
      <p>Начните планировать свое следующее незабываемое путешествие прямо сейчас!</p>
      <NuxtLink to="/contact" class="button">Предложить маршрут</NuxtLink>
    </div>

    <section class="featured-hikes">
      <h2>Популярные направления (Примеры)</h2>
      <div class="hikes-grid">
        <div class="hike-card">
          <img src="https://th.bing.com/th/id/OIP.29crhZO2It8T7NelYXTiwQHaE7?cb=iwp2&rs=1&pid=ImgDetMain" alt="Алтайские горы">
          <h3>Поход по Алтайским горам</h3>
          <p>Сложность: Средняя</p>
          <p>Длительность: 7 дней</p>
          <NuxtLink to="#" class="button-details">Подробнее</NuxtLink>
        </div>
        <div class="hike-card">
          <img src="https://th.bing.com/th/id/OIP.VzQXi-xv2l53oqSCgOK2ZQHaEo?cb=iwp2&rs=1&pid=ImgDetMain" alt="Озеро Байкал">
          <h3>Треккинг вокруг Байкала</h3>
          <p>Сложность: Высокая</p>
          <p>Длительность: 10 дней</p>
          <NuxtLink to="#" class="button-details">Подробнее</NuxtLink>
        </div>
        <div class="hike-card">
          <img src="https://th.bing.com/th/id/OIP.vTXrttxEleU9rYYHn-BHagHaEJ?cb=iwp2&rs=1&pid=ImgDetMain" alt="Кавказские тропы">
          <h3>Прогулка по Кавказским тропам</h3>
          <p>Сложность: Легкая</p>
          <p>Длительность: 3 дня</p>
          <NuxtLink to="#" class="button-details">Подробнее</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Походы и Маршруты - ТурПланнер',
  meta: [
    { name: 'description', content: 'Исследуйте популярные маршруты и планируйте свои походы с ТурПланнер.' }
  ]
})
</script>

<style scoped>
.intro-text {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #555;
}
.call-to-action {
  background-color: #eaf6f6; 
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
}
.call-to-action h2 {
  margin-top: 0;
}
.featured-hikes h2 {
  text-align: center;
  margin-bottom: 20px;
}
.hikes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.hike-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}
.hike-card:hover {
  transform: translateY(-5px);
}
.hike-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.hike-card h3 {
  padding: 15px 15px 5px;
  margin: 0;
  color: #2c3e50;
}
.hike-card p {
  padding: 0 15px 10px;
  margin: 0;
  font-size: 0.9em;
  color: #555;
}
.button-details {
  display: block;
  background-color: #1abc9c;
  color: white;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  margin: 15px;
  border-radius: 5px;
}
.button-details:hover {
  background-color: #16a085;
}
</style>