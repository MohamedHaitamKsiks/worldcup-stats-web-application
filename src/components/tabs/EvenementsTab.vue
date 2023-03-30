<script setup>
    import EventCard from '../cards/EventCard.vue';
</script>

<template> 

    <div class="event-list">
        <EventCard />
        <EventCard />
        <EventCard />

    </div>
</template>


<style scoped>
    .event-list {
        width: 60%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 32px;
        margin: 32px;
    }
</style>