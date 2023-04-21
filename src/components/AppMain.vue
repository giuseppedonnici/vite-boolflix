<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    AppCard
  },
  data() {
    return {
      store,
    }
  },
  computed: {
    searchClickedMoviesFound() {
      return this.store.displayTitleSection && this.store.movies.length != 0
    },
    searchClickedSeriesFound() {
      return this.store.displayTitleSection && this.store.series.length != 0
    }
  }
};
</script>

<template>
  <div v-if="store.isLoading">Loading...</div>
  <div v-else class="row mt-2 g-4">
    <h2 v-show="searchClickedMoviesFound">Movies</h2>
    <div class="col-3" v-for="movie in store.movies" :key="movie.id">
      <AppCard :cardObj="movie" />
    </div>
    <h2 v-show="searchClickedSeriesFound">Series</h2>
    <div class="col-3" v-for="serie in store.series" :key="serie.id">
        <AppCard :cardObj="serie"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 1200px) {
  .col-3 {
    width: 50%;
  }
}
@media  screen and (max-width: 768px) {
  .col-3 {
    width: 100%;
  }
}

</style>
