import urld from '../img/home.jpg';

function loadHome() {
    const content = document.querySelector('#content');
    const section = document.createElement('div');
    const greeting = document.createElement('div');
    const hero = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const img = new Image();
    const credit = document.createElement('div');
    const a = document.createElement('a');
    const a2 = document.createElement('a');

    h1.textContent = 'Welcome to the Beef!';
    h2.textContent = 'BAR & RESTAURANT';
    p.textContent = `Experience the heart of Chicago's culinary tradition at The Original Beef of Chicagoland, where every sandwich tells a story of flavor and heritage.`;
    img.src = urld;
    credit.textContent = 'Photo by ';
    a.href = 'https://unsplash.com/@matthewhenry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Matthew Henry';
    a2.href = 'https://unsplash.com/photos/white-led-neon-signage-on-store-T-G9PVLOfOY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    a2.rel = 'noopener noreferrer';
    a2.textContent = 'Unsplash';
  
    section.classList.add('section');
    greeting.classList.add('greeting');
    hero.classList.add('hero');
    credit.classList.add('credit');

    content.appendChild(section);
    section.append(greeting, hero);
    greeting.append(h1, h2, p);
    hero.append(img, credit)
    credit.append(a, ' on ', a2);
}

export {loadHome}