<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/todo">TodoList</router-link>
        <router-link to="/profil">Profil</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
