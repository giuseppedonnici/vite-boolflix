<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    import "/node_modules/@fortawesome/fontawesome-free/css/all.css";
    import { store } from "../store";
    export default {
        name: "AppCardMovie",
        props: {
            movie: Object,
        },
        data() {
            return {
                store                
            }
        },
        computed: {
            title() {
                return this.movie.title;
            },
            originalTitle() {
                return this.movie.original_title;
            },
            originalLanguage () {
                return this.movie.original_language;
            },
            vote () {
                return this.movie.vote_average;
            },
            partialPath() {
                return this.movie.poster_path;
            }
        },
        methods: {
            isFound(lang) {
                return this.store.noFlags.includes(lang);
            },
            getFullUrl(partialPath) {
                return `${this.store.imgURL + partialPath}`;
            }
        }
    }
</script>

<template>
    <div class="card">
        <div class="description">
            <p><span>Titolo:</span> {{ title }}</p>
            <p><span>Titolo originale:</span> {{ originalTitle }}</p>
            <p>
                <span>Lingua:</span>
                <span v-if="isFound(originalLanguage)">{{ originalLanguage }}</span>
                <span :class="`fi fi-${ originalLanguage }`"></span></p>
            <p><span>Voto:</span> {{ vote }} </p>
            <i class="fa-solid fa-star"></i>
        </div>
        <img :src="getFullUrl(partialPath)" alt="">
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
            margin-right: 1rem;
        }
        i {
            color: yellow;
        }
    }
</style>