import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.filter('truncate', (value, limit) => {
  if (value.length > limit) {
    value = value.substring(0, limit - 3) + '...';
  }
  return value;
});

Vue.use(require('vue-moment'));

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
