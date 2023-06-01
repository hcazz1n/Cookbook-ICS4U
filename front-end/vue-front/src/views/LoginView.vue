<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <div
        class="columns is-flex is-flex-direction-column box"
        @submit.prevent="login"
      >
        <div class="column">
          <label for="username">Username</label>
          <input
            v-model = "Username"
            class="input input-border"
            type="text"
            placeholder="Username"
            name="Username"
          />
        </div>
        <div class="column">
          <label for="password">Password</label>
          <input
            v-model = "password"
            class="input input-border"
            type="password"
            placeholder="Password"
            name="password"
          />
          <!-- a href="forget.html" class="is-size-7 has-text-primary"></a> -->
        </div>
        <div class="column">
          <button
            class="button is-fullwidth login-register-button"
            type="submit"
            @click="login()"
          >
            Login
          </button>
        </div>
        <div class="has-text-centered">
          <p class="is-size-7">
            Don't have an account?
            <router-link to="register" class="has-text-danger"
              >Register Now</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

window.addEventListener('load', function() {
        window.scrollBy(0, -2000) 
})

const username = ref('')
const password = ref('')
const router = useRouter()
const route = useRoute()
const login = () => {
  window.user = username.value
  const redirectPath = route.query.redirect || '/account'
  router.push(redirectPath)
}

export default {
  data(){
    return{
      Username: '',
      password: '',
    }
  },
  methods: {
    login() {
      axios
        .post('http://localhost:3000/login', {
           "name": this.Username,
           "password": this.password
        })
        .then((response) => {
          this.data = response.data
          console.log(this.data)
          localStorage.setItem('user_id', this.data._id)
          localStorage.setItem('userName', this.data.userName)
          this.$router.push('/account')
          console.log("logged in")
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
