<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
          <img src="../../public/icon2.png" id="logo">
      </router-link> 
    </div>

    <div id="navbar" class="navbar-menu">

      <div class="navbar-end">
          
          <router-link class="navbar-item" to="/" >Home</router-link>

          <router-link class="navbar-item" to="/recipeselector" >Recipes</router-link>

          <router-link class="navbar-item contact-us-navbar-link" to="/contact" >Contact Us</router-link>
          

          <div class="navbar-item">
            <router-link class="button" id="login" to="/account">
              <strong>Account</strong>
            </router-link>
        </div>
        
      </div>
      
    </div>
    <!-- <div class="parent">
          <div class="parent">
            <div class="body">
                <label>
                    <input type="checkbox">
                    <span class="menu"> <span class="hamburger"></span> </span>
                        <ul>
                            <li><router-link class="navbar-item" to="/" >Home</router-link></li>
                            <li><router-link class="navbar-item" to="/recipeselector" >Recipes</router-link></li>
                            <li><router-link class="navbar-item" to="/contact" >Contact Us</router-link></li>
                        </ul>
                    </label>
            </div>
            </div>
            </div> -->
  </nav>
</template>

<script setup>

</script>

