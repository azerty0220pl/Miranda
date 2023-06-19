import Swiper from '../node_modules/swiper/swiper-bundle';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar'
    }
});