<template>
    <section id="home-title-hero" class="hero is-fullheight">
        <div class="homepage-container container">
            <h1 class="homepage-title has-text-white">COOKBOOK</h1>
            <router-link to="#" v-scroll-to="{element: '#home-mission-statement', easing: [0.65, 0, 0.35, 1], duration: 1600}"><div class="button has-text-weight-light homepage-buttons is-size-5">Let's Go!</div></router-link>
        </div>
    </section>
    <section ref="missBackground" id="home-mission-statement" class="hero is-fullheight">
        <div class="homepage-container-2 container">
            <router-link to="recipes">
                <div class="screen">
                    <div class="screen-image" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=962&q=80"></div>
                    <div class="screen-overlay"></div>
                    <div class="screen-content">Recipes</div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script setup> 
</script>