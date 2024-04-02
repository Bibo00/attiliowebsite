document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('checkbox');
    var container = document.querySelector('.container-tot');

    menuIcon.addEventListener('click', function() {
            if (container.classList.contains('hide')) {
                container.classList.remove('hide');
            } else {
                container.classList.add('hide');
            }
    });

   /* document.addEventListener('click', function(event) {
        var isMenuIconClicked = menuIcon.contains(event.target);
        if (!isMenuIconClicked) {
            menuIcon.classList.remove('hide');
            nav.classList.add('hide');
        }
    });*/
});