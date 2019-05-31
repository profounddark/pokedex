<template>
  <div id="app">
    <h1>Welcome to the PokéDex!</h1>
    <h2 class="pokename"> {{ pokemonData.name }} </h2>
    <img v-bind:src="image" class="pokeimage">
    
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Entry',
  data () {
    return {
      pokemonData: null,
      pokeimage: null
    }
  },
  created () {
    this.pokemonData = this.$route.params.pokemonData;
    this.image = this.pokemonData.sprites.front_default;
  },
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
  color: #2c3e50;
  margin-top: 60px;
}


.pokeimage
{
  width: 50%;
}
</style>
