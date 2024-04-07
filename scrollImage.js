/*document.addEventListener('DOMContentLoaded', function() {
    const wallpapers = document.querySelector('.wallpapers');
    const backgroundImgs = document.querySelectorAll('.background-img');
    let currentImageIndex = 0;

    
    setBackground(currentImageIndex);

    
    let lastScrollPosition = window.scrollY;

    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        this.alert();
        
        if (lastScrollPosition > 0) {
            currentImageIndex = (currentImageIndex + 1) % backgroundImgs.length;
            setBackground(currentImageIndex);

            
            lastScrollPosition = scrollPosition;
        }
    });


    function setBackground(index) {
        backgroundImgs.forEach(img => {
            img.classList.add = '100%';
        });

       
        backgroundImgs[index].style.display = 'block';
        setTimeout(() => {
            backgroundImgs[index].style.top = '0';
        }, 0);
    }
});*/
