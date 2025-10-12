<template>
  <div class="background-image"></div>
  <div class="container">
    <div class="form-container">
      <div
        class="auth-container"
        v-bind:class="{ 'slide-up': isSignUp }"
      >
        <div class="logo-container">
          <img src="/assets/Logo-blur.svg" alt="">
        </div>
        <form
          action="#"
          class="sign-up-form"
          v-on:submit.prevent="handleSignup"
        >
          <h1>Crie sua Conta</h1>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            v-model="signupName"
          >
          <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="signupEmail"
          >
          <input
            type="password"
            name="password"
            placeholder="Senha"
            v-model="signupPassword"
          >
          <button class="button-signup">Cadastrar</button>
          <a
            href="#"
            class="switch-button"
            v-on:click.prevent="toggleForm"
          >
            Já possui uma conta? Faça login!
          </a>
        </form>
        <div class="logo-container">
          <img src="/assets/Logo-blur.svg" alt="">
        </div>
        <form
          action="#"
          class="sign-in-form"
          v-on:submit.prevent="handleSignin"
        >
          <h1>Faça Login</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="signinEmail"
          >
          <input
            type="password"
            name="password"
            placeholder="Senha"
            v-model="signinPassword"
          >
          <button class="button-signin">Entrar</button>
          <a
            href="#"
            class="switch-button"
            v-on:click="toggleForm"
          >
            Cadastre-se aqui gratuitamente
          </a>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isSignUp = ref(false);

const signupName = ref('');
const signupEmail = ref('');
const signupPassword = ref('');
const signinEmail = ref('');
const signinPassword = ref('');

function toggleForm() {
  isSignUp.value = !isSignUp.value;
}

function handleSignup() {
  console.log("Tentativa de cadastro:", signupName.value, signupEmail.value);
}

function handleSignin() {
  console.log("Tentativa de login:", signinEmail.value);
}
</script>
<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/assets/yellow-abstract-bg-3.png');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 1rem;
}

.form-container {
  position: relative;
  width: 90dvw;
  max-width: 400px;
  height: 65dvh;
  max-height: 600px;
  display: flex;
  background-color: var(--color-gray-800);
  box-shadow: 0 0 15px black;
  overflow: hidden;
  border-radius: 3rem;
  z-index: 1;
}

.auth-container {
  position: absolute;
  width: 100%;
  height: 200%;
  top: 0;
  left: 0;
  transition: transform .6s ease-in-out;
}

.auth-container.slide-up {
  transform: translateY(-50%);
}

form {
  padding-inline: 2.5rem;
  padding-bottom: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

h1 {
  font-weight: bold;
  color: #eee;
  margin-bottom: 1rem;
}

input {
  background-color: var(--color-gray-700);
  border: 1px solid var(--color-gray-600);
  box-shadow: 0 0 25px black;
  border-radius: 2rem;
  padding: 14px 25px;
  width: 100%;
  color: #eee;
  font-size: 1rem;
  transition: all .2s ease;
}

input:focus {
  outline: none;
  border-color: var(--color-yellow);
  box-shadow: 0 0 5px var(--color-yellow);
}

button {
  border-radius: 2rem;
  border: none;
  background-color: var(--color-yellow);
  color: var(--color-gray-800);
  box-shadow: 0 0 5px black;
  font-size: 1rem;
  font-weight: bold;
  padding: 14px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  margin-top: 1rem;
  transition: all .2s ease;
}

button:hover {
  opacity: 0.9;
}

.switch-button {
  text-decoration: none;
  color: #b68500;
  text-shadow: 0 0 5px #000000;
}
</style>
