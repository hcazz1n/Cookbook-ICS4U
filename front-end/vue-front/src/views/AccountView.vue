<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="columns">
      <div class="column is-3">
        <div class="container" id="account-profile-container">
          <h1>Account</h1>
    <h1>HELLLLOOOO</h1>
        </div>
      </div>
    </div>
    
    <button @click="fetchRecipes();fetchUsers()">Fetch Data</button>
    <ul>
      <li v-for="item in recipes" :key="item.id">{{ item.name }}</li>
      <li v-for="item in user" :key="item.id">{{ item.name }}</li>
    </ul> 
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() { /*unimportant*/
    return {
      recipes: [],
      user: []
    };
  },
  methods: {
    fetchRecipes() {
      axios
        .get('http://localhost:3000/api/recipes')
        .then(response => {
          this.recipes = response.data;
          console.log(this.recipes)
        })
        .catch(error => {
          console.log(error);
        })
    },
    fetchUsers(){
      var user_id = localStorage.getItem('user_id');
      axios
      .get(`http://localhost:3000/api/users/${user_id}`)
        .then(response=>{
          this.user=response.data
          console.log(this.user.userName);
          console.log(this.user.bio)
        })
        .catch(error=>{
          console.log(error);
        })
    }
  },
};
</script>

