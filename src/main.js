import 'babel-polyfill'
import Vue from 'vue'
import VueMatchHeights from 'vue-match-heights'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueMatchHeights, {
  disabled: [640]
});

new Vue({
  render: h => h(App)
}).$mount('#app')
