<template>
    <section class="recipe-container hero is-fullheight-with-navbar has-background-lighter">
        <div class="profile-container">
            <div class="c-recipe"></div>
            <h2 class="recipe-username">Username</h2>
            <h3 class="recipe-pronouns">He/Him</h3>
        </div>
        <div class="rating-container">
            <h1 class="recipe-rating-header">Recipe Rating</h1>
            <div class="heart-container">
                <img class="heart-img" src="../../public/heart.png">
                <img class="heart-img" src="../../public/heart.png">
                <img class="heart-img" src="../../public/heart.png">
                <img class="heart-img" src="../../public/heart.png">
                <img class="heart-img" src="../../public/heart.png">
            </div>
        </div>
        
        <div class="recipe-buttons">
            <div class="button recipe-button"><span class="icon"><i class="fa-solid fa-arrow-left"></i></span></div>
            <div class="button recipe-button"><span class="icon"><i class="fa-solid fa-arrow-right"></i></span></div>
            <div class="button recipe-button skip-button"><span class="icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></span></div>
        </div>
        
        <div class="field search">
            <div class="control has-icons-right">
                <input class="input" type="text" placeholder="Search">
                <span class="icon is-small is-right">
                    <i class="fa-solid fa-magnifying-glass search-mag-glass"></i>
                </span>
            </div>
        </div>
        
        <div class="recipe-box box">
            <img class="recipe-img" src="macaroncoffeescaled.jpg">
            <div class="recipe-title is-size-1">[Recipe Name]</div>
                <!-- <div class="recipe-title is-size-4">
                    [Recipe Name] if its longer than X characters, do some kind of scrolling thing or something; also need to access a data file
                </div>
                <div class="ingredients is-size-6">
                    <div class="ingredient">[Ingredient A]</div>
                    <div class="ingredient">[Ingredient B]</div>
                    <div class="ingredient">[Ingredient C]</div>
                    <div class="ingredient">[Ingredient D]</div>
                    <div class="ingredient">[Ingredient E]</div>
                </div> 
                <img class="recipe-img" src="macaroncoffeescaled.jpg">-->
        </div>
    </section>
</template>

<script setup>
    window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
    })
</script>