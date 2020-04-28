import './styles/style.scss';
import script from './script';
import scrollToTop from './scrollToTop';
import addProducts from './addProducts';
import updateyear from './updateYear';

window.addEventListener('DOMContentLoaded', (event) => {
    script();
    scrollToTop();
    addProducts();
    updateyear();
});
