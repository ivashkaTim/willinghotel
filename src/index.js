import './styles/index.scss';

import openBurgerMenu from './modules/openBurgerMenu';
import changeLinkActive from './modules/changeLinkActive';
import openSelect from './modules/openSelect';

openBurgerMenu();
changeLinkActive('.tabs', 'tabs__button', 'tabs__button--active');
changeLinkActive('.tabs-nav__list', 'tabs-nav__item', 'is-active');
openSelect();
