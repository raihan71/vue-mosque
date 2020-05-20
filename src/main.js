import Vue from 'vue'
import firebase from 'firebase'
import VueTruncate from 'vue-truncate-filter'
import VueCarousel from 'vue-carousel';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueTruncate)
Vue.use(VueCarousel);

firebase.initializeApp({
 // apiKey of your fav mosque,
// other settings firebase goes here
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
