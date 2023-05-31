<template>
    <section class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        <label for="email">Name</label>
                        <input class="input is-danger" type="text" placeholder="ex. Bartholomew He">
                    </div>
                    <div class="column">
                        <label for="email">Username</label>
                        <input class="input is-danger" type="text" placeholder="ex. Gorlock Devourer of Worlds">
                    </div>
                    <div class="column">
                        <label for="Name">Password</label>
                        <input class="input is-danger" type="password" placeholder="Password">
                        <!-- a href="forget.html" class="is-size-7 has-text-primary"></a> -->
                    </div>
                    <div class="column">
                        <button class="button is-danger is-fullwidth" type="submit">Register</button>
                    </div>
                    <div class="has-text-centered">
                        <p class="is-size-7"> Already have an Account? 
                            <router-link to="login" class="has-text-danger">Login</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>

</script>