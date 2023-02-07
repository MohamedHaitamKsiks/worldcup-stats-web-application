<template >
    <h1 class="group-name"> Groupe A </h1>
    <table class="group-table">
        <tr>
            <th style="text-align:left"> Equipe </th>
            <th> Points </th>
            <th> Diff. Buts </th>
            <th> Matches </th>
        </tr>

        <tr v-for="i in 4">
            <td class="group-team">
                <img class="group-team-icon" src="images/equipes/mar.png"/> Maroc 
            </td>
            <td> 7 </td>
            <td> 3 </td>
            <td> 
                <img class="group-match-icon" src="icons/match/draw.svg"/>
                <img class="group-match-icon" src="icons/match/win.svg"/>  
                <img class="group-match-icon" src="icons/match/win.svg"/>  
            </td>
        </tr>
    </table>

</template>


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