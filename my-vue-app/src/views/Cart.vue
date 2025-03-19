<template>
    <div>
      <h1>Корзина</h1>
      <div v-for="item in cartItems" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }} руб.</p>
        <button @click="removeFromCart(item.id)">Удалить из корзины</button>
      </div>
      <p>Итого: {{ cartTotal }} руб.</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'cartTotal'])
    },
    methods: {
      ...mapActions(['removeFromCart'])
    }
  };
  </script>