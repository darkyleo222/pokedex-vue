<template>
    <div class="pokedex-container flex rounded-2xl">
        <div class="pokedex-left rounded-2xl">
            <div>
                <div v-if="windowWidth > 600" class="flex justify-center mt-2">
                    <img class="pokelogo" src="../assets/images/logo.png">
                </div>
                <pokelist></pokelist>
            </div>
        </div>
        <div class="pokedex-right rounded-2xl">
            <div >
                <div class="flex justify-center mt-2">
                    <img class="pokelogo" src="../assets/images/logo.png">
                </div>
                <pokeinfo></pokeinfo>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .pokelogo{
        width:250px;
        height:80px        
    }
    .pokedex-container{        
        background-color:#dc0a2d;
        width:70vw;
        max-width:800px;
        min-width:600px;
        height:70vh;
        max-height:700px;
    }
    @media only screen and (max-width: 600px) {
        .pokedex-container{
            flex-direction:column-reverse;
            width:100vw !important;
            height:auto !important;
            max-height:unset !important;
            max-width:unset !important;
            min-width:unset !important;            
        }

        .pokedex-container .pokedex-right{
            border-left:unset;
            width:unset;             
        }
        .pokedex-container .pokedex-left{
            border-right:unset;
            width:unset;            
        }
        
    }
    .pokedex-right{       
        background-color:#dc0a2d;
        width:50%;
        height:100%;
        border-left:lightslategrey solid 2px;
    }
    .pokedex-left{        
        background-color:#dc0a2d;
        width:50%;
        height:100%;
        border-right:lightslategrey solid 2px;
    }
</style>

<script>
    import pokelist from "./pokelist"
    import pokeinfo from "./pokeinfo"

    export default{
        components:{
            pokelist,
            pokeinfo
        },
        name:'pokedex',
        data(){
            return{
                windowWidth: 0
            }
        },
        mounted() {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth
            })
        }
    }
</script>