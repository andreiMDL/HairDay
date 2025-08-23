<script setup>
import './assets/main.css';
import AuthPage from './views/AuthPage.vue';
</script>

<template>
  <main>
    <AuthPage />
  </main>
</template>

<style scoped>
* {
  font-family: var(--font-family-base);
  background-image: url('./assets/bg-gradient-5.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: white;
}
</style>
