<template>
    <div>
      <h1>ToDo List</h1>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Добавить новую задачу" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" v-model="todo.completed" />
          {{ todo.text }}
          <button @click="removeTodo(index)">Удалить</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
        todos: [],
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = '';
        }
      },
      removeTodo(index) {
        this.todos.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Добавьте стили по желанию */
  </style>