import url from '../img/about.jpg';
function loadAbout() {
    const content = document.querySelector('#content');
    const section = document.createElement('div');
    const greeting = document.createElement('div');
    const hero = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = new Image();
    const credit = document.createElement('div');
    const a = document.createElement('a');
    const a2 = document.createElement('a');

    h1.textContent = 'Our Story';
    p.textContent = `Experience the heart of Chicago's culinary tradition at The Original Beef of Chicagoland, where every sandwich tells a story of flavor and heritage.`;
    img.src = url;
    credit.textContent = 'Photo by ';
    a.href = 'https://unsplash.com/@sebastiancoman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Sebastian Coman Photography';
    a2.href = 'https://unsplash.com/photos/person-putting-food-on-plate-cQbOSRpElxw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
    a2.rel = 'noopener noreferrer';
    a2.textContent = 'Unsplash';
  
    section.classList.add('section');
    greeting.classList.add('greeting');
    hero.classList.add('hero');
    credit.classList.add('credit');

    content.appendChild(section);
    section.append(greeting, hero);
    greeting.append(h1, p);
    hero.append(img, credit)
    credit.append(a, ' on ', a2);
}

export {loadAbout}