<template>
<section class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <div
        class="columns is-flex is-flex-direction-column box"
        @submit.prevent="login"
      >
        <div class="column">
          <label for="name">Name</label>
          <input class="input is-danger" type="text" placeholder="Name" name="Name"/>
        </div>
        <div class="column">
          <label for="username">Username</label>
          <input class="input is-danger" type="text" placeholder="Username" name="Username"/>
        </div>
        <div class="column">
          <label for="password">Password</label>
          <input class="input is-danger" type="password" placeholder="Password" name="Password"/>
        </div>
        <div class="column">
          <label for="dsecription">Description</label>
          <input class="input is-danger" type="password" placeholder="Password" name="Password"/>
        </div>
        <div class="column">
          <button class="button is-danger is-fullwidth" type="submit" @click="login()">
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>