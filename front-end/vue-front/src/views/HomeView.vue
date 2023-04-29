<template>
    <section id="home-title-hero" class="hero is-fullheight">
        <div class="homepage-container container">
            <h1 class="homepage-title has-text-white">COOKBOOK</h1>
            <router-link to="#" class="hvr-float" v-scroll-to="{element: '#home-about-us', easing: [0.65, 0, 0.35, 1], duration: 2000}"><div class="button">Explore</div></router-link>
        </div>
    </section>
    <section id="home-about-us" class="hero is-fullheight">
        <div class="homepage-container container">
            <h1 class="homepage-title">Section 2</h1>
        </div>
    </section>
</template>

<script setup> 
    //import {onMounted} from 'vue'
</script>