<template>
  <div>
    <div class="tool-bar">
      <ul>
        <li><router-link to="/home">Banjo</router-link></li>
        <li><router-link v-if="!$store.state.isUserLoggedIn" to="/register">Register</router-link></li>
        <li style="float:right"><router-link v-if="!$store.state.isUserLoggedIn" class="active" to="/login">Login</router-link></li>
        <li style="float:right" v-if="$store.state.isUserLoggedIn" class="active" @click="logout">Log Out</li>
    </ul>
    </div>
    <div class="banner">
        <img class="logo" src="../assets/banjo.png">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tool-bar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  overflow-x: hidden;
  margin:0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;

}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4bc8cb;
}

.active:hover {
    background-color: #3caaad;
}

.logo {
    position: static;
    margin: 0 auto;
    background-size: contain;
    width: 329px;
    height: 150px;
  }
.banner {
    margin:0;
    background-image: url('../assets/streets.jpg');
    padding:6rem 4rem 8rem 4rem;
    height: 4rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width:100%
  }

</style>
