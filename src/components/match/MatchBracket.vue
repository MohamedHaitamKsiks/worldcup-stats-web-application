<script setup>
    import axios from 'axios'
</script>

<template>
    <div class="match-bracket-container" @click="$router.push(`/match/${match.id}`)">

        <div class="match-bracket-flex">

            <div class="match-bracket-date">
               {{ match.date }} 
            </div>

            <div class="match-bracket-equipe-container">
                <div class="match-bracket-equipe" v-for="equipe in match.equipes"> 
                    <img class="equipe-bracket-image" :src="`${equipe.image}`"/>
                    <div class="equipe-bracket-name"> {{ equipe.nom }} </div>
                    <div class="equipe-bracket-score"> {{ equipe.but }} </div>
                </div>
            </div>


        </div>


    </div>

</template>


<script>
    export default {
        props: {
            "matchid": Number
        },
        data() {
            return {
                //match
                match: {
                    id: 0,
                    date: "",
                    stade: "",
                    equipes: []
                }
            }
        },
        methods: {
            
        },
        async mounted() {
            this.match.id = this.matchid
            let response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/match/${this.matchid}`)
            let match = response.data
            console.log(match);
            this.match.stade = match.stade;
            this.match.date = match.date_match;
            
            response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/equipe/match/${this.matchid}`)
            let equipes = response.data.items
            equipes.forEach(async (equipe) => {
                response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/but/match/${this.matchid}/equipe/${equipe.id}`)
                this.match.equipes.push({
                    id: equipe.id,
                    nom: equipe.nom,
                    image: equipe.image,
                    but: response.data.count
                });
            });

        }

    }
</script>

<style scoped>
    .match-bracket-container {
        border: 1px solid white;
        border-radius: 8px;
        transition: background-color 0.5s;
        padding: 4px;
        max-width:250px

    }

    .match-bracket-flex {
        
        width: 100%;
        height: 100%;
        

    }

    .match-bracket-container:hover {
        cursor: pointer;
        background-color: #00242cb3;
       
    }

    .match-bracket-equipe-container {
        width: 100%;
    }

    .match-bracket-date {
        
        display: flex;

        align-items: center;
        border-bottom: 1px solid white;
        margin-left: 5%;
        margin-right: 5%;
        color:rgba(255, 255, 255, 0.759);
        font-size:medium;
    }

    .match-bracket-equipe {
        display: flex;
        align-items: center;
        margin: 4px;
    }

    .equipe-bracket-image {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 5px;
    }

    .equipe-bracket-name {
        font-size: large;
        padding: 4px;
    }

    .equipe-bracket-score {
        font-size: large;
        display: flex;
        flex: auto;
        justify-content: end;
    }

    

</style>