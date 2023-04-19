<script>
    import {store} from "../store";

    export default {
        name: "AppHeader",
        emits: ["search"],
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">BOOLFLIX</div>
            <div class="searchbar">
                <input class="w-50" type="text" placeholder="Inserisci il film da cercare..." 
                    v-model.trim="store.query" 
                    @keyup.enter="$emit('search')">
                <button class="ms-4" @click="$emit('search')">Cerca</button>
            </div>
        </div>
    </header>

</template>

<style scoped lang="scss">
    header {
        height: 100px;
        background-color: black;
        .container {
            height: 100%;
            .logo {
                font-size: 2rem;
                color: red;
            }
            .searchbar {
                text-align: end;
                width: 60%;
            }
        }
    }
</style>