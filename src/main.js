import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/lang'
import VueI18n from 'vue-i18n'
import store from './store'

Vue.use(VueI18n)
Vue.config.productionTip = false
/*
//default local설정
const locale='en'

const messages={
  en: en,
  kr: kr
}*/
/*
const i18n = new VueI18({
  locale,
  messages
})*/
//export vue instance as a variable
export const app = new Vue({  
  el: '#app',
  store,
  i18n,
  render: h => h(App)
})

window['vue'] = app
window.store = store
//export default i18n