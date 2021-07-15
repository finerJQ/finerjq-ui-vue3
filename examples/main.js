import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import jqUI from './../packages'

// Setup browser title.
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: '/zh-CN' });
  }
  else {
    next()
  }
});

let app = createApp(App);
app.use(jqUI).use(router);
app.mount('#app');
