<template>
    <div id="homepage-container" class="container">
        <h1 class="homepage-title has-text-white">COOKBOOK</h1>
        <div class="circle-container">
            <div class="circle1"></div>
            <div class="circle1"></div>
            <div class="circle1"></div>
        </div>
    </div>
</template>

<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        let container = document.querySelector('circle-container')
        let numCircles = screen.width / 5

        let generatedCircles = 0

        while(generatedCircles < numCircles){
            let circle = document.createElement('div')
            circle.classList.add('circle1')
            container.appendChild('circle')
            generatedCircles++
        }
    })

</script>