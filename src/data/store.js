import {reactive} from 'vue';

export const store = reactive({
    filmList: [],
    seriesList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },    
    params: {
        api_key: '3e3661c47204bc670a4a46262eb30482',
        query: ''
    },

    imagePath: 'https://image.tmdb.org/t/p/original',


});