import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ptBR } from 'date-fns/locale';

import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App)

app.component('VueDatePicker', VueDatePicker);
app.config.globalProperties.$datepicker = {
  locale: ptBR
};

app.use(createPinia())
app.use(router)

app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
