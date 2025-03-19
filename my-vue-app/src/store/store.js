// src/store/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    }
  },
  getters: {
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((total, item) => total + item.price, 0)
  }
});