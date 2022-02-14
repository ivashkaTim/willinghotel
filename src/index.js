import './styles/index.scss';

// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import openBurgerMenu from './modules/openBurgerMenu';
import changeLinkActive from './modules/changeLinkActive';
import openSelect from './modules/openSelect';

openBurgerMenu();
changeLinkActive('.tabs', 'tabs__button', 'tabs__button--active');
changeLinkActive('.hall-conference__list', 'hall-conference__link', 'hall-conference__link--active');
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
