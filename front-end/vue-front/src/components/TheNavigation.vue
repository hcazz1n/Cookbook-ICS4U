<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
          <img src="../../public/placeholder.png" id="logo">
      </router-link> 
    </div>

    <div id="navbar" class="navbar-menu">

      <div class="navbar-end">
          
          <router-link class="navbar-item" to="/" >
              Home
          </router-link>

          <router-link class="navbar-item" to="/recipes" >
              Recipes
          </router-link>

          <router-link class="navbar-item" to="/contact" >
              Contact Us
          </router-link>
          

          <div class="navbar-item">
            <router-link class="button" id="login" to="/account">
              <strong>Sign Up</strong>
            </router-link>
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

