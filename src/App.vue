<template>
  <div>
    <HeaderComponent @on-search="getData"/>


    <section class="container-fluid text-white">
      <h2>MOVIES</h2>
      <div class="row">
        <FilmListComponent v-for="(film, index) in store.filmList" :key="film.id"
        :image="store.imagePath + film.poster_path"
        :title="film.title" :originaltitle="film.original_title"
        :language="film.original_language" :vote="film.vote_average"/>  
      </div>
    </section>

    <section class="container-fluid text-white">
      <h2>SERIES</h2>
      <div class="row">
        <FilmListComponent v-for="(film, index) in store.seriesList" :key="film.id"
        :image="store.imagePath + film.poster_path"
        :title="film.name" :originaltitle="film.original_name"
        :language="film.original_language" :vote="film.vote_average"/>  
      </div>
    </section>
      
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import FilmListComponent from './components/FilmListComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FilmListComponent,      
    },
    data() {
      return {
        store
      }
    },
    methods: {
      
      getFilms() {
        const url = store.baseUrl + store.endPoint.movie
        const options = {
          params: store.params
        }
        axios.get(url, options).then((res) => {
          console.log(res.data.results);
          this.store.filmList = res.data.results;
        })
      },
      getSeries() {
        const url = store.baseUrl + store.endPoint.tv
        const options = {
          params: store.params
        }
        axios.get(url, options).then((res) => {
          console.log(res.data.results);
          this.store.seriesList = res.data.results;
        })
      },

      getData() {
        this.getFilms();
        this.getSeries();
      },
    },
    mounted() {
      
    }
  }
</script>

<style lang="scss" scoped>

</style>