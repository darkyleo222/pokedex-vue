<template>
    <div class="flex justify-center mt-4">
        <pokedex></pokedex>
    </div>
</template>

<style>
    *{
        font-family: "Pokemon DS Font";
    }
    body{
        background-color:rgb(96 165 250)
    }
</style>

<script>
    import pokedex from "../components/pokedex.vue"
    import pokeService from "../services/pokemonService"

    export default {
        components:{
            pokedex
        },
        head(){
            return{
                title: 'Vue.js Pokedex',
                meta:[
                    {
                        name:"viewport",
                        content:"width=device-width,initial-scale=1"
                    }
                ]
            }
        },
        created(){
            pokeService.getAllPokemon().then((response) =>{                
                this.$store.commit('pokedex/loadPokemon', response.results)
            })
            pokeService.getPokemonTypes().then((response) =>{                
                this.$store.commit('pokedex/loadTypes', response.results)
            })
        }
    }
</script>