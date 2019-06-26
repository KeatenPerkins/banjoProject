<template>
  <div id="register-container">
    <h1>Register Test</h1>

    <input type="email" name="email" v-model="email" placeholder="email" />
    <input type="password" name="password" v-model="password" placeholder="password" /><br>
    <div class="error-alert" v-html="error" />
    <button class="reg-btn" @click="register">Register</button>

  </div>
</template>

<script>
import RegisterUser from '@/services/RegisterUser'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // Debuging values.
  watch: {
    email (value) {
      console.log('email is: ', value)
    }
  },
  methods: {
    async register () {
      try {
        const response = await RegisterUser.registerUser({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // console.log(response.data)
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#register-container{
    width:100%;
    height:30rem;
}

.reg-btn{
  margin-top:2rem;
}
</style>
