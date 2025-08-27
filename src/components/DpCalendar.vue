<template>
  <VueDatePicker v-model="date" class="custom-datepicker"></VueDatePicker>
</template>
<script>

</script>
<style>
.custom-datepicker {
  --dp-icon-color: var(--color-yellow);
  --dp-background-color: var(--color-gray-700);
  --dp-border-color: var(--color-gray-400);
  --dp-border-radius: 2rem;

  --dp-input-padding: 1rem 30px 6px 12px;
  --dp-border-color-hover: var(--color-yellow);
}

.custom-datepicker .dp__input {
  box-shadow: inset 0 0 10px black;
}

.custom-datepicker .dp__input:hover {
  box-shadow: inset 0 0 10px black,
    0 0 10px rgb(255, 174, 0);
}

.dp__menu {
  background-color: var(--color-gray-600);
  border: 1px solid var(--color-gray-800);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  /* color: #fff; */
}

.dp__today {
  color: #fff;
  border: none;
  background-color: var(--color-gray-500);
}

.dp__active_date {
  background-color: var(--color-gray-500);
  border: 1px solid var(--color-yellow);
  color: var(--color-yellow);
}

.dp__cell_offset {
  color: var(--color-gray-400) !important;
}

.dp__arrow_top {
  display: none;
}
</style>
