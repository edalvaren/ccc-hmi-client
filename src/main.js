import Vue from 'vue'
import App from './App.vue'
import filters from './helpers/filters'
import {router, http} from './http'
import store from './store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import {sync} from 'vuex-router-sync'

/* Vuetify Options */
import './styles/stylus/main.styl';
import Vuetify from 'vuetify';
import VuetifyOptions from './plugins/vuetify-options';
import VueLodash from 'vue-lodash';

import { ValidationProvider } from 'vee-validate'; // Form Validation

import io from 'socket.io-client'
import VueSocketio from 'vue-socket.io-extended'

// Sync router to store, as `store.state.route`.
sync(store, router);

const socketInstance = io(process.env.VUE_APP_SOCKET_URL);


Vue.use(Vuetify, VuetifyOptions);
Vue.use(http);
Vue.use(require('vue-moment'));
Vue.use(VueLodash);
Vue.use(VueSocketio, socketInstance, { store });
Vue.use(filters);

Vue.component('ValidationProvider', ValidationProvider);



//Styles
import './styles/stylus/main.styl';

Vue.config.productionTip = false;




window.app = new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app');
