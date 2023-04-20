import { reactive } from "vue";

export const store = reactive({
    movies: [],
    series: [],
    apiURL: "https://api.themoviedb.org/3",
    api_key: "a75b5c85872faec5e03dcc299638b8a5",
    query: ""
});