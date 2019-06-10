# pokedex

## Overview
The Pokédex is a web app built in Vue, axios, and several Vue components. It pulls data from the [PokeAPI](https://pokeapi.co/). It allows the user to select a specific Pokédex (from those provided by the API) and then select a specific Pokémon to review.

### Features
1. Allows user to select one of EIGHT different Pokédexes. Retrieves Pokédex information from API.
2. Allows user to select individual Pokémon from those available in the chosen Pokédex.
3. Pulls specific information from the associated Pokémon and displays it in a separate "Entry" page.
4. Caches Pokédex and Pokémon Species data to minimize unnecessary API calls.

### To Be Done
1. Retrieve additional information and display it in the "Entry" page.
2. Additional CSS and page styling.
3. Implement a means for the user to mark a Pokémon as a *favorite* Pokémon.
4. Display all user favorites on a separate page.
5. Complete the About page.

## Project setup
Install all of the necessary packages.
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
Currently set up to output to the /docs/ folder (for deployment on GitHub Pages). See the vue.config.js file.
```
npm run build
```