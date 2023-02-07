
<template>
    <div class="match-bracket-container">

        <div class="match-bracket-flex">

            <div class="match-bracket-date">
                Dec 12
            </div>

            <div class="match-bracket-equipe-container">
                <!--team 1-->
                <div class="match-bracket-equipe"> 
                    <img class="equipe-bracket-image" src="images/equipes/mar.png"/>
                    <div class="equipe-bracket-name"> Morocco </div>
                    <div class="equipe-bracket-score"> 3 </div>
                </div>
                <!--team 2-->
                <div class="match-bracket-equipe"> 
                    <img class="equipe-bracket-image" src="images/equipes/mar.png"/>
                    <div class="equipe-bracket-name"> Morocco </div>
                    <div class="equipe-bracket-score"> 3 </div>
                </div>
            </div>


        </div>


    </div>

</template>

<script>
    export default {
        
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