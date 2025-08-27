<template>
  <div class="container">
    <div class="schedule-container">
      <h2>Agende um atendimento</h2>
      <p>Selecione a data, horário e informe o nome do cliente para criar o agendamento</p>
      <div class="date-input-container">
        <DpCalendar />
      </div>
    </div>
  </div>
</template>
<script setup>
import DpCalendar from '@/components/DpCalendar.vue'
</script>
<style>
body {
  justify-content: center;
  align-items: center;
}



.container {
  width: 32rem;
  height: 55rem;
  border-radius: 2rem;
  background-color: var(--color-gray-700);
}

.schedule-container {
  padding: 5rem;
}

.date-container {
  justify-content: space-between;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 15px;
  border-radius: 2rem;
  background-color: var(--color-gray-600);
  border: 1px solid var(--color-gray-400);
  color: var(--color-gray-400);
  box-shadow: inset 0 0 10px black;
  padding: 12px 15px;
  cursor: pointer;
}

.calendar-icon {
  color: var(--color-primary-yellow);
  margin-right: 10px;
}

.calendar-icon img {
  vertical-align: middle;
}

.date-display {
  flex-grow: 1;
  color: #fff;
  font-size: 16px;
}

.arrow-down {
  color: var(--color-gray-400);
  font-size: 8px;
}

.arrow-down img {
  width: 1.3rem;
  vertical-align: middle;
}

.hidden-date-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.date-input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
