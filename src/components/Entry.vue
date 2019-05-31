<template>
  <div id="app">
    <navigation></navigation>
    <h1 class="pokename"> {{ pokemonData.name }} </h1>
    <img v-bind:src="image" class="pokeimage">
    <h2>National Pokédex # {{ pokemonData.id }} </h2>
  </div>
</template>

<script>

import axios from 'axios';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Entry',
  data () {
    return {
      pokemonData: null,
      pokeimage: null
    }
  },
  created () {
    if (this.$route.params.pokemonData)
    {
      this.pokemonData = this.$route.params.pokemonData;
      this.image = this.pokemonData.sprites.front_default;  
    }
    else
    {
      this.$router.push('/');
    }
  },
  components: {
    'navigation': Navigation
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

h1
{
  margin: 0;
}
h2
{
  margin: 0;
}
.pokeimage
{
  width: 25%;
  border: solid;
  border-radius: 10%;
}
</style>
