<template>
    <section id="home-title-hero" class="hero is-fullheight">
        <div class="homepage-container container">
            <h1 class="homepage-title has-text-white">COOKBOOK</h1>
            <router-link to="#" v-scroll-to="{element: '#home-mission-statement', easing: [0.65, 0, 0.35, 1], duration: 1600}"><div class="button has-text-weight-light homepage-buttons is-size-5">Learn More</div></router-link>
        </div>
    </section>
    <section ref="missBackground" id="home-mission-statement" class="hero is-fullheight">
        <div class="homepage-container-2 container">
            <h2 class="mission-title">Our Mission</h2>
            <div ref="mission" class="mission">
            </div>
            <div ref="toPage" style="display: flex; justify-content: center; padding-top: 25px;"></div>
        </div>
    </section>
</template>

<script setup> 
    import {ref, onMounted} from 'vue'

    const mission = ref()
    const toPage = ref()
    const missBackground = ref()
    let mparagraphs = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.']
    let hasRun = false;

    onMounted(() => {
        const routerLink = document.createElement('router-link')
        //window.addEventListener('mouseover', generateMission)
        window.addEventListener('click', generateMission)
        
        function generateMission(){
            if(!hasRun){
                let timerCount = 0
                for(let i=0; i<mparagraphs.length; i++){
                    setTimeout(() => {
                    const p = document.createElement('p')
                    p.textContent = mparagraphs[i]
                    p.classList.add('animate__animated', 'animate__fadeInUp', 'mission-p')
                    mission.value.appendChild(p)
                    }, i*500 + 400)
                    timerCount = i
                }
                setTimeout(() => {
                    routerLink.setAttribute('to', '/recipes')
                    routerLink.classList.add('animate__animated')
                    const button = document.createElement('div')
                    button.classList.add('button', 'has-text-weight-light', 'homepage-buttons', 'is-size-5', 'animate__animated', 'animate__fadeInUp')
                    button.textContent = 'View The Recipes!'
                    routerLink.appendChild(button)
                    toPage.value.appendChild(routerLink)
                }, timerCount*500 + 900)
                
                hasRun = true
            }
        }
    })
</script>