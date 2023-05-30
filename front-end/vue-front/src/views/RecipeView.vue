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
            <!--<TheRecipeTitlePage/>-->
            <!--<TheIngredients/>-->
            <TheInstructions/>
        </div>
    </section>
</template>

<script setup>
    import TheRecipeTitlePage from '../components/TheRecipeTitlePage.vue'
    import TheIngredients from '../components/TheIngredients.vue'
    import TheInstructions from '../components/TheInstructions.vue'
    
    window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
    })
</script>