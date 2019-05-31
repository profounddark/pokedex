<template>
  <div id="app">
    <navigation></navigation>
    <h1 class="pokename"> {{ pokemonData.name }} </h1>
    <img v-bind:src="pokeimage" class="pokeimage">
    <div>
      <input type="radio" id="normal" name="imagetype" v-bind:value="pokenormal" checked v-model="pokeimage">
      <label for="normal">Normal</label>
    
      <input type="radio" id="shiny" name="imagetype" v-bind:value="pokeshiny" v-model="pokeimage">
      <label for="shiny">Shiny</label>
    </div>
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
      pokeimage: null,
      pokenormal: null,
      pokeshiny: null
    }
  },
  created () {
    if (this.$route.params.pokemonData)
    {
      this.pokemonData = this.$route.params.pokemonData;
      this.pokenormal = this.pokemonData.sprites.front_default; 
      this.pokeshiny = this.pokemonData.sprites.front_shiny; 
      this.pokeimage = this.pokenormal;
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
  width: 30%;
  border: solid;
  border-radius: 10%;
}

label
{
  margin-right: 2rem;
}
</style>
