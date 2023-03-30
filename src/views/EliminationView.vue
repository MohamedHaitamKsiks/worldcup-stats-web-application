<script setup>
    import MatchBracket from '../components/match/MatchBracket.vue'
</script>

<template>
    <section class="main-container">
        <div class="main">

            <h1 class="title">Phase Eliminatoir</h1>

            <div class="bracket-container bracket-title">
                <div class="bracket-phase phase-name"> 8eme de final </div>
                <div class="bracket-phase phase-name"> quart de final </div>
                <div class="bracket-phase phase-name"> semi final </div>
                <div class="bracket-phase phase-name"> final </div>
            </div>

            <div class="bracket-container">
                <!--8eme-->
                <div class="bracket-phase">
                    <div class="bracket-groupe-phase">
                        <MatchBracket matchid="48"/>
                        <MatchBracket matchid="49"/>
                    </div>

                    <div class="bracket-groupe-phase">
                        <MatchBracket matchid="50"/>
                        <MatchBracket matchid="51"/>
                    </div>

                    <div class="bracket-groupe-phase">
                        <MatchBracket matchid="52"/>
                        <MatchBracket matchid="53"/>
                    </div>

                    <div class="bracket-groupe-phase">
                        <MatchBracket matchid="55"/>
                        <MatchBracket matchid="54"/>
                    </div>
                </div>

                <!--4-->
                <div class="bracket-phase">
                    <MatchBracket matchid="57"/>
                    <MatchBracket matchid="56"/>
                    <MatchBracket matchid="59"/>
                    <MatchBracket matchid="58"/>
                </div>

                <!--demifinal-->
                <div class="bracket-phase">
                    <MatchBracket matchid="60"/>
                    <MatchBracket matchid="61"/>
                </div>

                <!--finale-->
                <div class="bracket-phase">
                    <MatchBracket matchid="63"/>
                </div>
            </div>

            <div class="bracket-title"> 3eme place </div>
            <MatchBracket matchid="62" style="margin: 32px"/>
            

        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                match: {
                    equipes: [
                        {
                            nom: "Maroc",
                            icon: "mar.png",
                            score: 3
                        },
                        {
                            nom: "Maroc",
                            icon: "mar.png",
                            score: 3
                        }
                    ],
                    date: "12 Dec",
                    stade: "Stade X"
                }
            }
        }
    }
</script>

<style scoped>
    .bracket-container {
        display: flex;
        gap:32px;
        padding: 32px;
    }

    .bracket-groupe-phase {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap:8px;
    }

    .bracket-phase {
        flex: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        gap:32px;
        
    }

    .phase-name {
        font-size: larger;
        
    }

    .bracket-title {
        background-color: #00242C;
        margin: 0px;
        padding: 8px;
    }
</style>