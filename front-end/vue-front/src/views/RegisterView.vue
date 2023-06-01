<template>
<section class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <div
        class="columns is-flex is-flex-direction-column box"
        @submit.prevent="login"
      >
        <div class="column">
          <label for="name">Name</label>
          <input v-model = "name" class="input input-border" type="text" placeholder="e.g. John Smith" name="name"/>
        </div>
        <div class="column">
          <label for="username">Username</label>
          <input v-model = "username" class="input input-border" type="text" placeholder="e.g. JohnSmith1234" name="username"/>
        </div>
        <div class="column">
          <label for="password">Password</label>
          <input v-model = "password" class="input input-border" type="text" placeholder="Enter your password." name="password"/>
        </div>
        <div class="column">
          <label for="dsecription">Description</label>
          <input v-model = "description" class="input input-border" type="text" placeholder="Tell us a little bit about yourself!" name="description"/>
        </div>
        <div class="column">
          <label for="username">Profile Picture</label>
          <input v-model = "pfp" class="input input-border" type="text" placeholder="Paste the image link here." name="pfp"/>
        </div>
        <div class="column">
          <button class="button login-register-button is-fullwidth" type="submit" @click="register()">
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