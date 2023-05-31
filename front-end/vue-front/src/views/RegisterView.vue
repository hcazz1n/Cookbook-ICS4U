<template>
<section class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <div
        class="columns is-flex is-flex-direction-column box"
        @submit.prevent="login"
      >
        <div class="column">
          <label for="name">Name</label>
          <input v-model = "Name" class="input is-danger" type="text" placeholder="Name" name="Name"/>
        </div>
        <div class="column">
          <label for="username">Username</label>
          <input v-model = "Username" class="input is-danger" type="text" placeholder="Username" name="Username"/>
        </div>
        <div class="column">
          <label for="password">Password</label>
          <input v-model = "password" class="input is-danger" type="text" placeholder="Password" name="Password"/>
        </div>
        <div class="column">
          <label for="dsecription">Description</label>
          <input v-model = "description" class="input is-danger" type="text" placeholder="Description" name="description"/>
        </div>
        <div class="column">
          <button class="button is-danger is-fullwidth" type="submit" @click="register()">
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      Name: '',
      Username: '',
      password: '',
      description: ''
    }
  },
  methods: {
    register() {
      axios
        .post('http://localhost:3000/register', {
          "name": this.Name,
          "Username": this.Username,
          "password": this.password,
          "description": this.description
      })
        .then((response) => {
          this.data = response.data
          console.log(this.data)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}

</script>