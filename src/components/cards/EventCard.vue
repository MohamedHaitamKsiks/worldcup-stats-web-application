<script setup>
</script>

<template> 
    <div class="event-container">

        <div class="event-type">
            <img src="/icons/events/goal_icon.svg"/>
            <h2> BUT </h2>
            <h2 class="event-time"> 60' </h2>
        </div>

        <div class="event-body">
            <div class="event-player">
                <h1>
                    Yassine Bounou
                    <div class="event-player-nation"> 
                        <img src="/images/equipes/mar.png">
                        Maroc
                    </div>
                </h1>
                <div class="event-player-image">
                    <img src="/images/joueurs/bono.jpeg"/>
                </div>
            </div>
        </div>

    </div>
    
</template>


<style scoped> 
    .event-container {
        width: 90%;
        border: 2px solid white;
        border-radius: 16px;
        
    }

    .event-type {
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.712);
    }

    .event-time {
        flex: auto;
        display: flex;
        justify-content: end;
    }

    .event-player {
        display: flex;
        padding: 8px;
        align-items: center;
       
    }

    .event-player-image {
        flex: 1;
        display: flex;
        justify-content: end;
    }

    .event-player-image img {
        width: 128px;
        height: 128px;
        object-fit: cover;
        border-radius: 100%;
        border: 4px solid white;
    }

    .event-player h1 {
        font-weight: normal;
        font-size: xx-large;
        display: flex;
        flex-direction: column;
    }

    .event-player-nation{
        font-weight: normal;
        font-size: large;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .event-player-nation img {
        width: 32px;
        height: 32px;
        border: 1px solid white;
        border-radius: 4px;
        object-fit: cover;
    }
</style>