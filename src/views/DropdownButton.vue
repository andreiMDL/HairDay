<template>

  <div class="client-dropdown-button" @click="toggleDropdown">
    <div class="client-info">
      <span class="client-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </span>
      <span class="client-name">{{ selectedClient.name }}</span>
    </div>
    <span class="dropdown-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </span>

    <div v-if="isOpen" class="dropdown-list">
      <div
        v-for="client in clients"
        :key="client.id"
        class="dropdown-item"
        @click="selectClient(client)"
      >
        <div class="client-info">
          <span class="client-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <span class="client-name">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Estado para controlar a visibilidade do dropdown
const isOpen = ref(false);

// Lista de clientes
const clients = ref([
  { id: 1, name: 'Helena Souza' },
  { id: 2, name: 'João Silva' },
  { id: 3, name: 'Maria Oliveira' },
  { id: 4, name: 'Pedro Santos' },
]);

// Estado para armazenar o cliente selecionado
const selectedClient = ref(clients.value[0]);

// Função para mostrar/ocultar a lista de opções
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Função para selecionar um cliente e fechar a lista
const selectClient = (client) => {
  selectedClient.value = client;
  isOpen.value = false;
};
</script>

<style scoped>
.client-dropdown {
  width: 100%;
  position: relative;
  font-family: sans-serif;
  color: #fff;
}

.client-dropdown-title {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.client-dropdown-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #333;
  border: 1px solid #555;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: inset 0 0 10px black;
}

.client-dropdown-button:hover {
  background-color: #444;
}

.client-info {
  display: flex;
  align-items: center;
}

.client-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
  color: #FFC107; /* Cor amarela para o ícone */
}

.client-icon svg {
  width: 100%;
  height: 100%;
}

.client-name {
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.dropdown-arrow {
  width: 1rem;
  height: 1rem;
  color: #fff;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: #333;
  border: 1px solid #555;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.dropdown-item {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background-color: #444;
}
</style>
