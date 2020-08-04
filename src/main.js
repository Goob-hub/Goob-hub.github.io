import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './icons.js'
import Appear from '@/components/Appear.vue';


Vue.component('Appear', Appear);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
