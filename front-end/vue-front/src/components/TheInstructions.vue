<template>
    <div class="ingredient-instruction-title is-size-1 has-text-black">Instructions</div>
    <ul class="ingredient-instruction-list">
        <li>[Step 1]</li> <!--do a v-for here with new data-->
        <li>[Step 2]</li>
        <li>[Step 3]</li>
        <li>[Step 4]</li>
        <li>[Step 5]</li>
        <li>[Step 6]</li>
        <li>[Step 7]</li>
        <li>[Step 8]</li>
        <li>[Step 9]</li>
        <li>[Step 10]</li>
        <li>[Step 11]</li>
        <li>[Step 12]</li>
    </ul>
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