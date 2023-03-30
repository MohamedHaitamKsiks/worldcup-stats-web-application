<script setup>
    import axios from 'axios'
</script>

<template>
    <div class="player-card">
        <img class="player-card-image" :src="player.image" />
        <h4 class="player-card-name"> {{ player.nom }} </h4>
        <div class="player-card-nation"> 
            {{ player.nationalite }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            player: Object
        },
    }
</script>

<style scoped>
    .player-card {
        border: 1px solid white;
        border-radius: 8px;

        width: 128px;
        height: 230px;
        display: flex;
        flex-direction: column;

        overflow: hidden;

        transition: background-color 0.3s;
        
    }

    .player-card:hover {
        cursor: pointer;
        background-color: #00242cb3;
       
    }

    .player-card-image{
        width: 100%;
        
    }

    .player-card-name {
        font-weight: normal;
        padding: 5px;
    }

    .player-card-nation{
        display: flex;
        padding: 5px;
        align-items:center;
        color: rgba(255, 255, 255, 0.806)
    }

    .player-card-nation-icon{
        width: 24px;
        height: 24px;
        object-fit: cover;
        border-radius: 3px;
        margin-right: 5px;

    }
</style>