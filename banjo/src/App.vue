<template>
<body class="body">
  <div id="app">
    <ToolBar></ToolBar>
    <router-view/>
  </div>
  </body>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
export default {
  name: 'App',
    components: {
    ToolBar
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
  background-color: #4bc7cb;

}
.body {
display: block;
height: 100%;
margin-left: -8px;
margin-right: -8px;
}
</style>
