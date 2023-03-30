<script setup>
    import axios from 'axios';
</script>


<template >
    <h1 class="group-name"> Groupe {{ groupe.nom }} </h1>
    <table class="group-table">
        <tr>
            <th style="text-align:left"> Equipe </th>
            <th> Points </th>
            <th> Diff. Buts </th>
            <th> Matches </th>
        </tr>

        <tr v-for="equipe in equipes">
            <td class="group-team">
                <img class="group-team-icon" :src="equipe.image"/> 
                {{ equipe.nom }}
            </td>
            <td> 0 </td>
            <td> 0 </td>
            <td> 
                <img class="group-match-icon" src="/icons/match/draw.svg"/>
                <img class="group-match-icon" src="/icons/match/draw.svg"/>  
                <img class="group-match-icon" src="/icons/match/draw.svg"/>  
            </td>
        </tr>
    </table>

</template>

<script>

    export default {
        props: {
            groupe: Object
        },
        data() {
            return {
                equipes: []
            }
        },
        async mounted() {
            let result = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/equipe/groupe/${this.groupe.id}`);
            this.equipes = result.data.items
        }
    }

</script>


<style scoped>
    .group-name {
        background-color: #00242C;
        margin: 0px;
        padding: 8px;
    }

    .group-table {
        width: 100%;
        font-size: larger;
        border-collapse: collapse;
    }

    .group-table tr {
        text-align: center;
        border-bottom: 1px solid white;
        
    }

    .group-table tr:last-child {
        border: none;
    }

    .group-table tr td,th {
        padding: 8px;
        border-right: 1px solid white;
    }

    .group-table tr td:last-child, th:last-child {
        border: none;
    }

    .group-match-icon {
        margin: 3px;
        width: 20px;
    }

    .group-team {
        display: flex;
        
        align-items: center;
    }

    .group-team-icon {
        width: 40px;
        height: 40px;
        object-fit: cover;
        margin-right: 5%;
        border-radius: 5px;
    }
</style>