// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';
// import 'nprogress/nprogress.css';
import 'md-editor-v3/lib/style.css';

// createApp(App).use(store).use(router).mount('#app');

import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes } from './router';
import store from './store';

export const createApp = ViteSSG(App, { routes }, ({ app, router, initialState }) => {
  app.use(store);

  if (import.meta.env.SSR) initialState.store = store.state;
  else store.replaceState(initialState.store || store.state);

  router.beforeEach((to, from, next) => {
    // perform the (user-implemented) store action to fill the store's state
    // if (!store.getters.ready) store.dispatch('initialize');

    next();
  });
});
