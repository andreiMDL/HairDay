<template>
  <div class="container-schedules">
    <div class="schedule-container">
      <div class="schedule-title">
        <img src="/public/assets/Logo-blur.svg" alt="">
        <h2>Agende um atendimento</h2>
        <p>Selecione a data, horário e informe o nome do cliente para criar o agendamento</p>
        <span class="schedule-input-title">Data</span>
      </div>
      <div class="date-input-container">
        <DpCalendar />
      </div>
      <div class="schedule-picker">
        <span class="schedule-picker-title">Horários</span>
        <div class="schedule-picker-container">
          <p class="schedule-picker-subtitle">Manhã</p>
          <div class="schedule-picker-morning">
            <span class="avaiable-schedule">09:00</span>
            <span class="avaiable-schedule">09:00</span>
            <span class="avaiable-schedule">09:00</span>
            <span class="avaiable-schedule">09:00</span>
            <span class="avaiable-schedule">09:00</span>
          </div>
        </div>
        <div class="schedule-picker-container">
          <p class="schedule-picker-subtitle">Tarde</p>
          <div class="schedule-picker-morning">
            <span class="avaiable-schedule">09:00</span>
          </div>
        </div>
        <div class="schedule-picker-container">
          <p class="schedule-picker-subtitle">Noite</p>
          <div class="schedule-picker-morning">
            <span class="avaiable-schedule">09:00</span>
            <span class="avaiable-schedule">09:00</span>
            <span class="avaiable-schedule">09:00</span>
          </div>
        </div>
      </div>
      <div class="client-dropdown">
        <p class="schedule-picker-subtitle">Cliente</p>
      </div>
      <div class="select-customer">
        <DropdownButton />
      </div>
      <div class="schedule-submit">
        <button class="submit-schedule">AGENDAR</button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'HairDaySchedules'
});
import DropdownButton from '../components/DropdownButton.vue';
import DpCalendar from '@/components/DpCalendar.vue'
</script>
<style>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container-schedules {
  display: flex;
  /* min-height: 100vh; */
}

img {
  /* margin-block: 1.5rem; */
  width: 150px;
}

.schedule-container {
  background-color: var(--color-gray-700);
  padding-inline: 3rem;
  /* max-width: 40%; */
  min-height: 95%;
  /* border: 1px solid red; */
}

.schedule-title {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  /* border: 1px solid green; */

  h2 {
    margin-block: 1rem;
    font-size: 32px;
  }

  p {
    margin-top: 0;
  }
}

.select-customer {
  display: flex;
  /* border: 1px solid blue; */
}

.schedule-input-title {
  font-weight: 700;
}

.schedule-picker {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.schedule-picker-title {
  font-weight: 700;
}

.schedule-picker-morning {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .5rem;
}

.avaiable-schedule {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-600);
  padding: .5rem;
  border-radius: .5rem;
}

.schedule-picker-container {
  min-height: 7rem;
}

.schedule-submit {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.submit-schedule {
  color: var(--color-gray-600);
  font-family: var(--font-family-base);
  font-weight: 800;
  padding: .8rem;
  width: 50%;
  background-color: var(--color-yellow);
  border: none;
  border-radius: 1rem;
}

</style>
