<template>
    <div class="bg-yellow-50 rounded-xl border-blue-400 border-4 sprite flex justify-center items-center">
        <img :src="'https://play.pokemonshowdown.com/sprites/ani/' + pokemon.name + '.gif'">
    </div>
</template>        

<script>
    export default{
        name:'pokesprite',
        props:{
            pokemon:{
                required: true,
                type: Object,
                default: {}
            }
        }
    }
</script>