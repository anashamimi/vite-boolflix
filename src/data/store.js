import {reactive} from 'vue';

export const store = reactive({
    filmList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: '',
    key: '?api_key=3e3661c47204bc670a4a46262eb30482',

});