<script>
    import "/node_modules/flag-icons/css/flag-icons.min.css";
    export default {
        name: "AppCard",
        props: {
            film: Object
        },
        data() {
            return {
                noFlags: ['en', 'ur', 'zh', 'ja', 'ko'],
            }
        },
        methods: {
            getLang(lang) {
                return this.noFlags.includes(lang);
            }
        }
    }
</script>

<template>
    <div class="card">
        <p><span>Titolo:</span> {{ film.title }}</p>
        <p><span>Titolo originale:</span> {{ film.original_title }}</p>
        <p>
            <span>Lingua:</span>
            <span v-if="getLang(film.original_language)">{{ film.original_language }}</span>
            <span :class="`fi fi-${ film.original_language }`"></span></p>
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
            margin-right: 1rem;
        }
    }
</style>