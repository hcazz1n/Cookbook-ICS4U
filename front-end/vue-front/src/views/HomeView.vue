<template>
    <section id="home-title-hero" class="hero is-fullheight">
        <div class="homepage-container container">
            <h1 class="homepage-title has-text-white">COOKBOOK</h1>
            <router-link to="#" class="hvr-fade" v-scroll-to="{element: '#home-mission-statement', easing: [0.65, 0, 0.35, 1], duration: 1600}"><div class="button has-text-weight-light homepage-buttons is-size-5">Learn More</div></router-link>
        </div>
    </section>
    <section id="home-mission-statement" class="hero is-fullheight">
        <div class="homepage-container-2 container">
            <h2 class="mission-title">Our Mission</h2>
            <div ref="mission" class="mission">
            </div>
        </div>
    </section>
</template>

<script setup> 
    import {ref, onMounted} from 'vue'

    const mission = ref()
    let mparagraphs = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.']
    let hasRun = false;

    onMounted(() => {
        window.addEventListener('transitionend', (event) => {
            if(!hasRun){
                for(let i=0; i< mparagraphs.length; i++){
                    setTimeout(() => {
                    const p = document.createElement('p')
                    p.textContent = mparagraphs[i]
                    p.classList.add('animate__animated', 'animate__fadeInUp', 'mission-p')
                    mission.value.appendChild(p)
                    console.log(i)
                    }, i*450)
                }
                const routerLink = document.createElement('router-link')
                routerLink.setAttribute('to', '/recipes')
                routerLink.classList.add('hvr-fade')
                const button = document.createElement('div')
                button.classList.add('button', 'has-text-weight-light', 'homepage-buttons', 'is-size-5')
                button.textContent = 'Let\'s Explore!'
                routerLink.appendChild(button)
                mission.value.appendChild(routerLink)
                hasRun = true
            }

        })
    })
</script>