<template>
    <section id="home-title-hero" class="hero is-fullheight">
        <div class="homepage-container container">
            <h1 class="homepage-title has-text-white">COOKBOOK</h1>
            <router-link to="#" class="hvr-fade" v-scroll-to="{element: '#home-mission-statement', easing: [0.65, 0, 0.35, 1], duration: 2000}"><div class="button has-text-weight-light learn-more is-size-5">Learn More</div></router-link>
        </div>
    </section>
    <section id="home-mission-statement" class="hero is-fullheight">
        <div class="homepage-container-2 container">
            <h2 class="mission-title">Our Mission</h2>
            <div ref="mission" class="mission">
                <!-- <p class="animate__animated animate__backInUp mission-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente.</p>
                <p class="animate__animated animate__backInUp mission-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente.</p>
                <p class="animate__animated animate__backInUp mission-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente.</p> -->
            </div>
        </div>
    </section>
</template>

<script setup> 
    import { faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons'
    import {ref, onMounted} from 'vue'

    const mission = ref()
    let mparagraphs = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore. Voluptatum, necessitatibus. Suscipit, consequuntur voluptates quibusdam saepe vel tempora, porro quo blanditiis esse officiis perferendis nihil quidem odit laboriosam? Adipisci ex aspernatur cupiditate omnis voluptas quibusdam? Nam esse omnis saepe animi odit eum cupiditate, vel doloribus quod architecto asperiores, tempora quis laboriosam sapiente Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, esse quisquam quaerat repudiandae nostrum possimus deleniti ab fuga at dolore.']

    onMounted(() => {
        window.addEventListener( //setting up an eventListener to create an IntersectionObserver interface
            "load", function() {
                console.log('123') //runs
                createObserver() 
            }
        )

        
        function createObserver(){
            let observer;
            let options = {
                root: null, //element used as viewport for checking visiblity
                rootMargin: '0px',
                threshold: 1.0 //int/double/array to indicate what % observer callback will occur. 1.0 = 100% visibility
            }
            observer = new IntersectionObserver(handleIntersect, options)
            observer.observe(mission)
        }

        function handleIntersect(entries){
            entries.forEach((entry) => {
                let i = 0
                if(entry.intersectionRatio == 1.0){
                    console.log('123') //doesnt run
                    const p = document.createElement('p')
                    p.textContent = 'balls'
                    mission.value.appendChild(p)

                    // mparagraphs.forEach((paragraph) => {
                    //     {
                    //     setTimeout(() => {
                    //         const p = document.createElement('p')
                    //         p.textContent = paragraph
                    //         i++
                    //         p.classList.add('animate__animated', 'animate__backInUp', 'mission-p')
                    //         mission.value.appendChild(p)
                    //     }, i * 450)
                    //     }   
                    // })
                }
            })
        }
    })
</script>