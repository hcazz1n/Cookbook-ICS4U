<template>
    <img v-if="recipe" class="recipe-img" src='noodlesscaled.jpg'>
    <div v-if="recipe" class="recipe-title is-size-1 has-text-black animate__animated animate__fadeIn" :key="recipe.id">{{ recipe.name }}</div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                data: [],
                page: 0
            }
        },
        props:{
            id: {type: Number, required: true}
        },
        computed: {
            recipe(){
                return this.data.find(
                    (recipe) => recipe.id === this.id
                )
            }
        },
        methods:{
            changeImgSrc(){
                const img = document.querySelector('.recipe-img')
                const src = `${this.recipe.images}`
                img.setAttribute('src', src)
            },
            fetchRecipes(){
                axios
                .get('http://localhost:3000/api/recipes')
                .then(response => {
                  this.data = response.data;
                  console.log(this.data)
                })
                .catch(error => {
                  console.log(error);
                });
            }
        },
        beforeMount(){
            this.fetchRecipes()
        },
    }
</script>