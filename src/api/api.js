import * as axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://pixabay.com/api'
});

const KEY = '11370902-19d6d747d66b3dd76f6049b2b'

export const imgSearchAPI = {
    getPhotos (qw, page) {
        return instance.get(`?key=${KEY}&q=${qw}&page=${page}`)
    },
       
}