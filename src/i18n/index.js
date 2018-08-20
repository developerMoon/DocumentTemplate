import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'
//import ko from '@/lang/ko'

Vue.use(VueI18n)

const locale='en'

const messages = {
  en
}

const i18n = new VueI18n({
  locale,
  messages 
})

export default i18n