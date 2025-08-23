<template>
  <!-- <div class="form-container">
    <div class="title-container">
      <h2>Login</h2>
    </div>

    <div class="input-email">
      <div class="input-group">
        <div class="email-title">
          <i class="bi bi-person"></i>
          <label for="email">Email</label>
        </div>
        <input type="email" id="email" placeholder="seu@email.com" />
      </div>
    </div>

    <div class="input-password">
      <div class="input-group">
        <div class="password-title">
          <i class="bi bi-key"></i>
          <label for="password">Senha</label>
        </div>
        <input type="password" id="password" placeholder="Sua senha" />
      </div>
    </div>

    <button>Entrar</button> -->
<div class="container" :class="{ 'right-panel-active': isPanelActive }" id="container">
  <div class="form-container sign-up-container">
    <form action="">
      <h1>Crie sua Conta</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="bi bi-google"></i></a>
        <a href="#" class="social"><i class="bi bi-facebook"></i></a>
        <a href="#" class="social"><i class="bi bi-instagram"></i></a>
      </div>
      <span>ou entre com seu login e senha</span>
      <input type="text" name="name" placeholder="Name">
      <input type="email" name="email" placeholder="Email">
      <input type="password" name="password" placeholder="Senha">
      <button class="button-signup">Cadastrar</button>
    </form>
  </div>
  <div class="form-container sign-in-container">
    <form action="#">
      <!-- <img src="/public/assets/Logo-blur.svg" alt=""> -->
      <h1>Faça login</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="bi bi-google"></i></a>
        <a href="#" class="social"><i class="bi bi-facebook"></i></a>
        <a href="#" class="social"><i class="bi bi-instagram"></i></a>
    </div>
    <span>ou entre com seu login e senha</span>
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Senha">
    <a class="forgot-password" href="#">Esqueci minha senha</a>


    <button >Entrar</button>
    </form>
  </div>
  <div class="overlay-container">
    <div class="overlay">
      <div class="overlay-panel overlay-left">
        <h1>Já possui uma conta?</h1>
        <p>Faça login e agende seu horário agora mesmo!</p>
        <button class="ghost" @click="isPanelActive = false" id="signIn">Entrar</button>
      </div>
      <div class="overlay-panel overlay-right">
        <h1>Ainda não é cliente?</h1>
        <p>Faça o cadastro e agende seu horário agora mesmo!</p>
        <button class="ghost" @click="isPanelActive = true" id="signUp">Cadastre-se</button>
      </div>
    </div>
  </div>
</div>

</template>
<script setup>
import { ref } from 'vue';

const isPanelActive = ref(false);

</script>
<style scoped>

* {
	box-sizing: border-box;
}


body {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

img {
  width: 180px;
}

h1 {
	font-weight: bold;
	margin: 0;
}


h2 {
	text-align: center;
}


p {
	font-weight: 400;
  text-shadow: 0 0 5px rgb(0, 0, 0);
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}


span {
	font-size: 12px;
}


a {
	color: var(--color-gray-300);
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
  transition: .2s ease;
}

a:hover {
  color: var(--color-yellow);
  scale: 1.05;
}


button {
	border-radius: 2rem;
	border: 1px solid var(--color-yellow);
	background-color: var(--color-gray-600);
	color: var(--color-yellow);
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  transition: .2s ease;
}

button:hover {
  scale: 1.1;
  box-shadow: 0 0 10px rgb(255, 174, 0);
  text-shadow: 0 0 10px rgb(255, 174, 0);
}


button:active {
	transform: scale(0.95);
}


button:focus {
	outline: none;
}

.button-signup {
  margin-top: 3rem;
}


button.ghost {
  color: #eee;
	background-color: rgba(255, 115, 0, 0.082);
	border: 1px solid rgb(70, 48, 0);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgb(70, 48, 0);
  text-shadow: 0 0 10px rgb(0, 0, 0);
  transition: .2s ease-in;
}

button.ghost:hover {
  scale: 1.1;
  background-color: rgba(255, 166, 0, 0.342);
  box-shadow:  0 0 10px var(--color-gray-800);
  text-shadow: 0 0 10px var(--color-gray-800);
  cursor: pointer;
}


form {
  background-color: var(--color-gray-800);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}


input {
	background-color: var(--color-gray-600);
	border: 1px solid var(--color-gray-400);
  box-shadow: inset 0 0 10px black;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
  border-radius: 2rem;
  transition: .2s ease;
}

input:focus {
  outline: none;
  border: 1px solid var(--color-yellow);
  box-shadow: inset 0 0 10px black,
              0 0 5px rgb(255, 196, 0);
}

input:hover {
  border: 1px solid var(--color-yellow);
  box-shadow: inset 0 0 10px black,
              0 0 5px rgb(255, 196, 0);
}

.container {
	border-radius: 2rem;
  border: 3px solid var(--color-gray-700);
  box-shadow: 0 0 28px rgb(0, 0, 0);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 580px;
  background-color: var(--color-gray-800);
}


.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}


.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}


.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}


.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}


.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}


@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}


.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}


.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}


.overlay {
	background: url(/public/assets/yellow-abstract-bg-2.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
  border-radius: 2rem;
	/* color: var(--color-gray-800); */
  text-shadow: 0 0 10px rgb(61, 33, 0);
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  transform: translateX(0);
	transition: transform 0.6s ease-in-out;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0);
}



.container.right-panel-active .overlay {
  	transform: translateX(50%);
}


.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}


.overlay-left {
	transform: translateX(-20%);
}


.container.right-panel-active .overlay-left {
	transform: translateX(0);
}


.overlay-right {
	right: 0;
	transform: translateX(0);
}


.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}


.social-container {
	margin: 20px 0;
}


.social-container a {
  font-size: 24px;
  color: #eee;
	border: 1px solid var(--color-yellow);
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
  text-align: center;
  line-height: 16px;
	margin: 0 10px;
	height: 40px;
	width: 40px;
}




/* .form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  width: 100%;
  height: 500px;
  max-width: 400px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.445);
}

h2 {
  color: #f0f0f0;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
}

.input-group {
  width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-email {
  margin-top: 3rem;
}

.email-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.password-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

label {
  color: #a0a0a0;
  font-size: 14px;
}

input {
  background-color: var(--color-gray-600);
  border: 1px solid #555;
  border-radius: 2rem;
  padding: 12px;
  color: #f0f0f0;
  font-size: 16px;
}

input::placeholder {
  color: #777;
}

button {
  background-color: var(--color-yellow);
  color: var(--color-gray-700);
  border: none;
  padding: 12px;
  border-radius: 2rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: auto;
  transition: ease .2s;
  width: 15rem;
}

button:hover {
  box-shadow: 0 0px 10px rgb(253, 184, 55);
  scale: 1.03;
} */
</style>
