<template>
  <div class="container-my-agenda">
    <div class="my-agenda-header">
      <div class="my-agenda-title">
        <h1>Sua Agenda</h1>
        <span>Consulte os seus cortes de cabelo agendados por dia</span>
      </div>
      <div class="container-datepicker">
        <DpCalendar />
      </div>
    </div>
    <div class="list-container">
      <div class="morning-list-container">
        <div class="morning-list-header">
          <img src="/public/assets/yellow-sun-horizon.svg" alt="">
          <span>Manhã</span>
        </div>
        <div class="morning-list-body">
          <ul class="schedule-item-list">
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="evening-list-container">
        <div class="evening-list-header">
          <img src="/public/assets/yellow-cloud-sun.svg" alt="">
          <span>Tarde</span>
        </div>
        <div class="evening-list-body">
          <ul class="schedule-item-list">
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="night-list-container">
        <div class="night-list-header">
          <img src="/public/assets/yellow-moon-stars.svg" alt="">
          <span>Tarde</span>
        </div>
        <div class="night-list-body">
          <ul class="schedule-item-list">
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
            <li class="schedule-item">
              <span class="scheduled-time">09:00</span>
              <span class="scheduled-customer">Helena Souza</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DpCalendar from '@/components/DpCalendar.vue';

defineOptions({
  name: 'HairDaySchedules'
});

</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.container-my-agenda {
  padding: 4rem 6rem;
  background-color: var(--color-gray-800);
  display: flex;
  flex-direction: column;
  box-shadow: inset 5px 0 20px var(--color-gray-900);
  flex: 2;
}

.my-agenda-header {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.my-agenda-title {
  h1 {
    margin-bottom: 0;
    margin-block: auto;
  }
}

.container-datepicker {
  margin-right: 0;
  margin-block: auto;
}

.morning-list-container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  img {
    width: 35px;
    margin-right: .8rem;
  }
}

.morning-list-header {
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border: 1px solid var(--color-gray-600);
  display: flex;
  margin-block: auto;
  align-items: center;
  justify-items: center;
}

.morning-list-body {
  border: 1px solid var(--color-gray-600);
  border-top: none;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: larger;
}


.scheduled-time {
  font-weight: 600;
  margin-right: 1.5rem;
}

.evening-list-container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  img {
    width: 35px;
    margin-right: .8rem;
  }
}

.evening-list-header {
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border: 1px solid var(--color-gray-600);
  display: flex;
  margin-block: auto;
  align-items: center;
  justify-items: center;
}

.evening-list-body {
  border: 1px solid var(--color-gray-600);
  border-top: none;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: larger;
}

.night-list-container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  img {
    width: 35px;
    margin-right: .8rem;
  }
}

.night-list-header {
  padding: 1rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border: 1px solid var(--color-gray-600);
  display: flex;
  margin-block: auto;
  align-items: center;
  justify-items: center;
}

.night-list-body {
  border: 1px solid var(--color-gray-600);
  border-top: none;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: larger;
}

.schedule-item-list {
  appearance: none;
  list-style: none;
  /* border: 1px solid red; */
}

.schedule-item {
  padding-block: 1rem;
}
</style>
