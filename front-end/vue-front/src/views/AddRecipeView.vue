<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">Add a Recipe Here:</p>
        </div>
    </div>
    <div class="card-content">
        <form action="/recipe" method="POST">
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label for="name" class="label">Recipe Name</label>
                    <input id="name" name="name" class="input" type="text">
                </div>
            </div>
            
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label for="author" class="label">Author</label>
                    <input id="author" name="author" class="input" type="text">
                </div>
            </div>
            
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label for="ingredients" class="label">Ingredients</label>
                    <input id="ingredients" name="ingredients" class="input" type="text">
                </div>
            </div>
            
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label for="keywords" class="label">Keywords</label>
                    <input id="keywords" name="keywords" class="input" type="text">
                </div>
            </div>
            
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <label for="Images" class="label">Images</label>
                    <input id="images" name="images" class="input" type="text">
                </div>
            </div>
            
            <div class="field">
                <label for="isDessert">Indicate if your recipe is a dessert:</label>
                <select name="isDessert" id="isDessert">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            
            <button type="submit">Upload</button>
        </form>
    </div>
</template>

<script src="/back-end/server/index.js" type="text/javascript"></script>