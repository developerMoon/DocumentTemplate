<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
    <img src="./dist/images/upload/plugin1.png">
    <HelloWorld1/>
     <h2>{{ $t("hello") }}</h2>
     <button @click="switchLang('ko')">ko</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld1 from './components/HelloWorld.1.vue'
import i18n from './i18n/index'

export default {
  name: 'app',
  components: {
    HelloWorld: HelloWorld,
    HelloWorld1: HelloWorld1
  },
  methods: {
    switchLang: function(lang){
      if (lang in vue.$i18n.messages){
        console.log('no ajax')
        this.$i18n.locale=lang
      }else{
        this.loadLocalMessage(lang, (err, message) => {
          if (err){
            console.error(err)
            return
          }
          i18n.setLocaleMessage(lang, message)
          this.$i18n.locale = lang
        })
      }
    },
    loadLocalMessage: function(locale, cb){
      console.log('locale',locale);
      return fetch(`./src/lang/${locale}.json`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'applicaion/json'
        }
      }).then((res) => {
          console.log('success');
        return res.json()
      }).then((json) => {
        if (Object.keys(json).length === 0) {
          return Promise.reject(new Error('locale empty'))
        } else {
          return Promise.resolve(json)
        }
      }).then((message) => {
        cb(null, message)
      }).catch((error) => {
        cb(error)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
