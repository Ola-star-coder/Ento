document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        images[index].classList.add('active');
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });
});