<script setup>
    import Group from '../components/group/Group.vue';
</script>

<template>
    <section class="main-container">
        <div class="main">

            <h1 class="title">Classement</h1>

            <Group v-for="i in 8"/>

        </div>
    </section>
</template>


<style scoped>
</style>