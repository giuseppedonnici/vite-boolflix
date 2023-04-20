<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    export default {
        name: "AppCard",
        props: {
            movie: Object
        },
        data() {
            return {
                noFlags: ['en', 'ur', 'zh', 'ja', 'ko', 'hi'],
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
            }
        },
        methods: {
            isFound(lang) {
                return this.noFlags.includes(lang);
            }
        }
    }
</script>

<template>
    <div class="card">
        <p><span>Titolo:</span> {{ title }}</p>
        <p><span>Titolo originale:</span> {{ originalTitle }}</p>
        <p>
            <span>Lingua:</span>
            <span v-if="isFound(originalLanguage)">{{ originalLanguage }}</span>
            <span :class="`fi fi-${ originalLanguage }`"></span></p>
        <p><span>Voto:</span> {{ vote }}</p>
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
    }
</style>