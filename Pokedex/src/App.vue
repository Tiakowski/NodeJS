<template>
    <div id="app">
      <img src="./assets/pokedexlogo.png" alt="">
      <hr>
      <div class="column is-half is-offset-one-quarter">
        <input type="text" class="input is-rounded" placeholder="Buscar pokemon" v-model="busca">
        <button class="button is-warning" id="buscaBtn" @click="buscar">Procurar</button>
          <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
            <componente-pokemon :name="poke.name" :url="poke.url" :num="index + 1"/>
          </div>
      </div>

    </div>
</template>

<script>
import axios from 'axios';
import componentePokemon from "./components/componentePokemon.vue"

export default {
  name: 'App',
  data(){
    return {
      pokemons: [],
      filteredPokemons: [],
      busca: ''
    }
  },
  created: function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then( res => {
      this.pokemons = res.data.results;
      this.filteredPokemons = res.data.results;
    }).catch( err => {
      console.log(err)
    })
  },
  components: {
    componentePokemon
  },
  methods: {
    buscar: function(){
      this.filteredPokemons = this.pokemons;
      if(this.busca == '' || this.busca == ' '){
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.busca);
      }
    }
  },
  computed: {
    /*
    resultadoBusca: function() {
      if(this.busca == '' || this.busca == ' '){
        return this.pokemons
      } else {
        return this.pokemons.filter(pokemon => pokemon.name == this.busca)
      }
    }
     */
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#buscaBtn{
  margin-top: 2%;
}
</style>
