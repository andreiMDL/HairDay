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
        <img src="/public/assets/yellow-sun-horizon.svg" alt="">
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
   /* border: 1px solid red; */
   flex: 2;
}

.my-agenda-header {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
}

.my-agenda-title {

  h1 {
    margin-bottom: 0;
  }
}

.container-datepicker {
  margin-right: 0;
  border: 1px solid red;
  margin-block: auto;
}

</style>
