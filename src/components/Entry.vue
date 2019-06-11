<template>
  <div>
    <navigation></navigation>
    <h1 class="pokename"> {{ pokemonData.name }} </h1>
    <p>National Pokédex # {{ pokemonData.id }} </p>
    <a v-bind:href="pokeimage.link"><img v-bind:src="pokeimage.image" class="pokeimage" v-bind:alt="pokemonData.name"></a>

    <h2 v-for="pokegenus in pokemonData.genera" v-if="pokegenus.language.name=='en'"> {{ pokegenus.genus }} </h2>

    <h2>Pokedéx Entries:</h2>
    <div v-for="pokeflavor in pokemonData.flavor_text_entries" v-if="pokeflavor.language.name=='en'">
      <accordion v-bind:title="pokeflavor.version.name">
        <p> {{ pokeflavor.flavor_text }} </p>
      </accordion>
    </div>
    
    
  </div>
</template>

<script>

import axios from 'axios';
import Navigation from '@/components/Navigation.vue';
import Accordion from '@/components/Accordion.vue';

export default {
  name: 'Entry',
  data () {
    return {
      pokemonData: null,
      pokeimage: null,
      pokenormal: null
    }
  },
  created () {
    if (this.$route.params.pokemonData)
    {
      this.pokemonData = this.$route.params.pokemonData;
      this.pokenormal = { image: "https://img.pokemondb.net/sprites/x-y/normal/" + this.pokemonData.name + ".png", link: "http://pokemondb.net/pokedex/" + this.pokemonData.name};
      this.pokeimage = this.pokenormal;
    }
    else
    {
      this.$router.push('/');
    }
  },
  components: {
    'navigation': Navigation,
    'accordion': Accordion
  }
}

</script>

<style>

.pokeimage
{
  width: 95%;
  border: solid;
  border-radius: 10%;
}



</style>
