<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <div class="img">
      <img src="../../public/Img/cat.png" >
    </div>
    <p>Мы рады видеть вас на нашем сайте.</p>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
  data() {
    return {
      message: 'Привет, мир!'
    };
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}

p {
  font-size: 1.2em;
  color: #333;
}
</style>