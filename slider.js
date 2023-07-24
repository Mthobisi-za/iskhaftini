var collection = [
    { name: 'amagwinya', url: '/assets/titles/Group 109.png' },
    { name: 'amagwinya', url: '/assets/titles/Group 112.png' },
    { name: 'boots', url: '/assets/titles/Group 107.png' },

]
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
    splide.on('move', (e) => {
        var index = Number(e);
        console.log(index)
        if (e == 1) {
            document.querySelector('.first').src = collection[1].url;
            document.querySelector('.second').src = collection[2].url;
            document.querySelector('.third').src = collection[0].url;
        } else if (e == 2) {
            document.querySelector('.first').src = collection[2].url;
            document.querySelector('.second').src = collection[0].url;
            document.querySelector('.third').src = collection[1].url;
        } else if (e == 0) {
            document.querySelector('.first').src = collection[0].url;
            document.querySelector('.second').src = collection[1].url;
            document.querySelector('.third').src = collection[2].url;
        }

    });
});