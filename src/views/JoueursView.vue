<script setup>
    import axios from 'axios';
import PlayerCard from '../components/cards/PlayerCard.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="main-container">
        <div class="main">
            
            <h1 class="title">Joueurs</h1>
            
            <h1 class="main-title joueurs-filtre"> 
                <input type="search" class="joueurs-search" placeholder="Recherche ..." @input="searchPlayer(nameText)" v-model="nameText"/>
                <div class="joueurs-order-container">
                    Tries Par
                    <select class="joueurs-order" v-model="sortby" name="player-order" @change="searchPlayer(nameText)">
                        <option value="">A-Z</option>
                        <option value="/age">Age</option>
                        <option value="/taille">Taille</option>
                    </select>
                </div>
                
            </h1>
            
            <div class="player-cards-list">
                <PlayerCard v-for="player in players" :player="player"/>
            </div>

            <div class="player-pages" @click="$router.go(0)">
                <RouterLink v-for="page in getPageList" 
                :class="`page ${(page == $route.params.page) ? 'page-disabled': ''}`"  
                :to="`/joueurs/${page}`" 
                :disabled="page == $route.params.page" > 
                    {{ page }}
                </RouterLink>
            </div>



        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                players: [],
                nameText: "",
                sortby: "",
                loading: false,
            }
        },
        computed: {
            getPageList() {
                let page = this.$route.params.page;
                let start = 1;
                let end = 10;

                if (page >= 10) {
                    let diff = page - 9;
                    start += diff;
                    end += diff;
                }

                let list = []
                for (let i = start; i <= end; i++) {
                    list.push(i);
                }

                return list;

            },
           
        },
        methods: {
            async searchPlayer(name) {
                this.players = [];
                let result = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/joueur/coupe/0/search${this.sortby}?offset=${this.$route.params.page - 1}&name=%${name}%`);
                this.players = result.data.items;
                console.log(this.players)
            }
        },
        async mounted() {
            let result = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/joueur/coupe/0/search${this.sortby}?offset=${this.$route.params.page * 32}&name=%%`);
            this.players = result.data.items;
            console.log(this.players)
        }
        
    }
</script>


<style scoped>
    .player-cards-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 8px;
        margin: 8px;
    }

    .joueurs-search {
        font-size: x-large;
        padding: 7px;
        border-radius: 4px;
        background-image: url("/icons/search.png");
        background-size: contain;
        background-repeat: no-repeat;
        padding-left: 48px;
        
        
        width: 75%;
        max-width: 800px;

        border-style: none;
    }

    .joueurs-filtre {
        display: flex;
        align-items: center;
    }

    .joueurs-order-container {
        flex: auto;
        display: flex;
        justify-content: end;
        gap: 8px;
    }

    .joueurs-order {
        font-size: large;
    }

    .player-pages {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 8px;
        margin: 16px;
    }

    .player-pages .page {
        font-size: larger;
        color: white;
        width: 32px;
    }

    .player-pages .page-disabled {
        color: rgba(255, 255, 255, 0.553);
        text-decoration: none;
    }

    .page-disabled:hover {
        cursor:default;
    }
</style>