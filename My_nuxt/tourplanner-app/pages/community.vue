<template>
  <div class="container">
    <h1 class="page-title">Сообщество "ТурПланнер"</h1>
    <p class="intro-text">Присоединяйтесь к нашему растущему сообществу любителей походов! Делитесь опытом, находите попутчиков и вдохновляйтесь идеями для новых приключений.</p>

    <section class="community-features">
      <div class="feature-item">
        <div class="icon-placeholder">👥</div>
        <h2>Находите попутчиков</h2>
        <p>Используйте "ТурПланнер" для поиска людей со схожими интересами и уровнем подготовки для ваших походов. Безопасные и проверенные профили.</p>
      </div>
      <div class="feature-item">
        <div class="icon-placeholder">🗺️</div>
        <h2>Делитесь маршрутами</h2>
        <p>Публикуйте свои любимые маршруты, добавляйте фотографии и описания. Помогайте другим открывать новые места и вдохновляйте на приключения.</p>
      </div>
      <div class="feature-item">
        <div class="icon-placeholder">💬</div>
        <h2>Обсуждайте и советуйтесь</h2>
        <p>Участвуйте в обсуждениях, задавайте вопросы опытным туристам, делитесь советами по снаряжению, подготовке и безопасности в походах.</p>
      </div>
      <div class="feature-item">
        <div class="icon-placeholder">🏆</div>
        <h2>Участвуйте в челленджах</h2>
        <p>Принимайте участие в тематических челленджах, достигайте целей и получайте значки достижений в своем профиле (планируемая функция).</p>
      </div>
    </section>

    <div class="join-us">
      <h2>Присоединяйтесь к нам!</h2>
      <p>Станьте частью активного и дружелюбного сообщества "ТурПланнер". Вместе мы сделаем походы еще увлекательнее!</p>
      <NuxtLink to="/contact" class="button">Задать вопрос о сообществе</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Сообщество - ТурПланнер',
  meta: [
    { name: 'description', content: 'Присоединяйтесь к сообществу ТурПланнер, находите попутчиков и делитесь опытом.' }
  ]
})
</script>

<style scoped>
.intro-text {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 40px;
  color: #555;
}
.community-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}
.feature-item {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.icon-placeholder {
  font-size: 3em;
  margin-bottom: 15px;
  color: #1abc9c;
}
.feature-item h2 {
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #2c3e50;
}
.join-us {
  background-color: #f0f9f8;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
}
.join-us h2 {
  margin-top: 0;
}
</style>