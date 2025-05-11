<template>
  <div class="container">
    <div v-if="pending" class="loading-state">Загрузка информации о походе...</div>
    <div v-else-if="error" class="error-state">Ошибка загрузки: {{ error.message }}</div>
    <div v-else-if="hike">
      <NuxtLink to="/hikes" class="back-link">← К списку походов</NuxtLink>
      <h1 class="page-title">{{ hike.title }}</h1>
      <img :src="hike.imageUrl" :alt="hike.title" class="hike-main-image">

      <div class="hike-details-grid">
        <div class="hike-info">
          <h2>Описание маршрута</h2>
          <p>{{ hike.description }}</p>

          <h2>Ключевые особенности</h2>
          <ul>
            <li v-for="feature in hike.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>

        <aside class="hike-summary">
          <h3>Краткая информация</h3>
          <p><strong>Продолжительность:</strong> {{ hike.duration }}</p>
          <p><strong>Сложность:</strong> {{ hike.difficulty }}</p>
          <button @click="joinHike" class="button join-button">Присоединиться к походу</button>
        </aside>
      </div>

      <div v-if="hike.gallery && hike.gallery.length > 0" class="hike-gallery">
        <h2>Фотогалерея</h2>
        <div class="gallery-grid">
            <img v-for="(photo, index) in hike.gallery" :key="index" :src="photo" :alt="`${hike.title} фото ${index + 1}`" @click="openModal(photo)">
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <h1 class="page-title">Поход не найден</h1>
      <p>К сожалению, мы не смогли найти информацию по запрашиваемому походу.</p>
      <NuxtLink to="/hikes" class="button">Вернуться к списку походов</NuxtLink>
    </div>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-button" @click="closeModal">×</span>
        <img :src="currentModalImage" alt="Увеличенное изображение">
      </div>
    </div>
  </div>
</template>

<script setup>
import { hikesData } from '~/data/hikes.js';

const route = useRoute();
const hikeId = route.params.id;

const { data: hike, pending, error } = await useAsyncData(`hike-${hikeId}`, () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundHike = hikesData.find(h => h.id === hikeId);
      if (foundHike) {
        resolve(foundHike);
      } else {

        reject(createError({ statusCode: 404, statusMessage: 'Hike Not Found', fatal: true }));
      }
    }, 300);
  });
});

if (hike.value) {
  useHead({
    title: `${hike.value.title} - ТурПланнер`,
    meta: [
      { name: 'description', content: hike.value.shortDescription }
    ]
  });
}

const joinHike = () => {
  alert(`Вы успешно подали заявку на участие в походе "${hike.value.title}"! (Это демонстрация)`);

};

const showModal = ref(false);
const currentModalImage = ref('');

const openModal = (imageUrl) => {
  currentModalImage.value = imageUrl;
  showModal.value = true;
  document.body.style.overflow = 'hidden'; 
};

const closeModal = () => {
  showModal.value = false;
  currentModalImage.value = '';
  document.body.style.overflow = ''; 
};


onMounted(() => {
  const handleEsc = (event) => {
    if (event.key === 'Escape' && showModal.value) {
      closeModal();
    }
  };
  window.addEventListener('keydown', handleEsc);

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEsc);
    document.body.style.overflow = ''; 
  });
});
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #1abc9c;
  text-decoration: none;
  font-weight: bold;
}
.back-link:hover {
  text-decoration: underline;
}
.hike-main-image {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 30px;
}
.hike-details-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
}
.hike-info h2, .hike-gallery h2 {
  border-bottom: 2px solid #1abc9c;
  padding-bottom: 10px;
  margin-bottom: 15px;
  color: #2c3e50;
}
.hike-info ul {
  list-style: disc;
  padding-left: 20px;
}
.hike-info ul li {
  margin-bottom: 8px;
}
.hike-summary {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  align-self: start; 
}
.hike-summary h3 {
  margin-top: 0;
  color: #2c3e50;
}
.hike-summary p {
  margin-bottom: 10px;
}
.join-button {
  width: 100%;
  padding: 12px;
  font-size: 1.1em;
}
.hike-gallery {
    margin-top: 40px;
}
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}
.gallery-grid img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s ease;
}
.gallery-grid img:hover {
    transform: scale(1.05);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; 
}
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}
.modal-content img {
  display: block;
  max-width: 100%;
  max-height: calc(90vh - 40px); 
  object-fit: contain;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 2em;
  color: #333;
  cursor: pointer;
  line-height: 1;
}
.close-button:hover {
  color: #e74c3c;
}

.not-found {
  text-align: center;
  padding: 40px 0;
}
.not-found .button {
  margin-top: 20px;
}
.loading-state, .error-state {
  text-align: center;
  padding: 40px;
  font-size: 1.2em;
  color: #777;
}
.error-state {
  color: #e74c3c;
}

@media (max-width: 768px) {
  .hike-details-grid {
    grid-template-columns: 1fr; 
  }
  .hike-summary {
    margin-top: 20px;
  }
}
</style>