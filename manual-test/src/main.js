import Vue from 'vue';
import App from './App.vue';
import VueImg from '../../dist/v-img';

Vue.use(VueImg, {
  altAsTitle: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
