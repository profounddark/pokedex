<template>
  <div class="selector">
    <navigation></navigation>
    <h1>Welcome to the PokéDex!</h1>
    <p>Choose a Regional Pokédex:</p>
    <select v-model="dexchoose" v-on:change="getPokedexData" class="mainselect">
      <option disabled value=" ">Please select a Pokédex</option>
      <option v-for="option in dexoptions" v-bind:value="option.value" v-bind:key="option.value">
        {{ option.text }}
      </option>
    </select>
    <select v-model="pokemon" v-if="pokedex && pokedex.length > 0">
      <option disabled value=" ">Please select a Pokémon</option>
      <option v-for="pokemonentry in pokedex" v-bind:value="pokemonentry.pokemon_species" v-bind:key="pokemonentry.pokemon_species.name">
        {{ pokemonentry.entry_number + " - " + pokemonentry.pokemon_species.name }}
      </option>
    </select>
    <button v-if="pokemon" v-on:click="getPokemonData">View the Pokédex Entry for <span v-if="pokemon" class="pokename">{{ pokemon.name }}</span></button>
    <cube-spinner v-if="showLoading"></cube-spinner>

    <error-list v-bind:errorList="errors"></error-list>

  </div>
</template>

<script>

import axios from 'axios';
import ErrorList from '@/components/ErrorList.vue';
import CubeSpinner from '@/components/CubeSpinner.vue';
import Entry from '@/components/Entry.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Home',
    data () {
    return {
      showLoading: false,
      dexchoose: null,
      pokemon: null,
      dexoptions: [
        {text: "National Pokédex", value: 1},
        {text: "Kanto Region Pokédex", value: 2},
        {text: "Johto Region Pokédex", value: 3},
        {text: "Hoenn Region Pokédex", value: 4},
        {text: "Sinnoh Region Pokédex", value: 5},
        {text: "Unova Region Pokédex", value: 8},
        {text: "Coastal Kalos Region Pokédex", value: 13},
        {text: "Mountain Kalos Region Pokédex", value: 14}
      ],
      pokedex: null,
      pokedata: null,
      errors: []
    }
  },
  methods: {
    getPokedexData: function () {
      this.pokedex = null;
      this.showLoading = true;

      let cacheLabel = 'dexSearch' + this.dexchoose;
      let cacheExpiry = 15 * 60 * 1000; // 15 minutes

      if (this.$ls.get(cacheLabel)){
        console.log('Cached Pokedéx detected.');
        this.pokedex = this.$ls.get(cacheLabel);
        this.pokemon = null; // reset the pokemon
        this.showLoading = false;
      }
      else {
        axios.get('https://pokeapi.co/api/v2/pokedex/' + this.dexchoose)
        .then(response => {
          console.log("Loading the " + response.data.names[2].name + " Region Pokédex!");
          this.$ls.set(cacheLabel, response.data.pokemon_entries, cacheExpiry);
          console.log("Caching this Pokédex as: " + cacheLabel);
          this.pokemon = null; // Reset the pokemon
          this.pokedex = response.data.pokemon_entries;
          this.showLoading = false;

        })
        .catch(error => {
          this.errors.push(error);
        });
      }
    },
    getPokemonData: function () {
      
      this.showLoading = true;

      let cacheLabel = 'pokeSearch' + this.pokemon.name;
      let cacheExpiry = 15 * 60 * 1000; // 15 minutes

      if (this.$ls.get(cacheLabel)){
        console.log('Cached Pokémon data detected.');
        this.pokedata = this.$ls.get(cacheLabel);
        this.showLoading = false;
        this.$router.push({ name: 'entry', params: { pokemonData: this.pokedata } });
      }
      else {
        axios.get(this.pokemon.url)
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
  components: {
    'error-list': ErrorList,
    'cube-spinner': CubeSpinner,
    'entry': Entry,
    'navigation': Navigation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



.disabled
{
  display: none;
}


select
{
  width: 25rem;
  max-width: 90%;
  margin: 0.25rem auto;
  display: block;
  text-transform: capitalize;
  font-size: 1rem;
}

button
{
  margin-top: 0.5rem;
  font-size: 1rem;
}


.pokename
{
  text-transform: capitalize;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
