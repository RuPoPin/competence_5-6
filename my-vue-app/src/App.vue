<template>
  <div>
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/cart">Корзина</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
