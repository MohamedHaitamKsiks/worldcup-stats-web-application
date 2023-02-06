<script setup>
    import Match from '../components/match/Match.vue';
</script>

<template>
    <section class="main-container">
        <div class="main">

            <h1 class="title">Matches</h1>

            <!--finale-->
            <h1 class="match-type"> Finale </h1>
            <table class="match-table">
                <tr class="match-table-line">
                    <Match />
                    <td/>
                </tr>
            </table>

            <!--semifinale-->
            <h1 class="match-type"> Semi finale </h1>
            <table class="match-table">
                <tr class="match-table-line">
                    <Match />
                    <Match />
                </tr>
            </table>

            <!--quartfinale-->
            <h1 class="match-type"> Quart de Finale </h1>
            <table class="match-table">
                <tr class="match-table-line">
                    <Match />
                    <Match />
                </tr>

                <tr class="match-table-line">
                    <Match />
                    <Match />
                </tr>
            </table>

        </div>
    </section>
</template>


<style scoped>
    .main-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 1600px;
    }

    .main {
        
        padding-top: 80px;
        width: 100%;
        max-width: 1200px;
        height: 100%;
        background-color: #1E383E;


    }

    .title {
        font-size: xx-large;
        font-weight: normal;
        margin: 16px;
    }

    .match-type {
        background-color: #00242C;
        margin: 0px;
        padding: 8px;
    }

    .match-table {
        width: 100%;
        border-collapse: collapse;
    }

    .match-table .match-container:first-child {
        border-right: 1px solid white;
    }

    .match-table .match-container:last-child {
        border-right: none;
    }

    .match-table .match-table-line:first-child {
        border-bottom: 1px solid white;
    }

    .match-table .match-table-line:last-child {
        border-bottom: none;
    }
</style>