document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.dot');
    const colorButtons = document.querySelectorAll('.color-1, .color-2, .color-3, .color-1-desktop, .color-2-desktop, .color-3-desktop');
    let currentIndex = 0;
    let currentColor = 'default';

    // Function to update dots
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if(index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    function showColorImages(color) {
        currentColor = color;
        images.forEach(img => {
            img.style.display = 'none';
            img.classList.remove('active');
        });
        
        const colorImages = document.querySelectorAll(`.slider-image[data-color="${color}"]`);
        if(colorImages.length > 0) {
            colorImages[0].style.display = 'block';
            colorImages[0].classList.add('active');
        }
        
        currentIndex = 0;
        updateDots();
    }

    function showImage(index) {
        const colorImages = Array.from(document.querySelectorAll(`.slider-image[data-color="${currentColor}"]`));
        colorImages.forEach(img => {
            img.style.display = 'none';
            img.classList.remove('active');
        });
        
        if(colorImages[index]) {
            colorImages[index].style.display = 'block';
            colorImages[index].classList.add('active');
        }
        updateDots();
    }

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
        const color = button.classList.contains('color-1') || button.classList.contains('color-1-desktop') ? 'default' :
        button.classList.contains('color-2') || button.classList.contains('color-2-desktop') ? 'milk' :
        'dark';
            
        colorButtons.forEach(btn => btn.style.border = 'none');
        button.style.border = '2px solid #346bf0';
        showColorImages(color);
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // Call it haha
    showColorImages('default');
});