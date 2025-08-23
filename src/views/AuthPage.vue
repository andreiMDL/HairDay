<template>
  <div class="auth-container">

    <div class="components-container">
      <!-- <SignupForm /> -->
      <img src="/public/assets/Logo-blur.svg" alt="">
      <LoginForm />
    </div>
  </div>
</template>
<script setup>
import LoginForm from '@/components/LoginForm.vue';
// import SignupForm from '@/components/SignupForm.vue';
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
  justify-content: center; /* centraliza o conteúdo dentro do container */
  gap: 1rem;
  /* background-color: var(--color-gray-700); */
  /* box-shadow: 0 0 20px rgb(0, 0, 0); */
  /* border: 1px solid var(--color-gray-800); */
  /* border-radius: 2rem; */
  /* width: 900px; */
  /* height: 800px; */
}


img {
  margin-block: 1.5rem;
  width: 250px;
}
</style>
