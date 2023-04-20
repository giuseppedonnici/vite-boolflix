<script>
    import AppCard from './AppCard.vue';
    import { store } from '../store';
    export default {
        name: "AppMain",
        components: {
            AppCard
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="row mt-4">
      <div class="col-4 g-4" v-for="(movie, index) in store.movies" :key="movie.id">
        <AppCard :movie="movie" />
      </div>
    </div>

</template>

<style scoped lang="scss">


</style>