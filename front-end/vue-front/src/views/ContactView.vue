<template>
    <router-view >
            <section class="hero is-halfheight" id="body" >
                <div class="columns">

                    <div id="contact-columns" class="column">
                        <a href="https://www.youtube.com/watch?v=HlBYdiXdUa8">
                            <div class="circle">
                                <img src="../../public/david.jpg">
                            </div>
                        </a>    
                    </div>
                    <div id="contact-columns" class="column">
                        <a href="https://www.youtube.com/watch?v=HhrbbYD5ScI">
                            <div class="circle">
                                <img src="../../public/fred.jpg">
                            </div>
                        </a>
                    </div>
                    <div id="contact-columns" class="column">
                        <a href="https://www.youtube.com/watch?v=JyUqV9I_lb8">
                            <div class="circle">
                                <img src="../../public/kyle.jpg">
                            </div>
                        </a>
                    </div>
                    <div id="contact-columns" class="column">
                        <a href="https://www.youtube.com/watch?v=Fi98-2DLh20">
                            <div class="circle">
                                <img src="../../public/harry.jpg">
                            </div>
                        </a>
                    </div>
                </div>
        </section>
        <section id="contact-hero" class="hero has-text-centered">
           
            <div class="container" id="contact-container">
                <h1 class="contact-title" id="contact-us">Contact Us</h1>
                <div class="columns phone-email">
                    <div id="contact-info-column" class="column">
                        <p class="contact-header">PHONE NUMBER</p>
                        <p class="contact-info">111-111-1111</p>
                    </div>
                    <div id="contact-info-column" class="column">
                        <p class="contact-header">EMAIL ADDRESS</p>
                        <p class="contact-info">ihate@petah.com</p>
                    </div>
                </div>
                
            </div>
        </section>
    </router-view>
</template>

<script setup>

window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
})
</script>