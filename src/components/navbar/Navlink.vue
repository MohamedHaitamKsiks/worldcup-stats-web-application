<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="navlink-container">
        <RouterLink  @mouseenter="hover=true" @mouseleave="hover=false" :class="'navlink ' + ((hover || active)? 'navlink-active': '')" :to="to" @click="onPressed()"> 
            <slot/>
         </RouterLink>
        <div :class="'navlink-rect ' + ((hover || active)? 'navlink-rect-show': '')" />
    </div>
</template>

<script>
    export default {
        props: {
            "value": String,
            "to": String
        },
        data() {
            return {
                hover: false
            }
        },
        methods: {
            onPressed() {
                const navLinkPressed = new CustomEvent("navLinkPressed", {
                    cancelable: true,
                    detail: {
                        to: () =>this.to
                    }
                });
                document.dispatchEvent(navLinkPressed);
            },
        },
        computed: {
            active() {
                return this.$route.path == this.to
            }
        }
        
    }
</script>

<style scoped>
    /* nav link container */
    .navlink-container {
        display: flex;
        flex-direction: column;
        height: 100%;

        
    }


    /* nav link */
    .navlink {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        
        font-size: large;
        padding: 8px;
        flex: auto;
        text-align: center;

        padding-left: 16px;
        padding-right: 16px;
    }

    .navlink-active {
        color: #ffffff;
        font-weight: bold;
    }

    /* navlink under rectangle */
    .navlink-rect {
        background-color: #ffffff;
        width: 0%;
        height: 5px;
        opacity: 0%;
        transition: width 0.15s ease-out;
    }

    .navlink-rect-show {
        width: 100%;
        opacity: 100%;
    }
</style>