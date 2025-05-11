<template>
  <div class="about-page">
    <div class="hero-section-about">
      <div class="container">
        <h1>О "ТурПланнер"</h1>
        <p class="subtitle">Ваш надежный спутник в мире приключений и открытий!</p>
      </div>
    </div>

    <div class="container content-section">
      <section class="mission-vision">
        <div class="mission-item">
          <img src="/images/icons/mission-icon.svg" alt="Наша миссия" class="icon">
          <h2>Наша миссия</h2>
          <p>Мы стремимся сделать процесс планирования походов доступным, интуитивно понятным и вдохновляющим для каждого. "ТурПланнер" создан, чтобы вы могли легко превращать свои мечты о путешествиях в реальность, экономя время на рутине и фокусируясь на получении незабываемых впечатлений. Мы верим, что природа лечит и объединяет, и хотим помочь как можно большему числу людей открыть для себя ее красоту.</p>
        </div>
        <div class="mission-item">
          <img src="/images/icons/vision-icon.svg" alt="Наше видение" class="icon">
          <h2>Наше видение</h2>
          <p>Стать ведущей платформой для туристического сообщества, объединяющей все необходимые инструменты для планирования, организации и обмена опытом походов. Мы видим "ТурПланнер" как место, где новички находят поддержку и знания, опытные туристы делятся маршрутами и советами, а организаторы легко собирают группы единомышленников для покорения новых вершин.</p>
        </div>
      </section>
      <section class="our-values">
        <h2>Наши ценности</h2>
        <div class="values-grid">
          <div class="value-card">
            <img src="/images/icons/community-icon.svg" alt="Сообщество" class="icon">
            <h3>Сообщество</h3>
            <p>Мы строим дружелюбное и поддерживающее сообщество, где каждый может найти помощь и вдохновение.</p>
          </div>
          <div class="value-card">
            <img src="/images/icons/simplicity-icon.svg" alt="Простота" class="icon">
            <h3>Простота и удобство</h3>
            <p>Интуитивный интерфейс и продуманные функции, чтобы планирование было легким и приятным.</p>
          </div>
          <div class="value-card">
            <img src="/images/icons/safety-icon.svg" alt="Безопасность" class="icon">
            <h3>Безопасность</h3>
            <p>Мы уделяем внимание аспектам безопасности, предоставляя полезную информацию и инструменты.</p>
          </div>
          <div class="value-card">
            <img src="/images/icons/inspiration-icon.svg" alt="Вдохновение" class="icon">
            <h3>Вдохновение</h3>
            <p>Мы хотим вдохновлять вас на новые открытия и приключения, делиться красотой нашего мира.</p>
          </div>
        </div>
      </section>

      <section class="why-tourplanner">
        <h2>Почему "ТурПланнер"?</h2>
        <p>В мире существует множество инструментов для туристов, но "ТурПланнер" выделяется своим комплексным подходом и ориентацией на пользователя. Мы не просто даем вам карту или список снаряжения – мы создаем экосистему для всего цикла планирования похода:</p>
        <ul>
          <li><strong>Все-в-одном:</strong> От поиска идеи и маршрута до сбора группы и подготовки снаряжения.</li>
          <li><strong>Для всех уровней:</strong> Полезные функции как для новичков, так и для опытных туристов.</li>
          <li><strong>Активное сообщество:</strong> Возможность общаться, делиться опытом и находить попутчиков.</li>
          <li><strong>Постоянное развитие:</strong> Мы прислушиваемся к нашим пользователям и постоянно работаем над улучшением приложения.</li>
        </ul>
        <div class="call-to-action">
          <p>Присоединяйтесь к нам и начните планировать свое следующее незабываемое приключение уже сегодня!</p>
          <NuxtLink to="/hikes" class="button">Найти поход</NuxtLink>
          <NuxtLink to="/features" class="button secondary">Узнать о возможностях</NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'О Нас - ТурПланнер',
  meta: [
    { name: 'description', content: 'Узнайте больше о миссии, команде и ценностях приложения ТурПланнер, созданного для любителей походов.' }
  ]
})


</script>

<style scoped>

.hero-section-about {
  background-color: #2c3e50; 
  color: #fff;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 40px;
}

.hero-section-about h1 {
  font-size: 3em;
  margin-bottom: 10px;
  color: #fff; 
}

.hero-section-about .subtitle {
  font-size: 1.4em;
  color: #ecf0f1;
  max-width: 700px;
  margin: 0 auto;
}

.content-section section {
  margin-bottom: 50px;
  padding: 25px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.07);
}

.content-section h2 {
  font-size: 2em;
  color: #1abc9c; 
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.mission-item {
  text-align: center;
}

.mission-item .icon, .value-card .icon {
  width: 60px; 
  height: 60px;
  margin-bottom: 15px;
  
}

.mission-item h2 { 
    font-size: 1.6em;
    color: #2c3e50;
    border-bottom: none;
    margin-bottom: 10px;
}

.who-we-are p {
  text-align: justify; 
  margin-bottom: 20px;
}

.team-photos {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.team-photo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1abc9c;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}

.value-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #eef;
}

.value-card h3 {
  font-size: 1.3em;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 10px;
}

.why-tourplanner ul {
  list-style: disc;
  padding-left: 25px;
  margin-bottom: 25px;
}

.why-tourplanner ul li {
  margin-bottom: 10px;
}

.call-to-action {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.call-to-action p {
  margin-bottom: 20px;
  font-size: 1.1em;
}

.call-to-action .button {
  margin: 0 10px 10px 10px; 
}

.button.secondary {
  background-color: #7f8c8d; 
  color: white;
}
.button.secondary:hover {
  background-color: #6c7a7b;
}


@media (max-width: 768px) {
  .hero-section-about h1 {
    font-size: 2.4em;
  }
  .hero-section-about .subtitle {
    font-size: 1.2em;
  }
  .mission-vision {
    grid-template-columns: 1fr;
  }
  .content-section h2 {
    font-size: 1.8em;
  }
}
</style>