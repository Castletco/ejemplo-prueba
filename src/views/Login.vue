<template>
  <div>
    Login
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="email" v-model="email" placeholder="login">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    <span>Need an account? Click here to <router-link to="/register">register</router-link> </span>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '@/firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async pressed () {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(db)
        await this.$router.replace({ name: 'Wall' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>
