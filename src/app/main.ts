import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import './style.css'
import App from './App.vue'
import Aura from '@primevue/themes/aura'
import router from "./providers/router";
import pinia from "./providers/store";
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(pinia);

app.use(ToastService);

app.use(PrimeVue, {
    theme:{
        preset: Aura,
    }
});
app.use(router);

app.mount('#app');
