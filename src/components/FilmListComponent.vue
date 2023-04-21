<template>
  <div class="col-12 col-sm-3 col-md-2">
    <vue-flip active-click class="card">
      <template v-slot:front>
        <div class=" card-img">
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
.flip-card {
  background-color: black;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
</style>