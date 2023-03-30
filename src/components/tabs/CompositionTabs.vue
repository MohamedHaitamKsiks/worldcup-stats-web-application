<template>
    <div class="stats-container">
        <div class="stats-line">
            <h1></h1>
            <h1> Composition d'equipe </h1>
            <h1></h1>
        </div>

        <div class="stats-line" v-for="joueur in equipe">
            <h1> {{ joueur[0] }}  </h1>
            <h1> {{ joueur[1] }} </h1>
        </div>
    </div>
</template>

<script >
    export default {
        props: {
            equipe: Array
        }
    }

</script>

<style scoped>
    .stats-container {
        width: 60%;
        margin-top: 32px;
        margin-bottom: 16px;
    }

    .stats-line {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }

    .stats-line img {
        width: 48px;
        height: 48px;
        object-fit: cover;
        border: 2px solid white;
        border-radius: 8px;
    }

    .stats-line h1 {
        font-weight: normal;
    }
</style>