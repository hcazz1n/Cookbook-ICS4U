<template>
    <div id="homepage-container" class="container">
        <h1 class="homepage-title has-text-white">COOKBOOK</h1>
        <div class="circle-container"></div>
    </div>
</template>

<script>
    export default{
        mounted(){
            let container = document.querySelector('.circle-container')
            console.log(window.innerWidth)
            let numCircles = window.innerWidth / 500

            let generatedCircles = 0

            while(generatedCircles < numCircles){
                let circle = document.createElement('div')
                circle.classList.add('circle1')
                container.appendChild(circle)
                generatedCircles++
            }
            window.addEventListener("resize", this.myEventHandler)
        },
        unmounted(){
            window.removeEventListener("resize", this.myEventHandler)
        },
        methods: {
            myEventHandler(){
                let circles = document.querySelectorAll('.circle1')
                for(let i=0; i<circles.length; i++){
                    document.querySelector('.circle1').remove()
                }

                let container = document.querySelector('.circle-container')
                console.log(window.innerWidth)
                let numCircles = window.innerWidth / 500

                let generatedCircles = 0

                while(generatedCircles < numCircles){
                    let circle = document.createElement('div')
                    circle.classList.add('circle1')
                    container.appendChild(circle)
                    generatedCircles++
                }
            },
        }
    }
</script>

<!-- <script setup>
    import {onMounted} from 'vue'
    
    onMounted(() => {
        let container = document.querySelector('.circle-container')
        console.log(window.innerWidth)
        let numCircles = window.innerWidth / 500

        let generatedCircles = 0

        while(generatedCircles < numCircles){
            let circle = document.createElement('div')
            circle.classList.add('circle1')
            container.appendChild(circle)
            generatedCircles++
        }
    })

</script> -->