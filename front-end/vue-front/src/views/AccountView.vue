<template>
  <div class="container">
    <h1>Account</h1>
    <h1>HELLLLOOOO</h1>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() { /*unimportant*/
    return {
      data: [],
    };
  },
  methods: {
    fetchData() {
      axios
        .get('http://localhost:3000/api/recipes')
        .then(response => {
          this.data = response.data;
          console.log(this.data)
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

