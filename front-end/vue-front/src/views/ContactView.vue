<template id>
    <TheNavigation/>
    <router-view>
        <section class="hero is-halfheight" >
                <div class="columns">
                    <div id="contact-columns" class="column">
                        
                    </div>
                    <div id="contact-columns" class="column">
                        <div class="circle"></div>

                        
                    </div>
                    <div id="contact-columns" class="column">
                        <div class="circle"></div>
                    </div>
                    <div id="contact-columns" class="column">
                        <div class="circle"></div>
                    </div>
                    <div id="contact-columns" class="column">
                        <div class="circle"></div>
                    </div>
                    <div id="contact-columns" class="column">
                        
                    </div>
                </div>
        </section>
        <section id="contact-hero" class="hero">
        </section>
    </router-view>
</template>

<script setup>
    import TheNavigation from '../components/TheNavigation.vue';
</script>