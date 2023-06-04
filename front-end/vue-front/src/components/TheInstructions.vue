<template>
    <div class="ingredient-instruction-title is-size-1 has-text-black">Instructions</div>
    <ul v-if="recipe" class="ingredient-instruction-list">
        <li class="animate__animated animate__fadeIn is-size-6" v-for="instruction in recipe.instructions" :key="instruction.id">{{ instruction }}</li>
    </ul>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                data: [],
                page: 2
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