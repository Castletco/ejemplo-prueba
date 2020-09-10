<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/question">Add a Question</router-link> |
      Logged in
      <span v-if="loggedIn">Yes</span>
      <span v-else>No</span>
      <div class="button">
        <button @click="signOut">Sign Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '@/firebase'

export default {
  name: 'Top-Header',
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    })
  },
  data () {
    return {
      loggedIn: false
    }
  },
  methods: {
    async signOut () {
      try {
        await firebase.auth().signOut()
        console.log(db)
        await this.$router.replace({ name: 'Login' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
