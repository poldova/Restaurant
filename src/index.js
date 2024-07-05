import './style.css';
import { loadHome } from './assets/page/home';
import { loadMenu } from './assets/page/menu';
import { loadAbout } from './assets/page/about';

const content = document.querySelector('#content');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        let target = e.target.textContent;
        console.log(target);
        content.textContent = null;
        buttons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        switch(target) {
            case 'Home':
                loadHome();
                break;
            case 'Menu':
                loadMenu();
                break;
            case 'About':
                loadAbout();
                break;         
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    buttons[0].classList.add('active');
    loadHome();
})