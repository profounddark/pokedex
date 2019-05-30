import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueLocalStorage from 'vue-ls';

let options = {
  namespace: 'pokedex_'
};

Vue.use(VueLocalStorage, options);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
