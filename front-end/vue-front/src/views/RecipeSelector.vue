<template>
    <section id="recipe-group-selector" class="hero is-fullheight-with-navbar">
        <router-link to="recipes">
            <div class="screen1">
                <div class="screen1-image" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=962&q=80"></div>
                <div class="screen-overlay"></div>
                <div class="screen-content">Meals</div>
            </div>
        </router-link>
        
        <router-link to="recipes">
            <div class="screen2">
                <div class="screen2-image" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=962&q=80"></div>
                <div class="screen-overlay"></div>
                <div class="screen-content">Desserts</div>
            </div>
        </router-link>
    </section>
</template>

<script setup>
    window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
    })
</script>