import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore'
import { db } from './firebase'
import firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueFirestore, { key: 'id' })
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

console.log(db)

firebase.auth().onAuthStateChanged(user => {
  // store.state.usuario = user
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
