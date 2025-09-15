export function setupSlider() {
    const slides = document.querySelectorAll('.js-slider__item');
    const leftButton = document.querySelector('.js-button-slider-left');
    const rightButton = document.querySelector('.js-button-slider-right');
    const navigationDots = document.querySelectorAll('.js-slider__navigation-dot');

    let currentIndex = 0;

    const updateSlider = () => {
        // Update slide visibility
        slides.forEach((slide, index) => {
            slide.classList.toggle('slider__item--show', index === currentIndex);
            slide.classList.toggle('slider__item--hide', index !== currentIndex);
        });

        navigationDots.forEach((dot, index) => {
            dot.classList.toggle('slider__navigation-dot--active', index === currentIndex);
        });

        leftButton.classList.toggle('material-symbols-outlined--slider-last', currentIndex === 0);
        rightButton.classList.toggle('material-symbols-outlined--slider-last', currentIndex === slides.length - 1);
    };

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }

        leftButton.classList.add('material-symbols-outlined--slider--fade-out');

        setTimeout(() => {
            leftButton.classList.remove('material-symbols-outlined--slider--fade-out');
        }, 300);
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }

        rightButton.classList.add('material-symbols-outlined--slider--fade-out');

        setTimeout(() => {
            rightButton.classList.remove('material-symbols-outlined--slider--fade-out');
        }, 300);
    });

    updateSlider(); 
}
