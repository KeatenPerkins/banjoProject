<template>
  <div class="body" id="login-container">
    <h1>Login Test</h1>

    <input type="email" name="email" v-model="email" placeholder="email" />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br>
    <div class="error-alert" v-html="error" />
    <button class="log-btn" @click="login">Login</button>

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
  methods: {
    async login () {
      try {
        const response = await RegisterUser.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
#login-container {
  width:100%;
  height:30rem;
}
.log-btn {
  margin-top:2rem;
}
</style>
