<template>
  <button id="logout" class="login-register-button logout" @click="logout()">
    Logout
  </button>
  <section
    class="hero is-fullheight-with-navbar has-text-centered"
    id="account-profile-hero"
  >
    <div class="columns" id="account-columns">
      <div class="column is-3 is-offset-1" id="profile-column">
        <div class="container" id="account-profile-container">
          <div class="profile-circle"></div>
          <h1 class="username">{{ this.user.userName }}</h1>
          <h2 class="biography">Biography</h2>
          <p class="biography-content">{{ this.user.bio }}</p>
        </div>
      </div>
      <div class="column is-8" id="favourite-recipes">
        <div class="container" id="account-favourite-recipe">
          <h1 class="title">Favourites</h1>
          <ul>
            <li v-for="recipe in objectFavouritedRecipes" :key="recipe.name">
              Recipe: {{ recipe.name }}
            </li>
          </ul>
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
  </section>
</template>

<script>
import axios from 'axios'

window.addEventListener('load', function () {
  window.scrollBy(0, -2000)
})

export default {
  data() {
    return {
      recipes: [],
      filteredRecipes: [],
      favouritedRecipes: [],
      objectFavouritedRecipes: [],
      user: [],
    }
  },
  methods: {
    fetchRecipes() {
      var userName = sessionStorage.getItem('userName')
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
      var user_id = sessionStorage.getItem('user_id')
      axios
        .get(`http://localhost:3000/api/users/${user_id}`)
        .then((response) => {
          this.user = response.data
          console.log(this.user.userName)
          console.log(this.user.bio)
          for (let i = 0; i < this.user.favouriteRecipes.length; i++) {
            if (
              this.favouritedRecipes.includes(this.user.favouriteRecipes[i])
            ) {
              console.log('has already')
            } else {
              this.favouritedRecipes = [
                ...this.favouritedRecipes,
                this.user.favouriteRecipes[i],
              ]
            }
          }
          console.log(this.favouritedRecipes)
          for (let i = 0; i < this.favouritedRecipes.length; i++) {
            let recipeId = this.favouritedRecipes[i]
            axios
              .get(`http://localhost:3000/api/recipes/${recipeId}`)
              .then((response) => {
                console.log(response.data)
                if(response.data == null){
                  console.log("hello")
                }else{
                this.objectFavouritedRecipes = [
                  ...this.objectFavouritedRecipes,
                  response.data,
                ]
                }
              })
          }
          console.log(this.objectFavouritedRecipes)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    logout() {
      axios
        .get('http://localhost:3000/logout')
        .then((response) => {
          console.log(response)
          sessionStorage.setItem('user_id', '')
          sessionStorage.setItem('userDescription', '')
          sessionStorage.setItem('userName', '')
          sessionStorage.setItem('loggedIn', false)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  beforeMount() {
    this.fetchRecipes()
    this.fetchUsers()
  },
}
</script>
