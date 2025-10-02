<template>
  <div class="auth-container">
    <div class="components-container">
      <img src="/assets/Logo-blur.svg" alt="">
      <LoginForm />
    </div>
  </div>
</template>
<script setup>
import LoginForm from '@/components/LoginForm.vue';
</script>
<style>
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.auth-container {
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

img {
  margin-block: 1.5rem;
  width: 250px;
}
</style>
