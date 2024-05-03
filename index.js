document.addEventListener('DOMContentLoaded', function() {
    const heroInnerContainers = document.querySelectorAll('.hero-inner');
    
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map-div');
    mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.990353153631!2d13.722749075268013!3d43.314461374275005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133272788b44b01f%3A0x3433c334dd6b509d!2sAttilio%20Sas%20Di%20Montanari%20Giuseppe%20Stecconi%20Diana%20E%20C.!5e0!3m2!1sit!2sit!4v1712253450544!5m2!1sit!2sit" class="maps iframe"></iframe>`;

    const titlesContent = [
        { title: 'ATTILIO', description: 'SCOPRI LA MIGLIOR SPIAGGIA DI CIVITANOVA' },
        { title: 'IL SOLE', description: 'UN ANGOLO DI PARADISO SULLA COSTA ADRIATICA' },
        { title: 'IL CIBO', description: 'DOVE I SAPORI DEL MARE INCONTRANO L\'OSPITALITÀ AUTENTICA' },
        { title: 'LA VISTA', description: 'UNO SPETTACOLO MOZZAFIATO SULL\'ORIZZONTE BLU' },
        { title: 'VIENI A TROVARCI'}
    ];

    heroInnerContainers.forEach((container, index) => {
        const titles = document.createElement('div');
        titles.classList.add('titles');
        titles.innerHTML = `
            <h1 class="h1">${titlesContent[index].title}</h1>
        `;
        if(titlesContent[index].description){
            titles.innerHTML += `<h4 class="h2">${titlesContent[index].description}</h4>`;
        }
        container.appendChild(titles);
        if(titlesContent[index].title == 'VIENI A TROVARCI'){
            container.appendChild(mapDiv);
            container.classList.add('hero-maps');
            container.classList.add('align-center');
        } else {
            container.classList.add('justify-center');
        }
        container.classList.add('flex-column');
        
    });
});
