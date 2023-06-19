import Swiper from '../node_modules/swiper/swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});