import { plates } from "./plates.js";
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero-inner');
    
    const categories = plates;

    for (let index = 1; index < images.length; index++) {
        const dishesContainer = document.createElement('div');
        dishesContainer.classList.add('dishes');

        const categoryIndex = (index - 1) % categories.length;

        const category = categories[categoryIndex];

        const section = document.createElement('section');
        var plateClass = category.title.toLocaleLowerCase().replaceAll(' ', '-');
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
                    /*if(plate.data.length > 7){
                        subTitle.classList.add('two-rows');
                    } else {
                        subTitle.classList.add('one-row');
                    }*/
                    
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

                if (plate.list) {
                    const secondTitleLi2 = document.createElement('ul');
                    plate.list.forEach((elmnt) => {
                        const secondTitleLi3 = document.createElement('li');
                        secondTitleLi3.classList.add('second-title');
                        secondTitleLi3.textContent = elmnt.option;
                        secondTitleLi2.appendChild(secondTitleLi3);
                    })
                    plateDiv.appendChild(secondTitleLi2);
                }
                platesContainer.appendChild(plateDiv);
            }
        });
        
        section.appendChild(h2);
        section.appendChild(platesContainer);
        dishesContainer.appendChild(section);
        
       

        images[index].appendChild(dishesContainer);
        if(category.data[0].subTitle || category.data[0].list){
            var imageHeight = platesContainer.parentElement.offsetHeight + (window.innerHeight*0.1);
        }
        if(category.data.length > 18){
            platesContainer.classList.add('two-rows', 'three-rows');
            var imageHeight = platesContainer.parentElement.offsetHeight + (window.innerHeight*0.25);
        }else if(category.data.length > 14){
            platesContainer.classList.add('two-rows', 'three-rows');
            var imageHeight = platesContainer.parentElement.offsetHeight + (window.innerHeight*0.25);
        }else if(category.data.length > 7){
            platesContainer.classList.add('two-rows');
            var imageHeight = platesContainer.parentElement.offsetHeight + (window.innerHeight*0.1);
        }
        else {
            platesContainer.classList.add('one-row');
            var imageHeight = platesContainer.parentElement.offsetHeight + (window.innerHeight*0.05);
        }
        images[index].parentElement.style.height = `${Math.round(imageHeight)}px`;
    }
});
