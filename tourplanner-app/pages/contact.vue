<template>
  <div class="container">
    <h1 class="page-title">Свяжитесь с нами</h1>
    <p class="intro-text">Мы всегда рады обратной связи, вопросам и предложениям. Заполните форму ниже, и мы свяжемся с вами в ближайшее время.</p>

    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Ваше имя:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>

      <div class="form-group">
        <label for="email">Ваш Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>

      <div class="form-group">
        <label for="subject">Тема:</label>
        <input type="text" id="subject" v-model="formData.subject">
      </div>

      <div class="form-group">
        <label for="message">Сообщение:</label>
        <textarea id="message" v-model="formData.message" rows="6" required></textarea>
      </div>

      <button type="submit" class="button">Отправить сообщение</button>
    </form>

    <div v-if="submittedMessage" class="submission-message">
      {{ submittedMessage }}
    </div>

    <div class="contact-info">
      <h2>Другие способы связи:</h2>
      <p><strong>Email:</strong> support@tourplanner.example.com</p>
      <p><strong>Телефон:</strong> +7 (000) 000-00-00 (с 10:00 до 18:00 МСК)</p>
      <p>Мы также в социальных сетях (скоро!).</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

useHead({
  title: 'Контакты - ТурПланнер',
  meta: [
    { name: 'description', content: 'Свяжитесь с командой ТурПланнер для вопросов и предложений.' }
  ]
})

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submittedMessage = ref('');

const handleSubmit = () => {
  console.log('Форма отправлена:', formData);
  submittedMessage.value = `Спасибо, ${formData.name}! Ваше сообщение на тему "${formData.subject}" получено. Мы скоро свяжемся с вами.`;
  formData.name = '';
  formData.email = '';
  formData.subject = '';
  formData.message = '';
};
</script>

<style scoped>
.intro-text {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #555;
}
.contact-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 700px;
  margin: 0 auto 40px auto;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
}
.form-group textarea {
  resize: vertical; 
}
.button {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 1.1em;
}
.submission-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #e6ffed;
  border: 1px solid #b2f5c8;
  color: #2f855a;
  border-radius: 5px;
  text-align: center;
}
.contact-info {
  margin-top: 40px;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}
.contact-info h2 {
  margin-top: 0;
}
</style>