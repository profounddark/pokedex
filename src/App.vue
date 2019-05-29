<template>
  <div id="app">
    <nav>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/entry">Go to Entry</router-link>
    </nav>
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

</style>
