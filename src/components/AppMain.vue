<script>
import AppCardMovie from "./AppCardMovie.vue";
import AppCardSerie from "./AppCardSerie.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    AppCardMovie,
    AppCardSerie
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div v-if="store.isLoading">Loading...</div>
  <div v-else class="row mt-4">
    <h2 v-show="this.store.displayTitleSection">Movies</h2>
    <div class="col-3 g-4" v-for="movie in store.movies" :key="movie.id">
      <AppCardMovie :movie="movie" />
    </div>
    <h2 v-show="this.store.displayTitleSection">Series</h2>
    <div class="col-3 g-4" v-for="serie in store.series" :key="serie.id">
        <AppCardSerie :serie="serie"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
