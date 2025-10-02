<template>
  <div class="container">
    <Schedules />
    <MyAgenda />
  </div>
</template>
<script setup>
import MyAgenda from './MyAgenda.vue';
import Schedules from './Schedules.vue';

</script>
<style>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}

</style>
