<template>
  <div id="app">
    <navigation></navigation>
    <h1 class="pokename"> {{ pokemonData.name }} </h1>
    <a v-bind:href="pokeimage.link"><img v-bind:src="pokeimage.image" class="pokeimage" v-bind:alt="pokemonData.name"></a>
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
      this.pokenormal = { image: "https://img.pokemondb.net/sprites/x-y/normal/" + this.pokemonData.name + ".png", link: "http://pokemondb.net/pokedex/" + this.pokemonData.name};
      this.pokeshiny = { image: "https://img.pokemondb.net/sprites/x-y/shiny/" + this.pokemonData.name + ".png", link: "http://pokemondb.net/pokedex/" + this.pokemonData.name};
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

@media only screen and (max-width: 600px) {
  .pokeimage
  {  
    width:90%;
  }
}

</style>
