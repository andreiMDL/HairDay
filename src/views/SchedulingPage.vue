<template>
  <div class="container">
    <div class="schedule-container">
      <h2>Agende um atendimento</h2>
      <p>Selecione a data, horário e informe o nome do cliente para criar o agendamento</p>
      <div class="date-input-container">
        <DpCalendar />
      </div>
      <div class="schedule-picker">
        <span class="schedule-picker-title">Horários</span>
        <p class="schedule-picker-subtitle">Manhã</p>
        <div class="schedule-picker-morning">
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
        </div>
        <p class="schedule-picker-subtitle">Tarde</p>
        <div class="schedule-picker-morning">
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
        </div>
        <p class="schedule-picker-subtitle">Noite</p>
        <div class="schedule-picker-morning">
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
          <span class="avaiable-schedule">09:00</span>
        </div>
      </div>
      <div class="client-dropdown">
        <p class="schedule-picker-subtitle">Cliente</p>
      </div>
      <div class="select-customer">
        <DropdownButton />
      </div>
    </div>
  </div>
</template>
<script setup>
import DropdownButton from './DropdownButton.vue';
import DpCalendar from '@/components/DpCalendar.vue'
</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 4rem;
}

.container {
  display: flex;
  width: 32rem;
  min-height: 55rem;
  border-radius: 2rem;
  background-color: var(--color-gray-800);
  border: 2px solid var(--color-gray-600);
  /* border: 2px solid blue; */
  box-shadow: 0 0 28px rgb(0, 0, 0);
  padding-block: 3rem;
}

.schedule-container {
  /* margin-top: 5rem; */
  margin-inline: auto;
  max-width: 80%;
  /* border: 1px solid red; */
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

.schedule-picker {
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  max-width: 100%;
}

.schedule-picker-title {
  margin-top: 2rem;
  font-weight: 600;
  font-size: large;
}

.schedule-picker-subtitle {
  margin-top: 1rem;
  color: var(--color-gray-300);
  font-weight: 500;
  font-size: medium;
}

.schedule-picker-morning {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .45rem;
  /* border: 1px solid red; */
  margin: auto;
}

.avaiable-schedule {
  display: flex;
  text-align: center;
  align-items: center;
  font-size: large;
  border: 1px solid var(--color-gray-500);
  background-color: var(--color-gray-600);
  padding: 10px 25px;
  border-radius: 1rem;
  box-shadow: 0 0 8px black;
}

.select-customer {
  margin-top: 2rem;
}

.client-dropdown {
  color: var(--color-gray-300);
}
</style>
