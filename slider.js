document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        focus: 'center',
        arrows: true,
        easing: 'cubic-bezier(.17,.67,.83,.67)',
        drag: true,
        flickPower: 600,
        updateOnMove: true,
        breakpoints: {
            1165: {
                perPage: 2,
            },
            833: {
                perPage: 1,
            }
        }
    });
    splide.mount();
});