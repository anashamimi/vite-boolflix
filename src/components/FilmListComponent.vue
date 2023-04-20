<template>                  
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card bg-black">
            <div class="card-image ">
                <img :src="image" :alt="title" class="img-fluid">
            </div>
            <p>{{ title }}</p>
            <p>{{ originaltitle }}</p>
            <p>{{ language }}</p>
            <p>{{ vote }}</p>
        </div>
        
    </div>      
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'FilmListComponent',
        props: [
            'title', 'originaltitle', 'language', 'vote', 'image'
        ],
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>