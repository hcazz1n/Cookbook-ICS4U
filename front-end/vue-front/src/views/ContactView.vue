<template>
    <TheNavigation/>
    <router-view>
        <section id="home-title-hero" class="hero is-fullheight">
            <div class="homepage-container container">
                <h1 class="homepage-title has-text-black">COOKBOOK</h1>
            </div>
        </section>
    </router-view>
  
</template>

<script setup>
    import TheNavigation from '../components/TheNavigation.vue';
</script>