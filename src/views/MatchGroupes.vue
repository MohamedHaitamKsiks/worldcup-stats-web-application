<script setup>
    import Match from '../components/match/Match.vue';
    import axios from 'axios'
</script>

<template>
    <section class="main-container">
        <div class="main">

            <h1 class="title">Matches</h1>
            
            <h1 class="match-type"> Groupe Phase </h1>
            <table class="match-table">
                <tr class="match-table-line" v-for="matchContainer in matchsGoupe">
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

            }
        },
        
        async mounted() {
            let response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/coupe/0/phase/0`);
            this.matchsGoupe = [];
            let match_container = [];
            let i = 0;
            response.data.items.forEach(match => {
                match_container.push(match);
                i ++;
                if (i == 2) {
                    this.matchsGoupe.push(match_container);
                    match_container = [];
                    i = 0;
                }
            });

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