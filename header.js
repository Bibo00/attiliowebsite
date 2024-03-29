document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var nav = document.querySelector('.nav');

    menuIcon.addEventListener('click', function() {
        if (nav.classList.contains('side-menu')) {
            nav.classList.remove('side-menu');
            nav.classList.add('hide');
            
        } else {
            nav.classList.remove('hide');
            nav.classList.add('side-menu');
            menuIcon.classList.add('hide');
        }
    });

    document.addEventListener('click', function(event) {
        var isMenuIconClicked = menuIcon.contains(event.target);
        if (!isMenuIconClicked) {
            menuIcon.classList.remove('hide');
            nav.classList.add('hide');
        }
    });
});