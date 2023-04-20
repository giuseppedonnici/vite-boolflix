<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import {store} from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    handleSearch() {
      if(this.store.query) {
        this.getMovies();
      }
    },
    getMovies() {
      axios.get(`${this.store.apiURL}/search/movie`, {
          params: {
            api_key: this.store.api_key,
            query: this.store.query
          }
        }).then(resp => {
          this.store.movies = resp.data.results;
        }).catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<template>
  <AppHeader @search="handleSearch"/>
  <div class="container">
    <AppMain />
    
  </div>
</template>

<style lang="scss">
  @use "./styles/general.scss";

</style>