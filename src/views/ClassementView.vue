<script setup>
    import Group from '../components/group/Group.vue';
    import axios from 'axios'
</script>

<template>
    <section class="main-container">
        <div class="main">

            <h1 class="title">Classement</h1>

            <Group v-for="group in groups" :groupe="group"/>

        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                groups: []
            }
        },
        async mounted() {
            let result = await axios.get(`https://apex.oracle.com/pls/apex/projet_si/groupe/coupe/0`);
            this.groups = result.data.items
        }
    }
</script>


<style scoped>
</style>