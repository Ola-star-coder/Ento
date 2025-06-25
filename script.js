document.getElementById('hamburger').addEventListener('click', function(){
    document.getElementById('nav-menu').classList.toggle('active');
})

window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    if (window.scrollY > 0){
     header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }

});

// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const totalSlides = slides.length;

function showSlide(index){
    slides.forEach((slide, i) =>{
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 7000);

showSlide(currentSlide);

// Rewriting Effects
const texts = ['CloudNai', 'Prof. Ai', 'Copilot', 'Pro Ai'];
const textSpan = document.getElementById('rewriter');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 180;
let pauseTime = 2500;

function typeText(){
    const currentText = texts[textIndex];
    if(isDeleting){
        textSpan.textContent = currentText.substring(0, charIndex--);
        if(charIndex < 0){
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; 
            setTimeout(typeText, 400);
        }else{
            setTimeout(typeText, typingSpeed / 1);
        }
         }else{
         textSpan.textContent = currentText.substring(0, charIndex++);
         if(charIndex > currentText.length){
            isDeleting = true
            setTimeout(typeText, pauseTime);
         }else{
            setTimeout(typeText, typingSpeed)
         }
         }
    }

    if(textSpan) typeText();


// Theme Toggle Functionality
// Icons for theme toggle
const sunIcon = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
const moonIcon = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>`;

function updateTheme(){
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? sunIcon : moonIcon;
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    updateTheme();
})

updateTheme();


const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');
let testimonialIndex = 0;

function showTestimonial(index){
  testimonialCards.forEach((card, i) =>{
    card.classList.toggle('active', i === index);
    card.setAttribute('aria-hidden', i !== index);
    if (i === index){
        card.focus();
    }
  })
}

testimonialPrev?.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(testimonialIndex);
})

testimonialNext?.addEventListener('click', () =>{
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
})