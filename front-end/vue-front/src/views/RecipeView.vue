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
            <div ref="left" class="button recipe-button"><span class="icon"><i class="fa-solid fa-arrow-left"></i></span></div>
            <div ref="right" class="button recipe-button"><span class="icon"><i class="fa-solid fa-arrow-right"></i></span></div>
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
            <TheRecipeTitlePage v-if="page == 0"/>
            <TheIngredients v-else-if="page == 1"/>
            <TheInstructions v-else-if="page == 2"/>
        </div>
    </section>
</template>

<script setup>
    import TheRecipeTitlePage from '../components/TheRecipeTitlePage.vue'
    import TheIngredients from '../components/TheIngredients.vue'
    import TheInstructions from '../components/TheInstructions.vue'
    import {ref, onMounted} from 'vue'
    
    window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
    })
    
    const left = ref()
    const right = ref()
    let page = ref(0)
    
    function decreasePage(){
            if(page.value != 0){
                page.value--
                console.log(page.value)
            }
        }
        
        function increasePage(){
            if(page.value != 2){
                page.value++
                console.log(page.value)
            }
        }
        
    onMounted(() => {
        left.value.addEventListener('click', decreasePage)
        right.value.addEventListener('click', increasePage)
        console.log(page)
        

    })
</script>