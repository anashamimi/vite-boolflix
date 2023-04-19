<template>
  <div>
    <HeaderComponent/>
    <FilmListComponent/>    
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
      FilmListComponent,
      HeaderComponent,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getFilms() {
        const url = store.baseUrl + store.endPoint + store.key
        axios.get(url).then((res) => {
          console.log(res.data);
          store.filmList = res.data;
        })
      }
    },
    mounted() {
      store.endPoint = 'search/movie';
      this.getFilms();
    }
  }
</script>

<style lang="scss" scoped>

</style>