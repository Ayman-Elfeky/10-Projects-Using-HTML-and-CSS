const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');
const SLIDES_COUNT = slides.length;
console.log(SLIDES_COUNT);
const carousel = document.getElementById('carousel');
const ll = carousel.querySelector('h1')
let currentSlide = 0;

left.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = SLIDES_COUNT - 1;
        ll.style.color = 'white'
    }

    updateCarousel();
});

right.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide > SLIDES_COUNT - 1) {
        currentSlide = 0;
        ll.style.color = 'white'
    }


    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(${-currentSlide * slides[0].offsetWidth}px)`;
    const bgColor = slides[currentSlide].getAttribute('data-bg');
    document.body.style.background = `#${bgColor}`;
    const logoElements = document.querySelectorAll('.logo, .phone, .hamburger');
    slides.forEach((slide, index) => {
        const h1 = slide.querySelector('h1');
        const link = slide.querySelector('a');

        if (index === currentSlide) {

            if (bgColor === 'ffffff') {
                h1.style.color = 'black';
            } else {
                h1.style.color = 'white';
            }
        } else {
            h1.style.color = 'black';
        }

        link.style.color = 'white';
    });

    logoElements.forEach(el => {
        el.style.color = (currentSlide === 0) ? '' : 'black';
    });
}

