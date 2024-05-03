document.addEventListener('DOMContentLoaded', function() {
    const numImg = 8;
    const container = document.createElement('div');
    container.classList.add('container-tot');
    document.body.append(container);
    for (let index = 0; index < numImg; index++) {
        const hero = document.createElement('section');
        hero.classList.add('hero');

        const heroInner = document.createElement('div');
        heroInner.classList.add('hero-inner');
        heroInner.setAttribute('id', `section-${index}`);
        
        const figure = document.createElement('figure');
        heroInner.appendChild(figure);

        hero.appendChild(heroInner);

        const firstChild = container.firstChild;
        if (firstChild !== null) {
            container.insertBefore(hero, firstChild);
        } else {
            container.appendChild(hero);
        }
    }
});
