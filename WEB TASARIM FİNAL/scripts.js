const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

function showSlide() {
    // Bu kod, geçiş animasyonu sırasında `transform` ile slider'ın sağa kaymasını sağlar
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index++;
    if (index >= slideCount) {
        index = 0; // Slider başa döner
    }
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slideCount - 1; // Slider sona döner
    }
    showSlide();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Otomatik geçiş için
setInterval(nextSlide, 50000); // 5 saniyede bir slider geçişi
