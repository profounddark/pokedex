<template>
  <div>
    <navigation></navigation>

    <h1 class="pokename"> {{ pokemonData.name }} </h1>

    <p class="pokeheader">National Pokédex #{{ pokemonData.id }} </p>
    <select v-model="variantchoose" v-if="pokemonData.varieties.length > 1">
      <option v-for="(variant, index) in pokemonData.varieties" v-bind:value="index" v-bind:key="variant.pokemon.name">
        {{ variant.pokemon.name }}
      </option>
    </select>
    <a v-bind:href="pokeimage.link">
    <div class="pokeimage">
      <img v-bind:src="pokeimage.image" v-bind:alt="pokemonData.name">
    </div>
    </a>
    


    <h2 class="pokeheader" v-for="pokegenus in pokemonData.genera" v-if="pokegenus.language.name=='en'"> {{ pokegenus.genus }} </h2>

    <div class="statblock">
      <h3>Height: 1'2"</h3>
      <h3>Weight: 1lbs</h3>
    </div>

    <h2 class="pokeheader">Pokedéx Entries:</h2>
    <div v-for="pokeflavor in pokemonData.flavor_text_entries" v-if="pokeflavor.language.name=='en'">
      <accordion v-bind:title="pokeflavor.version.name">
        <p class="flavortext"> {{ pokeflavor.flavor_text }} </p>
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
      pokenormal: null,
      variantchoose: 0,
      pokeVariant: []
    }
  },
  getPokeVariantData: function () {  
    let cacheLabel = 'pokeVariant' + this.pokemonData.name;
    let cacheExpiry = 15 * 60 * 1000; // 15 minutes

    if (this.$ls.get(cacheLabel)){
      console.log('Cached Pokémon data detected.');
      this.pokeVariant = this.$ls.get(cacheLabel);


    }
    else {
      for (index = 0; index < this.pokemonData.varieties.length; index++)
      {
      axios.get(this.pokemonData.varieties[index].url)
        .then(response => {
          console.log("Loading the " + response.data.name + " Pokédex data!");
          this.$ls.set(cacheLabel, response.data, cacheExpiry);
          console.log("Caching this Pokédex as: " + cacheLabel);
          this.pokedata = response.data;
          this.showLoading = false;
          this.$router.push({ name: 'entry', params: { pokemonData: this.pokedata } });
        })
        .catch(error => {
          this.errors.push(error);
        });
      }

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

.pokeheader
{
  background-color:#111;
  color: white;
  margin: 0;
  padding: .25rem;
}
.pokeimage
{
  width: 95%;
  margin: 0 auto;
}

img
{
  width: 100%;
}

.statblock
{
  display: flex;
  justify-content: space-around;
}

.flavortext
{
  margin: 1rem;
}

</style>
