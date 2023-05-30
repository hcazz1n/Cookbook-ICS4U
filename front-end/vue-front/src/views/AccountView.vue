<template>
  <div class="container">
    <h1>Account</h1>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get('http://localhost:3000/api/recipes') // Replace with your actual API endpoint URL
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

