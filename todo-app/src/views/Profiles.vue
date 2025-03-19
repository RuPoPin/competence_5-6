<template>
  <div>
    <h1>GitHub Profile</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="profile">
        <img :src="profile.avatar_url" alt="Avatar" width="100" />
        <h2>{{ profile.name }}</h2>
        <p>{{ profile.bio }}</p>
        <p>Followers: {{ profile.followers }}</p>
        <p>Following: {{ profile.following }}</p>
        <p>Public Repos: {{ profile.public_repos }}</p>
        <a :href="profile.html_url" target="_blank">View on GitHub</a>
      </div>
      <div v-else>
        <p>Профиль не найден.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profile: null,
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchGitHubProfile('RuPoPin'); 
  },
  methods: {
    async fetchGitHubProfile(username) {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        this.profile = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style>
div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}
img {
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}
h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}
p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}
a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
a:hover {
  background-color: #0056b3;
}
div[v-if="loading"] {
  font-size: 1.2rem;
  color: #666;
}
div[v-if="!profile"] {
  font-size: 1.2rem;
  color: #ff0000;
}
</style>