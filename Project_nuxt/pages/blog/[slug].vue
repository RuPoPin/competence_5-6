<template>
  <div class="container">
    <div v-if="post">
      <NuxtLink to="/blog" class="back-link">← К списку статей</NuxtLink>
      <h1 class="page-title article-title">{{ post.title }}</h1>
      <p class="article-meta">
        Автор: {{ post.author }} | Опубликовано: {{ formatDate(post.date) }}
      </p>
      <img v-if="post.imageUrl" :src="post.imageUrl" :alt="post.title" class="article-image">

      <div class="article-content" v-html="post.content"></div>

      <div v-if="post.tags && post.tags.length > 0" class="article-tags">
        <strong>Теги:</strong>
        <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
      </div>
    </div>
    <div v-else class="not-found">
      <h1 class="page-title">Статья не найдена</h1>
      <p>К сожалению, мы не смогли найти запрошенную статью.</p>
      <NuxtLink to="/blog" class="button">Вернуться к блогу</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts.js';

const route = useRoute();
const postSlug = route.params.slug;

const post = computed(() => blogPosts.find(p => p.slug === postSlug));

if (post.value) {
  useHead({
    title: `${post.value.title} - Блог ТурПланнер`,
    meta: [
      { name: 'description', content: post.value.summary }
    ]
  });
} else {

   throw createError({ statusCode: 404, statusMessage: 'Article Not Found', fatal: true });
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('ru-RU', options);
};
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
.article-title {
  margin-bottom: 10px;
}
.article-meta {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 25px;
}
.article-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 30px;
}
.article-content {
  line-height: 1.7;
  font-size: 1.1em;
  margin-bottom: 30px;
}
.article-content ::v-deep(p) {
  margin-bottom: 1.2em;
}
.article-content ::v-deep(h2) {
  font-size: 1.6em;
  margin-top: 1.8em;
  margin-bottom: 0.8em;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
}
.article-content ::v-deep(ul),
.article-content ::v-deep(ol) {
  margin-bottom: 1.2em;
  padding-left: 1.5em;
}
.article-content ::v-deep(li) {
  margin-bottom: 0.5em;
}
.article-tags {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.tag {
  display: inline-block;
  background-color: #eaf6f6;
  color: #1abc9c;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  margin-left: 8px;
  margin-bottom: 5px;
}
.not-found {
  text-align: center;
  padding: 40px 0;
}
.not-found .button {
  margin-top: 20px;
}
</style>