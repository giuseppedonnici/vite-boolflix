<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "/node_modules/@fortawesome/fontawesome-free/css/all.css";
import { store } from "../store";
export default {
    name: "AppCardSerie",
    props: {
        serie: Object
    },
    data() {
        return {
            store,
        }
    },
    computed: {
            title() {
                return this.serie.name;
            },
            originalTitle() {
                return this.serie.original_name;
            },
            originalLanguage () {
                return this.serie.original_language;
            },
            overview() {
                return this.serie.overview;
            },
            vote () {
                let vote = this.serie.vote_average / 2;
                return Math.round(vote);
            },
            voidStars() {
                return 5 - this.vote;
            },
            partialPath() {
                return this.serie.poster_path;
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
            <p>
                <span>Voto:</span>
                <span v-for="num in vote">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="num in voidStars">
                    <i class="fa-regular fa-star"></i>
                </span>
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
        overflow-y: auto;
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