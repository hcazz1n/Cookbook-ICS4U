<template>
    <img class="recipe-img" src="macaroncoffeescaled.jpg">
    <div v-if="recipe" class="recipe-title is-size-1 has-text-black" :key="recipe.id">{{ recipe.name }}</div>
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
            fetchData(){
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
            this.fetchData()
        }
    }
</script>