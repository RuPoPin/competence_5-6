<template>
  <div class="container">
    <h1 class="page-title">Блог: Советы и истории</h1>
    <p class="intro-text">Читайте полезные статьи о подготовке к походам, выборе снаряжения и вдохновляющие истории от путешественников.</p>

    <div class="search-filter-bar">
        <input type="text" v-model="searchTerm" placeholder="Поиск по заголовкам и тегам..." class="search-input">
    </div>

    <div v-if="filteredPosts.length === 0 && posts.length > 0" class="no-results">
        По вашему запросу ничего не найдено.
    </div>
    <div v-else-if="filteredPosts.length === 0 && posts.length === 0" class="no-results">
        Статей пока нет. Загляните позже!
    </div>

    <div class="blog-grid">
      <div v-for="post in filteredPosts" :key="post.slug" class="blog-post-card">
        <NuxtLink :to="`/blog/${post.slug}`" class="card-link">
          <img v-if="post.imageUrl" :src="post.imageUrl" :alt="post.title" class="post-image">
          <div class="card-content">
            <h2>{{ post.title }}</h2>
            <p class="post-meta">Автор: {{ post.author }} | Дата: {{ formatDate(post.date) }}</p>
            <p class="post-summary">{{ post.summary }}</p>
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts.js';

useHead({
  title: 'Блог - ТурПланнер',
  meta: [
    { name: 'description', content: 'Статьи, советы и истории о походах от ТурПланнер.' }
  ]
});

const posts = ref(blogPosts); 
const searchTerm = ref('');

const filteredPosts = computed(() => {
  if (!searchTerm.value.trim()) {
    return posts.value;
  }
  const lowerSearchTerm = searchTerm.value.toLowerCase();
  return posts.value.filter(post =>
    post.title.toLowerCase().includes(lowerSearchTerm) ||
    post.summary.toLowerCase().includes(lowerSearchTerm) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
  );
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ru-RU', options);
};
</script>

<style scoped>
.intro-text {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #555;
}
.search-filter-bar {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
}
.search-input {
    width: 100%;
    max-width: 500px;
    padding: 12px 15px;
    font-size: 1em;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.no-results {
    text-align: center;
    font-size: 1.2em;
    color: #777;
    padding: 20px;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
}
.blog-post-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.07);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex; 
  flex-direction: column;
}
.blog-post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}
.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%; 
}
.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 20px;
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
}
.card-content h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #2c3e50;
}
.post-meta {
  font-size: 0.85em;
  color: #777;
  margin-bottom: 15px;
}
.post-summary {
  font-size: 1em;
  line-height: 1.5;
  color: #555;
  flex-grow: 1;
  margin-bottom: 15px;
}
.tags {
  margin-top: auto; 
}
.tag {
  display: inline-block;
  background-color: #eaf6f6;
  color: #1abc9c;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>