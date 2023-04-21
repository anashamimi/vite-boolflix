<template>
  <div class="col-12 col-sm-3 col-md-2">
    <vue-flip active-click height="300px">
      <template v-slot:front>
        <div class="card-img">
          <img :src="image" :alt="title" class="img-fluid">
        </div>
      </template>
      <template v-slot:back>
        <div class=" card-body">
          <p>{{ title }}</p>
          <p>{{ originaltitle }}</p>
          <p>{{ language }}</p>
          <p>{{ vote }}</p>
        </div>

      </template>
    </vue-flip>




  </div>
</template>

<script>
import { VueFlip } from 'vue-flip';
import { store } from '../data/store';

export default {
  name: 'FilmListComponent',
  props: [
    'title', 'originaltitle', 'language', 'vote', 'image'
  ],
  data() {
    return {
      store,
    }
  },

  components: {
    'vue-flip': VueFlip
  }
};
</script>

<style lang="scss" scoped>
.card-body{
  background-color: black;
  height: 100%;
}
</style>