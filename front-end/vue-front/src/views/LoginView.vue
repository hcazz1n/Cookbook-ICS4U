<template>
    <section class="hero is-fullheight">
            <div class="hero-body is-justify-content-center is-align-items-center">
                <div class="columns is-flex is-flex-direction-column box">
                    <div class="column">
                        <label for="email">Username</label>
                        <input class="input is-danger" type="text" placeholder="Username">
                    </div>
                    <div class="column">
                        <label for="Name">Password</label>
                        <input class="input is-danger" type="password" placeholder="Password">
                        <!-- a href="forget.html" class="is-size-7 has-text-primary"></a> -->
                    </div>
                    <div class="column">
                        <button class="button is-danger is-fullwidth" type="submit">Login</button>
                    </div>
                    <div class="has-text-centered">
                        <p class="is-size-7"> Don't have an account? 
                            <router-link to="register" class="has-text-danger">Register</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>

</script>