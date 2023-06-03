<template>
    <div class="container">
        <div class="card add-recipe-panel">
            <div class="card-header">
                <p class="card-header-title">Add a Recipe Here:</p>
            </div>
            <div id="add-recipe-card" class="card-content">
                <form action="/recipe" method="POST">
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="name" class="label">Recipe Name</label>
                            <input id="name" name="name" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="author" class="label">Author</label>
                            <input id="author" name="author" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="ingredients" class="label">Ingredients</label>
                            <input id="ingredients" name="ingredients" class="input input-border" type="text" @keyup="canSubmit()" placeholder="Separate your ingredients with a comma followed by a space (', ')">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="keywords" class="label">Keywords</label>
                            <input id="keywords" name="keywords" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="Images" class="label">Image</label>
                            <input id="images" name="images" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <label for="isDessert" class="label">Indicate if your recipe is a dessert:</label>
                        <div class="select dessert-select">
                            <select name="isDessert" id="isDessert">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <label for="instructions" class="label">Instructions</label>
                        <textarea id="instructions" name="instructions" class="textarea input-border" @keyup="canSubmit()" placeholder="Enter each step on a new line from the previous (Hit 'Enter')." rows="10"></textarea>
                    </div>
                    
                    <div class="column is-5 is-offset-8">
                        <div id="clear-submit" class="field is-grouped">
                            <div class="control">
                                <button type="button" id="clear-button" class="button" @click="clear1();">Clear</button> 
                                <button type="submit" id="submit-button" class="button is-pulled-right" disabled>Upload Recipe</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    window.addEventListener('load', function() {
            window.scrollBy(0, -2000) 
    })
    
    export default {
      data() {
        return {
          recipes: [],
          filteredRecipes: [],
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
              console.log(this.user.favouriteRecipes)
            })
            .catch((error) => {
              console.log(error)
            })
        },
        clear1(){  
            let name = document.getElementById('name')
            let author = document.getElementById('author')
            let ingredients = document.getElementById('ingredients')
            let keywords = document.getElementById('keywords')
            let instructions = document.getElementById('instructions')
            let image = document.getElementById('images')
        
            name.value = ''
            author.value = ''
            ingredients.value = ''
            keywords.value = ''
            instructions.value = ''
            image.value = ''
        },
        canSubmit(){
            let name = document.getElementById('name')
            let author = document.getElementById('author')
            let ingredients = document.getElementById('ingredients')
            let keywords = document.getElementById('keywords')
            let instructions = document.getElementById('instructions')
            let image = document.getElementById('images')
        
            if(name.value != '' && author.value != '' && ingredients.value != '' && keywords.value != '' && instructions.value != '' && image.value != '')
                document.getElementById('submit-button').disabled = false
            else
                document.getElementById('submit-button').disabled = true
        }
      }
    }
</script>