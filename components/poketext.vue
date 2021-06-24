<template>
    <div class="bg-yellow-50 rounded-xl border-blue-400 border-4 info sm:mt-3 p-1 sm:p-4">
        <div class="flex">
            <div class="types flex flex-col justify-center items-center">
                <img :src="'https://play.pokemonshowdown.com/sprites/types/' + toProperCase(pokemon.types[0].type.name) + '.png'">
                <img v-if="pokemon.types.length > 1" :src="'https://play.pokemonshowdown.com/sprites/types/' + toProperCase(pokemon.types[1].type.name) + '.png'">
            </div>
            <div class="ml-3 text-xl col-span-2">
                #{{pokemon.id}} {{toProperCase(pokemon.name)}}
            </div>
        </div>
        <hr color="grey" class="mt-3">
        <div class="text-l italic">
            {{properGenera}}
        </div>
        <div class="text-lg md:text-xl italic">
            {{properText.replace("\f", "\n")}}
        </div>
        <hr color="grey" class="mt-3">
        <div class="text-lg">
            Base Stats:
        </div>
        <div class="flex justify-around">
            <div>Hp:{{pokemon.stats[0].base_stat}}</div>
            <div>Atk:{{pokemon.stats[1].base_stat}}</div>
            <div>Def:{{pokemon.stats[2].base_stat}}</div>
        </div>
        <div class="flex justify-around">
            <div>SpAtk:{{pokemon.stats[3].base_stat}}</div>
            <div>SpDef:{{pokemon.stats[4].base_stat}}</div>
            <div>Spe:{{pokemon.stats[5].base_stat}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'poketext',
        props:{
            pokemon:{
                default: {},
                type: Object,
                required: true
            },
            pokemonFamily:{
                default: {},
                type: Object,
                required: true
            }
        },
        methods:{
            toProperCase(string){
                return string[0].toUpperCase() + string.substr(1, string.length)
            }
        },
        computed:{
            properText(){
                for(let x in this.$store.state.pokedex.selectedPokemonFamily.flavor_text_entries){
                    if(this.$store.state.pokedex.selectedPokemonFamily.flavor_text_entries[x].language.name === 'en'){
                        return this.$store.state.pokedex.selectedPokemonFamily.flavor_text_entries[x].flavor_text
                    }
                }
            },
            properGenera(){
                for(let x in this.$store.state.pokedex.selectedPokemonFamily.genera){
                    if(this.$store.state.pokedex.selectedPokemonFamily.genera[x].language.name === 'en'){
                        return this.$store.state.pokedex.selectedPokemonFamily.genera[x].genus
                    }
                }
            }
        }
    }
</script>