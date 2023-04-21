<template>
  <div class="col-12 col-sm-3 col-md-2">
    <vue-flip active-click transition="1s" class="vue-flip">
      <template v-slot:front>
        <div class="card-head">
          <div class="card-img">
            <img :src="image" :alt="title" class="img-fluid rounded-4">
          </div>          
          <div class="card-hover rounded-4">
            <p class="m-0 pb-2">{{ title }}</p>
            <p>{{ date }}</p>
          </div>
        </div>
      </template>
      <template v-slot:back>
        <div class=" card-body p-3 w-100 h-100 rounded-4">
          <p>{{ title }}</p>
          <div class="flag d-flex justify-content-center align-items-center">
            <p class="m-0">Language:</p>
            <img :src="'/public/img/' + flag + '.png'" :alt="language">
          </div>
          <p>{{ vote }}</p>

          
        </div>



      </template>
    </vue-flip>






  </div>
</template>

<script>
import { VueFlip } from 'vue-flip';
import { store } from '../data/store';
import { flags } from '../data/data';

export default {
  name: 'FilmListComponent',
  props: [
    'title', 'originaltitle', 'language', 'vote', 'image', 'date'
  ],
  data() {
    return {
      store,
      flagList: flags,
    }
  },

  components: {
    'vue-flip': VueFlip
  },

  computed: {
    flag() {
      if (this.flagList.includes(this.language)) {
        return this.language;
      } else {
        return 'unknown';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-flip {
  cursor: pointer;
  transition: scale 1s;
  height: 300px;

  .card-hover {
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: white;
    transition: opacity 0.5s;
    background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.4), rgba(0,0,0,1));
    transition: display 1s;
  }

  &:hover {
    scale: 1.15;

    .card-hover {
      display: block;
    }
  }
}

.card-body {
  background-color: black;
  height: 100%;
  text-align: center;
}
</style>