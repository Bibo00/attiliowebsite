document.addEventListener('DOMContentLoaded', function() {
    const numImg = 9;
    /*<section class="hero">
            <div class="hero-inner justify-center flex-column" id="section-7">
                <figure></figure>
                <div class="titles services">
                    <h1>Servizi</h1>
                </div>
            </div>
        </section>*/
    const container = document.createElement('div');
    container.classList.add('container-tot');
    const footer = document.getElementsByTagName('footer');

    document.body.insertBefore(container, footer[0]);
    for (let index = 0; index < numImg; index++) {
        const hero = document.createElement('section');
        hero.classList.add('hero');

        const heroInner = document.createElement('div');
        heroInner.classList.add('hero-inner');
        heroInner.setAttribute('id', `section-${index}`);
        
        const figure = document.createElement('figure');
        heroInner.appendChild(figure);
    
        if(index == numImg - 1){
            const service = document.createElement('div');
            service.classList.add('services');
            const h1 = document.createElement('h1');
            h1.textContent = 'Menù';
            service.appendChild(h1);
            heroInner.appendChild(service);
        }
        hero.appendChild(heroInner);

        const firstChild = container.firstChild;
        if (firstChild !== null) {
            container.insertBefore(hero, firstChild);
        } else {
            container.appendChild(hero);
        }
    }
});
