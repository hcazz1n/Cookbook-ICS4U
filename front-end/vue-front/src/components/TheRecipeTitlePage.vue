<template>
    <img v-if="recipe" class="recipe-img animate__animated animate__fadeIn" :src="`${this.recipe.images}`">
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