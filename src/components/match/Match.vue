
<template>
    <td class="match-container">

        <div class="match-flex">
            <div class="match-equipe-container">
                <!--team 1-->
                <div class="match-equipe"> 
                    <img class="equipe-image" src="images/equipes/mar.png"/>
                    <div class="equipe-name"> Morocco </div>
                    <div class="equipe-score"> 3 </div>
                </div>
                <!--team 2-->
                <div class="match-equipe"> 
                    <img class="equipe-image" src="images/equipes/mar.png"/>
                    <div class="equipe-name"> Morocco </div>
                    <div class="equipe-score"> 3 </div>
                </div>
            </div>

            <div class="match-date">
                Dec 12 <br/>
                Stade X
            </div>
        </div>


    </td>

</template>

<script>
    export default {
        
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