let Pokedex = require('pokedex-promise-v2');
const pokeApi = new Pokedex();

class PokeService{
    getAllPokemon(){
        return pokeApi.getPokemonsList({limit:151, offset:0})
    }
    getPokemonByName(name){
        return pokeApi.getPokemonByName(name)
    }
    getPokemonTypes(){
        return pokeApi.getTypesList()
    }
    getPokemonFamily(name){
        return pokeApi.getPokemonSpeciesByName(name)
    }
}

export default new PokeService;