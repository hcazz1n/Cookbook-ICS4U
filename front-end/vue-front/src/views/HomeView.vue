<template>
    <div id="homepage-container" class="container">
        <h1 class="homepage-title has-text-white">COOKBOOK</h1>
    </div>
    <div class="circle-container"></div>
    <div class="circle-container-2"></div>    
</template>

<script setup> 
    import {onMounted} from 'vue'
    
        onMounted(() => {
            let container = document.querySelector('.circle-container')
            let generatedDistance = 0
            while(generatedDistance < window.innerWidth / 2){
                let circle = document.createElement('div')
                circle.classList.add('circle1')
                container.appendChild(circle)
                generatedDistance += 45
            }
        })
        
        onMounted(() => {
            let container = document.querySelector('.circle-container-2')
            let generatedDistance = 0
            while(generatedDistance < window.innerWidth / 2){
                let circle = document.createElement('div')
                circle.classList.add('circle1')
                container.appendChild(circle)
                generatedDistance += 45
            }
        })
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