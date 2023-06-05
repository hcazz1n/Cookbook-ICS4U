<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
          <img src="../../public/icon2.png" id="logo">
      </router-link> 

      <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="burger">&#9776;</label>

     
      <div class="menu">
          <router-link class="navbar-item" to="/" >Home</router-link>

          <router-link class="navbar-item" to="/recipes" >Recipes</router-link>

          <router-link class="navbar-item contact-us-navbar-link" to="/contact" >Contact Us</router-link>
      </div>
    </ul>

    </div>

    <div id="navbar" class="navbar-menu">

      <div class="navbar-end">
          
          <router-link class="navbar-item" to="/" >Home</router-link>

          <router-link class="navbar-item" to="/recipes" >Recipes</router-link>

          <router-link class="navbar-item contact-us-navbar-link" to="/contact" >Contact Us</router-link>
          

          <div class="navbar-item">
            <router-link class="button" id="login" to="/account">
              <strong>Account</strong>
            </router-link>
        </div>
        
      </div>
      
      
    </div>
  
  </nav>
</template>

<script setup>
</script>
