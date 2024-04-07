document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero-inner');

    const categories = [
        { title: 'Antipasti', data: [
            { plateTitle: 'Antipasto', description: 'di pesce freddo' },
            { plateTitle: 'Antipasto attilio', description: 'di pesce caldo e freddo' },
            { plateTitle: 'Alici farcite', description: 'con scarola su salsa', extraDescription: 'di prezzemolo e acciughe' },
            { plateTitle: 'Alici marinate' },
            { plateTitle: 'Soutè', description: 'di cozze e vongole' },
            { plateTitle: 'Tempura', description: 'di gamberoni al cacao', extraDescription: 'su vellutata di verdure' },
            { plateTitle: 'Crostini misti' }
        ]},
        { title: 'Primi', data: [
            { plateTitle: 'Spaghetti', description: 'allo scoglio' },
            { plateTitle: 'Spaghetti', description: 'alle vongole' },
            { plateTitle: 'Spaghetti', description: 'all\amatriciana di mare' },
            { plateTitle: 'Spaghetti', description: 'alla carbonara di mare' },
            { plateTitle: 'Tagliatelle', description: 'con cernia, pomodorini', extraDescription: 'e crema di pecorino' },
            { plateTitle: 'Gnocchi di patate', description: 'mare e monti' },
            { plateTitle: 'Gnocchi di semolino', description: 'con vellutata di gamberi' },
            { plateTitle: 'Risotto', description: 'alla marinara' },
            { plateTitle: 'Risotto', description: 'con cozze e zafferano', extraDescription: 'al profumo di cardamomo' },
            { plateTitle: 'Ravioli di pesce' }
        ]},
        { title: 'Secondi', data : [
            {subTitle: 'Di pesce', data: [
                { plateTitle: 'Frittura mista', description: 'dell\'adriatico' },
                { plateTitle: 'Grigliata mista', description: 'dell\'adriatico' },
                { plateTitle: 'Guazzetto leggero', description: 'di vongole e cozze su crostini', extraDescription:'di pane integrale' },
                { plateTitle: 'Spiedini', description: 'di calamari e gamberetti', extraDescription:'alla griglia' },
                { plateTitle: 'Salmone croccante', description: 'con noci pinoli e insalatina' },
                { plateTitle: 'Trancio di merluzzo', description: 'in crosta di patate' }
            ]}, 
            {subTitle: 'Di carne', data: [
                { plateTitle: 'Cotoletta', description: 'di manzo o pollo alla milanese', extraDescription: 'con patate fritte' },
                { plateTitle: 'Barchetta di pollo', description: 'con verdure' },
            ]}, 
           
        ]}
    ];

    images.forEach((image, index) => {
        const dishesContainer = document.createElement('div');
        dishesContainer.classList.add('dishes');

        const categoryIndex = index % categories.length;

        const category = categories[categoryIndex];

        const section = document.createElement('section');
        var plateClass = category.title.replaceAll(' ', '-');
        section.classList.add(plateClass, 'piatti');

        const h2 = document.createElement('h2');
        h2.textContent = category.title;

        const platesContainer = document.createElement('div');
        platesContainer.classList.add('plates');
        
        category.data.forEach((plate, idx) => {
            const plateDiv = document.createElement('div');
            plateDiv.classList.add(`plate-${idx + 1}`);
            if(plate.subTitle){
                const subTitle = document.createElement('div');
                var subTitleClass = plate.subTitle.toLowerCase().replaceAll('di ', '');
                subTitle.classList.add('sub-plates');
                subTitle.classList.add('center');
                subTitle.classList.add(`${subTitleClass}`);
                const h3 = document.createElement('h3');
                console.log(plate.subTitle);
                h3.textContent = plate.subTitle;
                h3.classList.add('h3');
                plate.data.forEach((pl, i) => {
                    const subPlateDiv = document.createElement('div');
                    subPlateDiv.classList.add(`sub-plate-${i + 1}`);
                    const princPlateName = document.createElement('li');
                    princPlateName.classList.add( 'sub-li-princ');
                    princPlateName.textContent = pl.plateTitle;
                    subPlateDiv.appendChild(princPlateName);
                    if (pl.description) {
                        const secondTitleLi1 = document.createElement('li');
                        secondTitleLi1.classList.add( 'sub-li-sec');
                        secondTitleLi1.textContent = pl.description;
                        subPlateDiv.appendChild(secondTitleLi1);
                    }
        
                    if (pl.extraDescription) {
                        const secondTitleLi2 = document.createElement('li');
                        secondTitleLi2.classList.add( 'sub-li-sec');
                        secondTitleLi2.textContent = pl.extraDescription;
                        subPlateDiv.appendChild(secondTitleLi2);
                    }
                    if(plate.data.length > 7){
                        subTitle.classList.add('two-rows');
                    } else {
                        subTitle.classList.add('one-row');
                    }
                    
                    subTitle.appendChild(subPlateDiv);
                    
                });
                const divProva = document.createElement('div');
                divProva.classList.add('sub-title');
                divProva.classList.add('flex-column');
                divProva.appendChild(h3);
                    divProva.appendChild(subTitle);
                    platesContainer.appendChild(divProva);
                    platesContainer.classList.add('flex-row');
            } else {
                const princTitleLi = document.createElement('li');
                princTitleLi.classList.add('princ-title');
                princTitleLi.textContent = plate.plateTitle;
                plateDiv.appendChild(princTitleLi);

                if (plate.description) {
                    const secondTitleLi1 = document.createElement('li');
                    secondTitleLi1.classList.add('second-title');
                    secondTitleLi1.textContent = plate.description;
                    plateDiv.appendChild(secondTitleLi1);
                }

                if (plate.extraDescription) {
                    const secondTitleLi2 = document.createElement('li');
                    secondTitleLi2.classList.add('second-title');
                    secondTitleLi2.textContent = plate.extraDescription;
                    plateDiv.appendChild(secondTitleLi2);
                }
                if(category.data.length > 7){
                    platesContainer.classList.add('two-rows');
                } else {
                    platesContainer.classList.add('one-row');
                }
                platesContainer.appendChild(plateDiv);
            }
        });
        section.appendChild(h2);
        section.appendChild(platesContainer);
        dishesContainer.appendChild(section);
        
        image.appendChild(dishesContainer);
    });
});
