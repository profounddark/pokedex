<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 30rem;
  margin: 0 auto auto;
  background-color: white;
  border: solid;
  border-color: black;
  min-height: 100vh;
}

body
{
  background-color: darkgray;
}
h1
{
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
}

h2
{
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}

p
{
  margin: .25rem;
  padding: 0;
  font-size: 1.2rem;
}

body
{
  margin: 0;
  padding: 0;
}

div
{
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 600px) {
  #app
  {
    width: 100%;
  }
}
</style>
