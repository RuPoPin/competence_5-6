<template>
  <footer>
    <div class="container">
      <p>© {{ new Date().getFullYear() }} ТурПланнер. Все права защищены.</p>
      <p>Создано с ❤️ для любителей приключений!</p>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background-color: #34495e; 
  color: #ecf0f1;
  text-align: center;
  padding: 1.5rem 0; 
}
footer .container p { 
  margin: 8px 0; 
  font-size: 0.9em; 
}
</style>