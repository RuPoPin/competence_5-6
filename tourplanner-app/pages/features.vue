<template>
  <div class="container">
    <h1 class="page-title">Возможности "ТурПланнер"</h1>
    <p class="subtitle">Все, что нужно для идеального похода, в одном месте!</p>
    <div class="features-grid">
      <FeatureCard
        title="Планирование маршрутов"
        description="Создавайте и редактируйте маршруты на интерактивной карте, добавляйте точки интереса, отслеживайте перепады высот."
        icon="/images/icons/simplicity-icon.svg" />
      <FeatureCard
        title="Умные чек-листы"
        description="Не забудьте ничего важного! Используйте готовые или создавайте свои списки снаряжения и продуктов."
        icon="/images/icons/checklist-icon.svg" />
      <FeatureCard
        title="Поиск попутчиков"
        description="Находите единомышленников для совместных походов, присоединяйтесь к существующим группам или создавайте свои."
        icon="/images/icons/community-icon.svg" />
      <FeatureCard
        title="Оффлайн-карты"
        description="Скачивайте карты для использования без доступа к интернету. Ваша навигация всегда под рукой."
        icon="/images/icons/map-planning.svg" />
      <FeatureCard
        title="Трекер активности"
        description="Записывайте свои маршруты, делитесь достижениями и анализируйте статистику походов."
        icon="/images/icons/treker-icon.svg" />
      <FeatureCard
        title="База знаний"
        description="Статьи, советы и руководства от опытных туристов для подготовки к походам любой сложности."
        icon="/images/icons/brain-icon.svg" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Возможности - ТурПланнер',
  meta: [
    { name: 'description', content: 'Ознакомьтесь с ключевыми функциями приложения ТурПланнер для планирования походов.' }
  ]
})
</script>

<style scoped>
.subtitle {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #555;
}
</style>