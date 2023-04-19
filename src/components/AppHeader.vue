<script>
    import {store} from "../store";

    export default {
        name: "AppHeader",
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
                <input class="w-50" type="text" placeholder="Inserisci il film da cercare..." v-model="store.search">
                <button class="ms-4">Cerca</button>
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