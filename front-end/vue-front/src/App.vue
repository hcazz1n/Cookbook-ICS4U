<template>
  <TheNavigation/>
  <div class="container has-text-centered">
    <router-view></router-view>
  </div>
  <TheFooter/>
</template>

<script setup>
 import TheNavigation from './components/TheNavigation.vue';
 import TheFooter from './components/TheFooter.vue';
</script>
