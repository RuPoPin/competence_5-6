<template>
  <div class="container">
    <h1 class="page-title">Чек-лист снаряжения</h1>
    <p class="intro-text">Убедитесь, что вы ничего не забыли перед вашим следующим приключением!</p>

    <div class="controls">
      <input type="text" v-model="newItemName" @keyup.enter="addItem" placeholder="Добавить новый предмет...">
      <select v-model="newItemCategory">
        <option value="Снаряжение">Снаряжение</option>
        <option value="Одежда и обувь">Одежда и обувь</option>
        <option value="Кухня">Кухня</option>
        <option value="Навигация">Навигация</option>
        <option value="Разное">Разное</option>
      </select>
      <button @click="addItem" class="button add-button">Добавить</button>
    </div>

    <div v-if="groupedGear.length === 0" class="empty-state">
        Ваш список пока пуст. Начните добавлять предметы!
    </div>

    <div v-for="group in groupedGear" :key="group.category" class="category-group">
      <h2>{{ group.category }} ({{ checkedCount(group.items) }}/{{ group.items.length }})</h2>
      <ul class="gear-list">
        <li v-for="item in group.items" :key="item.id" :class="{ checked: item.checked }" class="gear-item">
          <label>
            <input type="checkbox" v-model="item.checked" @change="saveGearList">
            <span class="item-name">{{ item.name }}</span>
          </label>
          <button @click="removeItem(item.id)" class="remove-button">×</button>
        </li>
      </ul>
    </div>
    <div v-if="items.length > 0" class="progress-section">
      <h3>Общий прогресс: {{ totalChecked }}/{{ items.length }}</h3>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
      </div>
       <button @click="clearAllChecks" class="button clear-button">Сбросить все отметки</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { gearList as initialGearList } from '~/data/gear.js';

useHead({
  title: 'Чек-лист снаряжения - ТурПланнер',
  meta: [
    { name: 'description', content: 'Интерактивный чек-лист для подготовки к походу.' }
  ]
})

const items = ref([]);
const newItemName = ref('');
const newItemCategory = ref('Снаряжение'); 

onMounted(() => {
  const storedGear = localStorage.getItem('tourPlannerGearList');
  if (storedGear) {
    items.value = JSON.parse(storedGear);
  } else {
    items.value = JSON.parse(JSON.stringify(initialGearList)); 
  }
});

const saveGearList = () => {
  localStorage.setItem('tourPlannerGearList', JSON.stringify(items.value));
};

const addItem = () => {
  if (newItemName.value.trim() === '') return;
  const newItem = {
    id: Date.now(), 
    name: newItemName.value.trim(),
    category: newItemCategory.value,
    checked: false
  };
  items.value.push(newItem);
  newItemName.value = '';
  saveGearList();
};

const removeItem = (itemId) => {
  items.value = items.value.filter(item => item.id !== itemId);
  saveGearList();
};

const groupedGear = computed(() => {
  const groups = {};
  items.value.forEach(item => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
  });
  return Object.entries(groups)
    .map(([category, items]) => ({ category, items }))
    .sort((a,b) => a.category.localeCompare(b.category));
});

const checkedCount = (categoryItems) => {
  return categoryItems.filter(item => item.checked).length;
};

const totalChecked = computed(() => {
    return items.value.filter(item => item.checked).length;
});

const progressPercentage = computed(() => {
    if (items.value.length === 0) return 0;
    return (totalChecked.value / items.value.length) * 100;
});

const clearAllChecks = () => {
    items.value.forEach(item => item.checked = false);
    saveGearList();
}

</script>

<style scoped>
.intro-text {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #555;
}
.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
}
.controls input[type="text"], .controls select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
}
.controls input[type="text"] {
  flex-grow: 1;
}
.controls select {
  min-width: 150px;
}
.add-button {
  padding: 10px 20px;
}

.category-group {
  margin-bottom: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.category-group h2 {
  margin-top: 0;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 1.5em;
}
.gear-list {
  list-style: none;
  padding: 0;
}
.gear-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.gear-item:last-child {
  border-bottom: none;
}
.gear-item label {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
}
.gear-item input[type="checkbox"] {
  margin-right: 12px;
  width: 18px;
  height: 18px;
  accent-color: #1abc9c; 
}
.gear-item .item-name {
  font-size: 1.1em;
}
.gear-item.checked .item-name {
  text-decoration: line-through;
  color: #aaa;
}
.remove-button {
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 1.5em;
  cursor: pointer;
  padding: 0 5px;
  line-height: 1;
}
.remove-button:hover {
  color: #c0392b;
}
.empty-state {
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  color: #777;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
}
.progress-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}
.progress-section h3 {
  margin-top: 0;
  margin-bottom: 10px;
}
.progress-bar-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  height: 20px;
  margin-bottom: 15px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background-color: #1abc9c;
  border-radius: 4px;
  transition: width 0.3s ease;
}
.clear-button {
    background-color: #e74c3c;
}
.clear-button:hover {
    background-color: #c0392b;
}
</style>