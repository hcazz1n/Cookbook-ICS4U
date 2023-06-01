<template>
<section class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <div
        class="columns is-flex is-flex-direction-column box"
        @submit.prevent="login"
      >
        <div class="column">
          <label for="Name">Name</label>
          <input v-model = "name" class="input input-border" type="text" placeholder="e.g. John Smith" name="name"/>
        </div>
        <div class="column">
          <label for="Username">Username</label>
          <input v-model = "userName" class="input input-border" type="text" placeholder="e.g. JohnSmith1234" name="username"/>
        </div>
        <div class="column">
          <label for="password">Password</label>
          <input v-model = "password" class="input input-border" type="text" placeholder="Enter your password." name="password"/>
        </div>
        <div class="column">
          <label for="description">Description</label>
          <input v-model = "bio" class="input input-border" type="text" placeholder="Tell us a little bit about yourself!" name="description"/>
        </div>
        <div class="column">
          <label for="profilePic">Profile Picture</label>
          <input v-model = "profilePic" class="input input-border" type="text" placeholder="Paste the image link here." name="pfp"/>
        </div>
        <div class="column">
          <button class="button login-register-button is-fullwidth" type="submit" @click="register()">
            Register
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
      name: '',
      userName: '',
      password: '',
      bio: '',
      profilePic: '',
    }
  },
  methods: {
    register() {
      console.log(this.name)
      console.log(this.userName)
      console.log(this.bio)
      axios
        .post('http://localhost:3000/register', {
            "name": this.name,
            "userName": this.userName,
            "password": this.password,
            "profilePic": this.profilePic,
            "bio": this.bio,
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