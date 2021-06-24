<template>
    <div class="list bg-red-50 mx-4 border-blue-400 border-4 my-6 rounded-xl">
        <div @click="findPokemon(pokemon)" v-for="(pokemon, i) in pokelist" :key="i" class="flex items-center justify-between list-pokemon mx-2 my-1">
            <div class="flex items-center text-xl">
                <img class="mx-1 mb-1 pksprite" :src="'https://play.pokemonshowdown.com/sprites/gen5icons/' + (parseInt(i) + 1) + '.png'">
                <div :class="selected == pokemon.name ? 'text-yellow-500' : ''">{{'#' + (i + 1) + ' ' + pokemon.name[0].toUpperCase() + pokemon.name.substr(1, pokemon.name.length)}}</div>
            </div>
            <img class="pkball" src="../assets/images/pokeball.png" height="35px" width="35px">
        </div>
    </div>
</template>

<style scoped>
    .list{
        overflow-y:scroll;
        height:56vh;
        width:90%;
    }
    .list-pokemon:hover .pkball{
        animation: turn 2s infinite;
    }

    .list-pokemon:hover{
        height:50px
    }

    .list-pokemon:hover .pksprite{
        animation: jump 1s infinite;
    }

    .list-pokemon{
        cursor:pointer;
        border:black 1px solid;
        border-radius:40px;
        height:45px
    }
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        height: 2px;
        margin-top:10px;
        margin-bottom:10px
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(255, 119, 119);
    }
    ::-webkit-scrollbar-thumb:hover {
        border:rgb(252, 76, 76) 2px solid;
    }
</style>

<script>
    import pokeService from '../services/pokemonService'
    export default{
        name:'pokelist',
        computed:{
            pokelist(){
                return this.$store.state.pokedex.pokemon
            }
        },
        data(){
            return {
                selected:''
            }
        },
        methods:{
            findPokemon(pokemon){
                this.selected = pokemon.name;
                pokeService.getPokemonByName(this.selected).then(res=>{
                    pokeService.getPokemonFamily(this.selected).then(res2=>{
                        this.$store.commit('pokedex/changeSelectedPokemon', res)
                        this.$store.commit('pokedex/changeSelectedPokemonFamily', res2)
                    })
                })
                
            }
        }
    }
</script>