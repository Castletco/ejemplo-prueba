<template>
  <div>
    Logged in
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <div class="button">
      <button @click="signOut">Sign Out</button>
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
        const data = await firebase.auth().signOut()
        console.log(data)
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
