<!--import section-->
<script setup>
import Navlink from './Navlink.vue';

</script>

<!--html-->
<template>
    <div class="navbar">
        <img src="icons/world_cup_qatar.png" class="navbar-icon"/>
        <input type="search" class="navbar-search" placeholder="Recherche ..."/>

        <div class="navlink-list">
            <Navlink to="/"> Matches </Navlink>
            <Navlink to="/joueurs"> Joueurs </Navlink>
            <Navlink to="/elimination"> Elimination </Navlink>
            <Navlink to="/classement"> Classement </Navlink>
        </div>
    </div>
</template>

<!--css-->
<style scoped>
    .navbar {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;

        background-color: #9B0041;
        /*padding: 7px;*/

        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.525);

        display: flex;
        align-items: center;
        flex: auto;

        height: 60px;
        
    }

    .navbar-icon {
        
        height: 80%;
        margin-left: 8px;
        border-radius: 100%;
    }

    .navbar-search {
        font-size: x-large;
        padding: 7px;
        border-radius: 4px;
        background-image: url("icons/search.png");
        background-size: contain;
        background-repeat: no-repeat;
        padding-left: 48px;
        margin-left: 3%;
        
        width: 75%;
        max-width: 480px;

        border-style: none;
    }

    .navlink-list {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: right;
        flex: auto;
        height: 100%;
       
    }
</style>