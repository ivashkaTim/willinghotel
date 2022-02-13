import './styles/index.scss';

// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import openBurgerMenu from './modules/openBurgerMenu';
import changeTabs from './modules/changeTabs';
import openSelect from './modules/openSelect';

openBurgerMenu();
changeTabs();
openSelect();

// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 16,
//   loop: true,
//   navigation: {
//     nextEl: '.button_next',
//     prevEl: '.button_prev',
//   },
//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//       spaceBetween: 36,
//     },
//     1000: {
//       slidesPerView: 3,
//       spaceBetween: 36,
//     },
//   },
// });
