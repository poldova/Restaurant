import url from '../img/menu.jpg';

function loadMenu() {
    const content = document.querySelector('#content');
    const hero = document.createElement('div');
    const credit = document.createElement('div');
    const a = document.createElement('a');
    const a2 = document.createElement('a');
    credit.textContent = 'Photo by ';
    a.href = 'https://unsplash.com/@claybanks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Clay Banks';
    a2.href = 'https://unsplash.com/photos/computer-monitor-31l-8hY1mt4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    a2.rel = 'noopener noreferrer';
    a2.textContent = 'Unsplash';
    hero.classList.add('hero');
    credit.classList.add('credit');

    const img = new Image();
    img.src = url;
    content.appendChild(hero);
    hero.append(img, credit)
    credit.append(a, ' on ', a2);
}

export { loadMenu }