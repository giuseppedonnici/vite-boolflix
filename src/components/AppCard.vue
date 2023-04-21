<script>
    import { store } from "../store";
    export default {
        name: "AppCard",
        props: {
            cardObj: Object,
        },
        data() {
            return {
                store,
            }
        },
        computed: {
            title() {
                return this.cardObj.title ? this.cardObj.title : this.cardObj.name;
            },
            originalTitle() {
                return this.cardObj.original_title ? this.cardObj.original_title : this.cardObj.original_name;
            },
            originalLanguage () {
                return this.cardObj.original_language;
            },
            overview() {
                return this.cardObj.overview;
            },
            vote () {
                return Math.ceil(this.cardObj.vote_average / 2);
            },
            voidStars() {
                return 5 - this.vote;
            },
            partialPath() {
                return this.cardObj.poster_path;
            },
        },
        methods: {
            isFound(lang) {
                return this.store.noFlags.includes(lang);
            },
            getFullUrl(partialPath) {
                return `${this.store.imgURL + partialPath}`;
            },
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
            <p>
                <span>Voto:</span>
                <i v-for="num in 5" :key="num" class="fa-star" :class="num <= vote ? 'fa-solid' : 'fa-regular'"></i>
            </p>
            <p><span>Overview:</span> {{ overview }} </p>
        </div>
        <img :src="getFullUrl(partialPath)" alt="">
    </div>
</template>

<style scoped lang="scss">
    .card {
        height: 450px;
        background-color: black;
        color: white;
        padding: 1rem;
        
        p {
            margin-bottom: .2rem;
        }
        & span {
            font-weight: bold;
            margin-right: 1rem;
        }
        .description {
            display: none;
        }
        &:hover .description {
            display: unset;
            overflow-y: auto;
        }
        &:hover img {
            display: none;
        }
        img {
            max-width: 100%;
        }
    }
</style>