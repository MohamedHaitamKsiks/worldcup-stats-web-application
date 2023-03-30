<script setup>
    import axios from 'axios';
</script>


<template>
    <td class="match-container" @click="$router.push(`/match/${match.id}`)">

        <div class="match-flex">
            <div class="match-equipe-container">
                <!--team 1-->
                <div class="match-equipe" v-for="equipe in match.equipes"> 
                    <img class="equipe-image" :src="equipe.image"/>
                    <div class="equipe-name"> {{ equipe.nom }} </div>
                    <div class="equipe-score"> {{ equipe.but }} </div>
                </div>
            </div>

            <div class="match-date">
                {{ match.date }} <br/>
                {{ match.stade }}
            </div>
        </div>


    </td>

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
    .match-container {
        
        width: 50%;
        transition: background-color 0.5s;
        
    }

    .match-flex {
        padding: 16px;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .match-container:hover {
        cursor: pointer;
        background-color: #00242cb3;
       
    }

    .match-equipe-container {
        width: 75%;
    }

    .match-date {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid white;
        margin-top: 5%;
        margin-bottom: 5%;
        
        font-size: larger;
    }

    .match-equipe {
        display: flex;
        align-items: center;
        margin: 16px;
    }

    .equipe-image {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 5px;
    }

    .equipe-name {
        font-size: xx-large;
        padding: 8px;
    }

    .equipe-score {
        font-size: xx-large;
        display: flex;
        flex: auto;
        justify-content: end;
    }

    

</style>