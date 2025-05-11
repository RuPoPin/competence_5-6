<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Добро пожаловать в ТурПланнер!</h1>
      <p>Планируйте походы, находите маршруты и попутчиков легко и удобно. Ваше следующее приключение начинается здесь!</p>
      <NuxtLink to="/features" class="button">Узнать больше</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: #3498db; 
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 80px 20px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  max-width: 700px;
}
.hero h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: white;
}
.hero p {
  font-size: 1.2em;
  margin-bottom: 30px;
}
.button {
  background-color: #1abc9c; 
  color: white;
  padding: 12px 25px;
  font-size: 1.1em;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}
.button:hover {
  background-color: #16a085;
}
</style>