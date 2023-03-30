<script setup>
    import Match from '../components/match/Match.vue';
    import axios from 'axios'
</script>

<template>
    <section class="main-container">
        <div class="main">

            <h1 class="title">Matches</h1>

            <!--finale-->
            <h1 class="match-type"> Finale </h1>
            <table class="match-table">
                <tr class="match-table-line">
                    <Match v-for="match in matchs1" :matchid="match.id"/>
                    <td/>
                </tr>
            </table>

            <!--finale-->
            <h1 class="match-type"> 3eme Place </h1>
            <table class="match-table">
                <tr class="match-table-line">
                    <Match v-for="match in matchs3" :matchid="match.id"/>
                    <td/>
                </tr>
            </table>

            <!--semifinale-->
            <h1 class="match-type"> Semi finale </h1>
            <table class="match-table">
                <tr class="match-table-line">
                    <Match v-for="match in matchs2" :matchid="match.id"/>
                </tr>
            </table>

            <!--quartfinale-->
            <h1 class="match-type"> Quart de Finale </h1>
            <table class="match-table">
                <tr class="match-table-line" v-for="matchContainer in matchs4">
                    <Match v-for="match in matchContainer" :matchid="match.id"/>
                </tr>
            </table>

            <!--8eme finale-->
            <h1 class="match-type"> 8eme de Finale </h1>
            <table class="match-table">
                <tr class="match-table-line" v-for="matchContainer in matchs8">
                    <Match v-for="match in matchContainer" :matchid="match.id"/>
                </tr>
            </table>

        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                matchsGoupe: [],
                matchs8: [],
                matchs4: [],
                matchs2: [],
                matchs3: [],
                matchs1: []
            }
        },
        
        async mounted() {
            let response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/coupe/0/phase/1`);
            this.matchs8 = [];
            let match_container = [];
            let i = 0;
            response.data.items.forEach(match => {
                match_container.push(match);
                i ++;
                if (i == 2) {
                    this.matchs8.push(match_container);
                    match_container = [];
                    i = 0;
                }
            });

            response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/coupe/0/phase/2`);
            this.matchs4 = [];
            match_container = [];
            i = 0;
            response.data.items.forEach(match => {
                match_container.push(match);
                i ++;
                if (i == 2) {
                    this.matchs4.push(match_container);
                    match_container = [];
                    i = 0;
                }
            });
            
            response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/coupe/0/phase/3`);
            this.matchs2 = response.data.items;

            response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/coupe/0/phase/5`);
            this.matchs3 = response.data.items;

            response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/coupe/0/phase/4`);
            this.matchs1 = response.data.items;
        }

    }
</script>

<style scoped>
    .match-type {
        background-color: #00242C;
        margin: 0px;
        padding: 8px;
    }

    .match-table {
        width: 100%;
        border-collapse: collapse;
    }

    .match-table .match-container {
        border-right: 1px solid white;
    }

    .match-table .match-container:last-child {
        border-right: none;
    }

    .match-table .match-table-line{
        border-bottom: 1px solid white;
    }

    .match-table .match-table-line:last-child {
        border-bottom: none;
    }
</style>