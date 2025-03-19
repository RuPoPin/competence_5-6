<template>
    <div>
      <h1 class="name">Продукты</h1>
      <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} руб.</p>
        <button @click="addToCart(product)">Добавить в корзину</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Хлеб', price: 50 },
          { id: 2, name: 'Колбаса', price: 430 },
          { id: 3, name: 'Майонез', price: 170 }
        ]
      };
    },
    methods: {
      addToCart(product) {
        this.$store.dispatch('addToCart', product);
      }
    }
  };
  </script>