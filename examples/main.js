import { createApp } from 'vue'
import App from './App.vue'

import jqUI from './../packages'

let app = createApp(App);
app.use(jqUI);
app.mount('#app');
