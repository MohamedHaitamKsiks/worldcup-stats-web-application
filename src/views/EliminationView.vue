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
                    <div class="bracket-groupe-phase" v-for="i in 4">
                        <MatchBracket v-for="i in 2"/>
                    </div>
                </div>

                <!--4-->
                <div class="bracket-phase">
                    <MatchBracket v-for="i in 4"/>
                </div>

                <!--demifinal-->
                <div class="bracket-phase">
                    <MatchBracket v-for="i in 2"/>
                </div>

                <!--finale-->
                <div class="bracket-phase">
                    <MatchBracket v-for="i in 1"/>
                </div>
            </div>

            <div class="bracket-title"> 3eme place </div>
            <MatchBracket style="margin: 32px"/>
            

        </div>
    </section>
</template>


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