<script setup>
    import StatsTab from '../components/tabs/StatsTab.vue'
    import EvenementsTab from '../components/tabs/EvenementsTab.vue';
    import CompositionTabs from '../components/tabs/CompositionTabs.vue';
    import axios from 'axios';
</script>

<template>
    <section class="main-container">
        <div class="main main-centered">
            
            <h1 class="title"></h1>

            <div class="match-score">
                <div class="match-team">
                    <img class="match-team-icon" :src="(match.equipes.length > 1) ? match.equipes[0].image : ''"/>
                    <h2> {{ (match.equipes.length > 1) ? match.equipes[0].nom : '' }} </h2>
                </div>

                <h1> {{ (match.equipes.length > 1) ? match.equipes[0].but : '' }} </h1>

                <h1> - </h1>

                <h1> {{ (match.equipes.length > 1) ? match.equipes[1].but : '' }} </h1>

                <div class="match-team">
                    <img class="match-team-icon" :src="(match.equipes.length > 1) ? match.equipes[1].image : ''"/>
                    <h2> {{ (match.equipes.length > 1) ? match.equipes[1].nom : '' }} </h2>
                </div>
    
            </div>

            <h1> Finale </h1>

            <h1 class="main-title tab-list-container"> 
                <div class="tab-list">
                    <button v-for="tab, index in tabs" 
                    @click="onTabButtonClick(index)"
                    :class="`tab-button ${ (index == currentTab) ? 'tab-button-active': '' }`"> 
                        {{ tab }}
                    </button>
                </div>
            </h1>

            <StatsTab v-if = "currentTab == 0" :stats="stats"/>
            <CompositionTabs v-else-if= "currentTab == 1"/>
            <EvenementsTab v-else-if="currentTab == 2"/>
            
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                tabs: ["Stats", "Composition", "Evenements"],
                currentTab: 0,
                matchid: 0,
                match: {
                    id: 0,
                    date: "",
                    stade: "",
                    equipes: []
                },
                stats: [],
                lineups: []
            }
        },
        methods: {
            onTabButtonClick(clickedTabIndex) {
                this.currentTab = clickedTabIndex
                console.log(this.currentTab);
            },
            
        },
        async mounted() {
            this.matchid = this.$route.params.matchId

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

            //stats
            for(let i = 0; i < 2; i++) {
                response = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/equipe_match/match/${this.matchid}/equipe/${this.stats[0].equipe}`)
                let joueurs = response.data.items
                console.log(equipeMatchs);
                equipeMatchs.forEach(async (equipeMatch) => {
                    equipeMatch.equipe = this.match.equipes.find((eq) => {
                        return eq.id == equipeMatch.equipe_id;
                    }).equipe;
                    this.stats.push(equipeMatch);
                });

            }




        }
    }
</script>

<style scoped>
    .match-score {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        padding: 16px;
    }

    .match-score h1 {
        font-size: xxx-large;
    }

    .match-team {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .match-team h2 {
        position: absolute;
        top: 100%;
    }

    .match-team-icon {
        width: 68px;
        height: 68px;
        object-fit: cover;
        border: 2px solid white;
        border-radius: 8px;
    }

    .tab-list-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
    }

    .tab-list {
        width: 60%;
        display: flex;
        justify-content: center;
        
    }

    .tab-button {
        font-size: x-large;
        padding: 16px;
        flex: 1;
        color: rgba(255, 255, 255, 0.676);
        background-color: transparent;
        border: none;
        transition: background-color 0.3s;
    }

    .tab-button-active {
        border-bottom: 4px solid white;
        color: white;
    }

    .tab-button:hover {
        background-color: #1e383ea3;
        cursor: pointer;
    }

    .tab-button-active:hover {
        background-color: transparent;
        cursor: default;
    }
</style>