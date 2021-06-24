<template>
    <div class="flex flex-col justify-center items-center poke-container" v-if="pokemon.name">
        <pokesprite :pokemon="pokemon"></pokesprite>
        <poketext :pokemon="pokemon" :pokemonFamily="pokemonFamily"></poketext>
    </div>
</template>

<style scoped>
    .sprite{
        width:200px;
        height:200px;
    }
    .poke-container{
        margin-top:25px;
    }
    .info{
        width:270px;
        height:312px
    }
    @media (max-width: 600px) {
        .poke-container{
            flex-direction:row;                   
        }
        .info{
            width:180px;
            margin-top:0px;
            height:325px;
        }
        .sprite{
            margin-right:5px;
            width:180px;
            height:325px;
        }
        
    }
</style>

<script>
    import poketext from './poketext.vue'
    import pokesprite from './pokesprite.vue'
    export default{
        name:'pokeinfo',
        components:{
            poketext,
            pokesprite
        },
        computed:{
            pokemon(){
                return this.$store.state.pokedex.selectedPokemon
            },
            pokemonFamily(){
                return this.$store.state.pokedex.selectedPokemonFamily
            },
        },
    }
</script>