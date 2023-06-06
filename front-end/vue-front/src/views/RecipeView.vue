<template>
  <section
    v-if="recipe"
    class="recipe-container hero is-fullheight-with-navbar has-background-lighter"
  >
    <div class="profile-container">
      <div class="c-recipe"></div>
      <h2 class="recipe-username" :key="recipe.id">{{ recipe.author }}</h2>
    </div>

    <div class="recipe-buttons">
      <div @click="decreasePage" class="button recipe-button">
        <span class="icon"><i class="fa-solid fa-arrow-left"></i></span>
      </div>
      <div @click="increasePage" class="button recipe-button">
        <span class="icon"><i class="fa-solid fa-arrow-right"></i></span>
      </div>
      <div @click="saveRecipe" class="button recipe-button">
        <span class="icon"><i class="fa-solid fa-bookmark"></i></span>
      </div>
      <div @click="deleteRecipe()" class="button recipe-button delete-button">
        <span class="icon"><i class="fa-solid fa-x"></i></span>
      </div>
      <div @click="deleteRecipe" class="button recipe-button">
        <span class="icon"><i class="fa-solid fa-bookmark"></i></span>
      </div>
      <div @click="nextRecipe" class="button recipe-button skip-button">
        <span class="icon"
          ><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
      </div>
    </div>

    <div class="field search">
      <div class="control has-icons-right searchsearch">
        <input class="input searchbar" type="text" placeholder="Search" v-model="search"/>
        <div @click="searchRecipe()" class = "button searchbutton">
          <span class="icon is-small is-right">
              <i class="fa-solid fa-magnifying-glass search-mag-glass"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="recipe-box box">
      <div class="title-page-recipe-view" v-if="page == 0">
        <img v-if="recipe" class="recipe-img animate__animated animate__fadeIn" :src="`${this.recipe.images}`">
        <div v-if="recipe" class="recipe-title is-size-1 has-text-black animate__animated animate__fadeIn" :key="recipe.id">{{ recipe.name }}</div>
      </div>
      <div class="ingredient-instruction-title-recipe-view" v-else-if="page == 1">
        <div class="ingredient-instruction-title is-size-1 has-text-black animate__animated animate__fadeIn">Ingredients</div>
        <ul v-if="recipe" class="ingredient-instruction-list">
            <li class="animate__animated animate__fadeIn is-size-6" v-for="ingredient in recipe.ingredients" :key="ingredient.id">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="ingredient-instruction-title-recipe-view" v-else-if="page == 2">
        <div class="ingredient-instruction-title is-size-1 has-text-black animate__animated animate__fadeIn">Instructions</div>
          <ul v-if="recipe" class="ingredient-instruction-list">
              <li class="animate__animated animate__fadeIn is-size-6" v-for="instruction in recipe.instructions" :key="instruction.id">{{ instruction }}</li>
          </ul>
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
      data: [],
      page: 0,
      search: '',
      recipes: []
    }
  },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    recipe() {
      return this.data.find((recipe) => recipe.id === this.id)
    },
  },
  methods: {
    searchRecipe() {
      axios
        .post('http://localhost:3000/search', {
          search: this.search,
        })
        .then((response) => {
          this.recipes = response.data
          console.log(this.recipes)
          while(this.recipe.name != this.recipes[0].name){
            this.recipe.id++
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    decreasePage() {
      if (this.page != 0) {
        this.page--
      }
    },
    increasePage() {
      if (this.page != 2) {
        this.page++
      }
    },
    deleteRecipe(){
      var recipeId = this.recipe._id;
      console.log(recipeId)
      axios
      .delete(`http://localhost:3000/api/recipes/${recipeId}`)
      .then((response)=>{
        console.log(response)
        location.reload();
      })
    },
    saveRecipe() {
      var user_id = sessionStorage.getItem('user_id')
      console.log(this.recipe);
      axios
      .put(`http://localhost:3000/api/users/${user_id}`, {
        favouriteRecipe: this.recipe
      })
      .then((response)=>{
        console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
    },
    nextRecipe() {
      this.recipe.id++
    },
    fetchRecipes() {
      axios
        .get('http://localhost:3000/api/recipes')
        .then((response) => {
          this.data = response.data
          console.log(this.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchUsers(){
      var user_id = sessionStorage.getItem('user_id')
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
    }
  },  
  beforeMount() {
    this.fetchRecipes()
    this.fetchUsers()
  },
}

function hide() {
  let popups = document.querySelectorAll('article')
  setTimeout(() => {
    popups.forEach((popup) => {
      popup.remove()
    })
  }, 1500)
}
function createPopup(message, color) {
  let popupParent = document.querySelector('.recipe-container')
  let article = document.createElement('article')
  article.classList.add('save-popup', 'message', color)
  let content = document.createElement('div')
  content.classList.add('message-body', 'has-text-centered', color)
  content.textContent = message
  article.append(content)
  popupParent.append(article)
  hide()
}
</script>
