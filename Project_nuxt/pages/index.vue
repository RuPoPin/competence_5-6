<template>
  <div class="home-page">

    <section class="hero-main">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1>Откройте мир приключений с "ТурПланнер"!</h1>
        <p class="subtitle">Планируйте походы, находите маршруты и единомышленников легко и удобно. Ваше следующее незабываемое путешествие начинается здесь!</p>
        <div class="hero-buttons">
          <NuxtLink to="/hikes" class="button hero-button primary">Найти поход</NuxtLink>
          <NuxtLink to="/features" class="button hero-button secondary">Узнать больше</NuxtLink>
        </div>
      </div>
    </section>
    <section class="why-us-section section-padding">
      <div class="container">
        <h2 class="section-title">Почему выбирают "ТурПланнер"?</h2>
        <div class="features-grid-home">
          <div class="feature-item-home">
            <img src="/images/icons/map-planning.svg" alt="Планирование" class="feature-icon">
            <h3>Удобное планирование</h3>
            <p>Интуитивные инструменты для создания маршрутов, чек-листов и управления группой.</p>
          </div>
          <div class="feature-item-home">
            <img src="/images/icons/community-feature.svg" alt="Сообщество" class="feature-icon">
            <h3>Активное сообщество</h3>
            <p>Находите попутчиков, делитесь опытом и вдохновляйтесь идеями других туристов.</p>
          </div>
          <div class="feature-item-home">
            <img src="/images/icons/all-in-one.svg" alt="Все-в-одном" class="feature-icon">
            <h3>Все инструменты в одном месте</h3>
            <p>От карт и снаряжения до общения и поиска – всё, что нужно для идеального похода.</p>
          </div>
          <div class="feature-item-home">
            <img src="/images/icons/safety-first.svg" alt="Безопасность" class="feature-icon">
            <h3>Безопасность и поддержка</h3>
            <p>Полезные советы, чек-листы безопасности и возможность делиться своим местоположением.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="popular-hikes-section section-padding bg-light">
      <div class="container">
        <h2 class="section-title">Популярные направления</h2>
        <div class="hikes-grid-home">
          <div v-for="hike in popularHikes" :key="hike.id" class="hike-card-home">
            <NuxtLink :to="`/hikes/${hike.id}`">
              <img :src="hike.imageUrl || 'https://via.placeholder.com/400x250/cccccc/969696?text=Hike+Image'" :alt="hike.title" class="hike-image">
              <div class="hike-card-content">
                <h3>{{ hike.title }}</h3>
                <p class="hike-meta">{{ hike.difficulty }} | {{ hike.duration }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="text-center mt-30">
          <NuxtLink to="/hikes" class="button">Смотреть все походы</NuxtLink>
        </div>
      </div>
    </section>

    <section class="how-it-works-section section-padding">
      <div class="container">
        <h2 class="section-title">Начать просто!</h2>
        <div class="steps-grid">
          <div class="step-item">
            <div class="step-number">1</div>
            <img src="/images/icons/step-search.svg" alt="Поиск" class="step-icon">
            <h3>Найдите или создайте</h3>
            <p>Выберите готовый маршрут из каталога или спланируйте свой уникальный поход.</p>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <img src="/images/icons/step-prepare.svg" alt="Подготовка" class="step-icon">
            <h3>Подготовьтесь</h3>
            <p>Воспользуйтесь чек-листами снаряжения, соберите команду и обсудите детали.</p>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <img src="/images/icons/step-adventure.svg" alt="Приключение" class="step-icon">
            <h3>Отправляйтесь!</h3>
            <p>Наслаждайтесь приключением, делитесь впечатлениями и отслеживайте свой прогресс.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="testimonials-section section-padding bg-light">
      <div class="container">
        <h2 class="section-title">Что говорят наши пользователи</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <p>"С ТурПланнер организация семейного выезда на природу стала в разы проще! Все под рукой."</p>
            <div class="author">- Анна К.</div>
          </div>
          <div class="testimonial-card">
            <p>"Наконец-то нашел удобное приложение для поиска попутчиков на сложные категорийные походы. Рекомендую!"</p>
            <div class="author">- Сергей В.</div>
          </div>
          <div class="testimonial-card">
            <p>"Как новичок, я оценила готовые чек-листы и возможность задать вопрос опытным туристам в сообществе."</p>
            <div class="author">- Елена П.</div>
          </div>
        </div>
      </div>
    </section>

    <section class="final-cta-section section-padding">
      <div class="container text-center">
        <h2>Готовы к своему следующему приключению?</h2>
        <p>Присоединяйтесь к тысячам туристов, которые уже открыли для себя удобство "ТурПланнер".</p>
        <NuxtLink to="/hikes" class="button button-large primary">Начать планирование!</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { hikesData } from '~/data/hikes.js'; 

useHead({
  title: 'ТурПланнер - Планируйте походы легко!',
  meta: [
    { name: 'description', content: 'ТурПланнер - ваше универсальное приложение для планирования походов, поиска маршрутов и попутчиков. Начните свое приключение с нами!' }
  ]
});

const popularHikes = computed(() => hikesData.slice(0, 3));

</script>

<style scoped>

.hero-main {
  position: relative;
  height: 70vh; 
  min-height: 450px;
  background-image: url('/images/hero-main-bg.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}
.hero-content h1 {
  font-size: 3.2em;
  margin-bottom: 0.5em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
.hero-content .subtitle {
  font-size: 1.4em;
  margin-bottom: 1.5em;
  line-height: 1.6;
  color: #f0f0f0;
}
.hero-buttons .button {
  margin: 0 10px;
  padding: 12px 25px;
  font-size: 1.1em;
}
.button.hero-button.primary {
  background-color: #1abc9c;
  border: 2px solid #1abc9c;
}
.button.hero-button.primary:hover {
  background-color: #16a085;
  border-color: #16a085;
}
.button.hero-button.secondary {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}
.button.hero-button.secondary:hover {
  background-color: #fff;
  color: #2c3e50;
}

.section-padding {
  padding: 60px 0;
}
.section-title {
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 40px;
  color: #2c3e50;
  position: relative;
}
.section-title::after { 
  content: '';
  display: block;
  width: 70px;
  height: 3px;
  background-color: #1abc9c;
  margin: 10px auto 0;
}
.bg-light {
  background-color: #f8f9fa; 
}
.text-center {
  text-align: center;
}
.mt-30 {
  margin-top: 30px;
}

.features-grid-home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.feature-item-home {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-item-home:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.feature-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  color: #1abc9c; 
}
.feature-item-home h3 {
  font-size: 1.4em;
  color: #34495e;
  margin-bottom: 10px;
}

.hikes-grid-home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}
.hike-card-home {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hike-card-home:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}
.hike-card-home a {
  text-decoration: none;
  color: inherit;
}
.hike-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.hike-card-content {
  padding: 15px;
}
.hike-card-content h3 {
  font-size: 1.3em;
  margin: 0 0 8px 0;
  color: #2c3e50;
}
.hike-meta {
  font-size: 0.9em;
  color: #777;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  text-align: center;
}
.step-item {
  padding: 25px;
  position: relative;
}
.step-number {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1abc9c;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 1;
}
.step-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 30px; 
}
.step-item h3 {
  font-size: 1.5em;
  color: #34495e;
  margin-bottom: 10px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}
.testimonial-card {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  border-left: 5px solid #1abc9c; 
}
.testimonial-card p {
  font-style: italic;
  margin-bottom: 15px;
  color: #555;
  line-height: 1.6;
}
.testimonial-card .author {
  font-weight: bold;
  color: #2c3e50;
  text-align: right;
}

.final-cta-section h2 {
  font-size: 2em;
  margin-bottom: 15px;
}
.final-cta-section p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.button.button-large {
  padding: 15px 35px;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .hero-main {
    height: auto; 
    padding: 80px 0;
  }
  .hero-content h1 {
    font-size: 2.5em;
  }
  .hero-content .subtitle {
    font-size: 1.2em;
  }
  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .hero-buttons .button {
    width: 80%;
    margin: 0 auto;
  }
  .section-title {
    font-size: 1.8em;
  }
  .features-grid-home, .hikes-grid-home, .steps-grid, .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>