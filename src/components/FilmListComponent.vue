<template>
  <div class="col-12 col-sm-3 col-md-2">
    <vue-flip active-click height="300px" class="vue-flip">
      <template v-slot:front>
        <div class="card-img">
          <img :src="image" :alt="title" class="img-fluid">
        </div>
      </template>
      <template v-slot:back>
        <div class=" card-body">
          <p>{{ title }}</p>
          <p>{{ originaltitle }}</p>
          <div class="flag">
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
import {flags} from '../data/data';

export default {
  name: 'FilmListComponent',
  props: [
    'title', 'originaltitle', 'language', 'vote', 'image'
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
.vue-flip{
  cursor: pointer;
}

.card-body{
  background-color: black;
  height: 100%;
  text-align: center;
}
</style>