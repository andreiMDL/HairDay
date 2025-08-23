<template>
  <!-- <div class="form-container">
    <div class="title-container">
      <h2>Cadastre-se</h2>
    </div>

    <div class="input-group">
      <div class="name-title">
        <i class="bi bi-person-circle"></i>
        <label for="name">Nome</label>
      </div>
      <input type="name" id="name" placeholder="Seu Nome" />
    </div>

    <div class="input-group">
        <div class="email-title">
          <i class="bi bi-person"></i>
          <label for="email">Email</label>
        </div>
      <input type="email" id="email" placeholder="seu@email.com" />
    </div>

    <div class="input-group">
        <div class="password-title">
          <i class="bi bi-key"></i>
          <label for="password">Senha</label>
        </div>
      <input type="password" id="password" placeholder="Sua senha" />
    </div>

    <button>Cadastrar</button>
  </div> -->

<div></div>
</template>
<script></script>
<style scoped>

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: var(--color-gray-800);
  padding: 32px;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  border-top: 2px solid var(--color-yellow);
  border-left: 2px solid var(--color-yellow);
  border-bottom: 2px solid var(--color-yellow);
  /* box-shadow: 15px 0 25px -8px rgb(253, 184, 55); */
  max-height: 500px;
}

h2 {
  color: white;
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

.name-title {
  display: flex;
  align-items: center;
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
}
</style>
