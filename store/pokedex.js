export const state = () => ({
    pokemon: [],
    types: [],
    selectedPokemon: {},
    selectedPokemonFamily: {}
  })
  
  export const mutations = {
    loadPokemon(state, pokemon) {
      state.pokemon = pokemon
    },
    loadTypes(state, types) {
      state.types = types
    },
    changeSelectedPokemon(state, pokemon){
      state.selectedPokemon = pokemon
    },
    changeSelectedPokemonFamily(state, pokemon){
      state.selectedPokemonFamily = pokemon
    }
  }