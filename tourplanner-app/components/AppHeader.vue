<template>
  <header>
    <div class="container header-content">
      <NuxtLink to="/" class="logo">ТурПланнер</NuxtLink>
      <nav>
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/about">О приложении</NuxtLink>
        <NuxtLink to="/features">Возможности</NuxtLink>
        <NuxtLink to="/hikes">Походы</NuxtLink>
        <NuxtLink to="/gear-checklist">Снаряжение</NuxtLink>
        <NuxtLink to="/blog">Блог</NuxtLink>
        <NuxtLink to="/community">Сообщество</NuxtLink>
        <NuxtLink to="/contact">Контакты</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  position: sticky; 
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 20px; 
}
.logo {
  font-size: 1.8em;
  font-weight: bold;
  color: #1abc9c;
  text-decoration: none;
}
nav {
  display: flex;
  gap: 10px; 
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 1em;
  padding: 8px 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
nav a:hover,
nav a.router-link-exact-active {
  background-color: #1abc9c;
  color: #fff;
}


@media (max-width: 992px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start; 
  }
  .logo {
    margin-bottom: 10px; 
  }
  nav {
    flex-direction: column; 
    width: 100%; 
    gap: 5px; 
  }
  nav a {
    padding: 10px;
    width: calc(100% - 20px);
    box-sizing: border-box;
    text-align: left; 
  }
}
</style>