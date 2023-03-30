
<template>
    <div class="stats-container">
        <div class="stats-line">
            <img :src="(stats.length > 1) ? stats[0].equipe.image : ''"/>
            <h1> Statistique </h1>
            <img :src="(stats.length > 1) ? stats[1].equipe.image : ''"/>
        </div>

        <div class="stats-line">
            <h1> {{ (stats.length > 1) ? stats[0].possession : 0 }}  </h1>
            <h1> Possession </h1>
            <h1> {{ (stats.length > 1) ? stats[1].possession : 0 }} </h1>
        </div>

        <div class="stats-line">
            <h1> {{ (stats.length > 1) ? stats[0].tirs : 0 }} </h1>
            <h1> Tirs </h1>
            <h1> {{ (stats.length > 1) ? stats[1].tirs : 0 }} </h1>
        </div>

        <div class="stats-line">
            <h1>  {{ (stats.length > 1) ? stats[0].tirs_cadres : 0 }} </h1>
            <h1> Tirs Cadre </h1>
            <h1>  {{ (stats.length > 1) ? stats[1].tirs_cadres : 0 }} </h1>
        </div>

        <div class="stats-line">
            <h1> {{ (stats.length > 1) ? stats[0].hors_jeux : 0 }} </h1>
            <h1> Hors Jeux </h1>
            <h1> {{ (stats.length > 1) ? stats[1].hors_jeux : 0 }} </h1>
        </div>

        <div class="stats-line">
            <h1> {{ (stats.length > 1) ? stats[0].corners : 0 }} </h1>
            <h1> Corners </h1>
            <h1> {{ (stats.length > 1) ? stats[1].corners : 0 }} </h1>
        </div>

        <div class="stats-line">
            <h1> {{ (stats.length > 1) ? stats[0].fautes : 0 }} </h1>
            <h1> Fautes </h1>
            <h1> {{ (stats.length > 1) ? stats[1].fautes : 0 }} </h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            stats: Array
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