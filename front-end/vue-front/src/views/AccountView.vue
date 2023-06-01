<template>
  <section class="hero is-fullheight-with-navbar has-text-centered" id="account-profile-hero">
    <button class="login-register-button logout">Logout</button>
    <div class="columns" id="account-columns">
      <div class="column is-3 is-offset-1" id="profile-column">
        <div class="container" id="account-profile-container">
          <div class="profile-circle"></div>
          <h1 class="username">{{ this.user.userName }}</h1>
          <h2 class="biography"> Biography</h2>
          <p class="biography-content"> {{this.user.bio}}</p>
        </div>
      </div>
      <div class="column is-8" id="favourite-recipes">
        <div class="container" id="account-favourite-recipe">
          <h1 class="title"> Favourites </h1>
        </div>
        <!-- <router-link to="recipes">
            <div class="screen1-profile">
                <div class="screen1-image-profile" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=962&q=80"></div>
                <div class="screen-overlay-profile"></div>
                <div class="screen-content-profile">Favourites</div>
            </div>
        </router-link> -->
      </div>
    </div>


    <ul>
      <li v-for="item in recipes" :key="item.id">{{ item.name }}</li>
      <li v-for="item in user" :key="item.id">{{ item.name }}</li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'

window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
})

export default {
  data() {
    /*unimportant*/
    return {
      recipes: [],
      filteredRecipes: [],
      user: [],
    }
  },
  methods: {
    fetchRecipes() {
      var userName = localStorage.getItem('userName')
      axios
        .get('http://localhost:3000/api/recipes')
        .then((response) => {
          this.recipes = response.data
          console.log(this.recipes)
          for (let i = 0; i < this.recipes.length; i++) {
            if (this.recipes[i].author === userName) {
              this.filteredRecipes = [...this.filteredRecipes, this.recipes[i]]
            }
          }
          console.log(this.filteredRecipes)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchUsers() {
      var user_id = localStorage.getItem('user_id')
      axios
        .get(`http://localhost:3000/api/users/${user_id}`)
        .then((response) => {
          this.user = response.data
          console.log(this.user.userName)
          console.log(this.user.bio)
          console.log(this.user.favouriteRecipes)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  beforeMount(){
    this.fetchRecipes()
    this.fetchUsers()
  }
}
</script>