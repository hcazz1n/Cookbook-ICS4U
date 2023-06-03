<template>
    <div class="container">
        <div class="card add-recipe-panel">
            <div class="card-header">
                <p class="card-header-title">Add a Recipe Here:</p>
            </div>
            <div id="add-recipe-card" class="card-content">
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="name" class="label">Recipe Name</label>
                            <input v-model = "name" id="name" name="name" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="author" class="label">Author</label>
                            <input v-model = "author" id="author" name="author" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="ingredients" class="label">Ingredients</label>
                            <input v-model = "ingredients" id="ingredients" name="ingredients" class="input input-border" type="text" @keyup="canSubmit()" placeholder="Separate your ingredients with a comma followed by a space (', ')">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <div class="control has-icons-right">
                            <label for="Images" class="label">Image</label>
                            <input v-model = "images" id="images" name="images" class="input input-border" type="text" @keyup="canSubmit()">
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <label for="isDessert" class="label">Indicate if your recipe is a dessert:</label>
                        <div class="select dessert-select">
                            <select v-model = "isDessert" name="isDessert" id="isDessert">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="field add-recipe-field">
                        <label for="instructions" class="label">Instructions</label>
                        <textarea v-model = "instructions" id="instructions" name="instructions" class="textarea input-border" @keyup="canSubmit()" placeholder="Enter each step on a new line from the previous (Hit 'Enter')." rows="10"></textarea>
                    </div>
                    
                    <div class="column is-5 is-offset-8">
                        <div id="clear-submit" class="field is-grouped">
                            <div class="control">
                                <button type="button" id="clear-button" class="button" @click="clear1();">Clear</button> 
                                <button type="submit" id="submit-button" class="button is-pulled-right" disabled @click = "uploadRecipe()">Upload Recipe</button>
                            </div>
                        </div>
                    </div>
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
            name: '',
            author: '',
            ingredients: '',
            images: '',
            isDessert: '',
            instructions: '',
        }
      },
      methods: {
        uploadRecipe(){
            console.log(this.name);
            console.log(this.author);
            console.log(this.ingredients);
            console.log(this.images);
            console.log(this.isDessert);
            console.log(this.instructions);
            axios
            .post("http://localhost:3000/addrecipe", {
                "name": this.name,
                "author": this.author,
                "ingredients": this.ingredients,
                "images": this.images,
                "isDessert": this.isDessert,
                "instructions": this.instructions
            })
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        },  
        clear1(){  
            let name = document.getElementById('name')
            let author = document.getElementById('author')
            let ingredients = document.getElementById('ingredients')
            let instructions = document.getElementById('instructions')
            let image = document.getElementById('images')
        
            name.value = ''
            author.value = ''
            ingredients.value = ''
            instructions.value = ''
            image.value = ''
        },
        canSubmit(){
            let name = document.getElementById('name')
            let author = document.getElementById('author')
            let ingredients = document.getElementById('ingredients')
            let instructions = document.getElementById('instructions')
            let image = document.getElementById('images')
        
            if(name.value != '' && author.value != '' && ingredients.value != '' && instructions.value != '' && image.value != '')
                document.getElementById('submit-button').disabled = false
            else
                document.getElementById('submit-button').disabled = true
        }
      }
    }
</script>