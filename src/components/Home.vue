<template>
  <div class="hello">
    <p>Choose a Regional Pokédex:</p>
    <select v-model="dexchoose" v-on:change="getPokedexData" class="mainselect">
      <option disabled value=" ">Please select a Pokédex</option>
      <option v-for="option in dexoptions" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select v-model="pokemon" v-if="pokedex && pokedex.length > 0">
      <option disabled value=" ">Please select a Pokémon</option>
      <option v-for="pokemonentry in pokedex" v-bind:value="pokemonentry.pokemon_species.name">
        {{ pokemonentry.entry_number + " - " + pokemonentry.pokemon_species.name }}
      </option>
    </select>
    <button>View the Pokédex Entry for <span class="pokename">{{ pokemon }}</span></button>
    
    <error-list v-bind:errorList="errors"></error-list>

  </div>
</template>

<script>

import axios from 'axios';
import ErrorList from '@/components/ErrorList';

export default {
  name: 'Home',
    data () {
    return {
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
      errors: []
    }
  },
  methods: {
    getPokedexData: function () {
      this.pokedex = null;
      // this.showLoading = true;

      let cacheLabel = 'pokeSearch_dex' + this.dexchoose;
      let cacheExpiry = 15 * 60 * 1000; // 15 minutes

      if (this.$ls.get(cacheLabel)){
        console.log('Cached Pokedéx detected.');
        this.pokedex = this.$ls.get(cacheLabel);
        this.pokemon = null; // reset the pokemon
        this.showLoading = false;
      }
      else {
        axios.get('http://pokeapi.co/api/v2/pokedex/' + this.dexchoose)
        .then(response => {
          console.log("Loading the " + response.data.names[2].name + " Region Pokédex!");
          this.$ls.set(cacheLabel, response.data.pokemon_entries, cacheExpiry);
          console.log("Caching this Pokédex as: " + cacheLabel + this.dexchoose);
          this.pokemon = null; // Reset the pokemon
          this.pokedex = response.data.pokemon_entries;

        })
        .catch(error => {
          this.errors.push(error);
        });
      }
    }
  },
  components: {
    'error-list': ErrorList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

select
{
  width: 20rem;
  max-width: 90%;
  margin: 0 auto;
  display: block;
  text-transform: capitalize;
}

.pokename
{
  text-transform: capitalize;
}
h3 {
  margin: 40px 0 0;
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
