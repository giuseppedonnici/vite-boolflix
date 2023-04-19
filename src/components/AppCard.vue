<script>
    import { store } from '../store';
    export default {
        name: "AppCard",
        props: {
            film: Object
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="card">
        <p><span>Titolo:</span> {{ film.title }}</p>
        <p><span>Titolo originale:</span> {{ film.original_title }}</p>
        <p><span>Lingua:</span> {{ film.original_language }}</p>
        <p><span>Voto:</span> {{ film.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss">
    .card {
        height: 100%;
        background-color: black;
        color: white;
        padding: 1rem;
        & span {
            font-weight: bold;
        }
    }
</style>