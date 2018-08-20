<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld />
    <!--<img src="./dist/images/upload/plugin1.png">-->
    <HelloWorld1/>
     <h2>{{ $t("hello") }}</h2>
     <p>{{ $tc('hello') }}</p>
     <p>{{ $tc('car') }}</p>
     <h3>with vuex</h3>
     <button @click="setLang('ko')">ko</button>
     <h3>without vuex</h3>
     <button @click="switchLang('ko')">ko</button>
      <h3>dynamic locale</h3>
     <button @click="setLangNew('ko')">ko</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld1 from './components/HelloWorld.1.vue'
import i18n from './lang/lang'

export default {
  name: 'app',
  components: {
    HelloWorld: HelloWorld,
    HelloWorld1: HelloWorld1
  },
  methods: {
     //without Vuex
    switchLang: function(lang){
      if (lang in vue.$i18n.messages){
        //console.log('no ajax')
        this.$i18n.locale = lang
      } else {
        this.loadLocalMessage(lang, (err, message) => {
          if (err){
            //console.error(err)
            return
          }
          i18n.setLocaleMessage(lang, message)
          this.$i18n.locale = lang
        })
      }
    },
    setLangNew: function(lang){
      this.$store.dispatch('setLangNew', lang)
    },
    //with Vuex
    setLang: function(lang){
      this.$store.dispatch('setLang', lang)
     //console.log('setlang')
    },
   
    loadLocalMessage: function(locale, cb){
      //console.log('locale',locale);
      return fetch(`./lang/${locale}.json`, { //o
        method: 'get', //get failed
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'applicaion/json'
        }
      }).then((res) => {
          //console.log('success'); //0
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
  },
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
