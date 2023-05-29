<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <TheNavigation/>
  <router-view></router-view>
  <TheFooter/>
</template>

<script setup>
  import TheNavigation from './components/TheNavigation.vue';
  import TheFooter from './components/TheFooter.vue';
</script>
