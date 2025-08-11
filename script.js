// script.js
// Navigation Bar
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
        textSpan.innerText = currentText.substring(0, charIndex--);
        if(charIndex < 0){
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; 
            setTimeout(typeText, 400);
        }else{
            setTimeout(typeText, typingSpeed / 1);
        }
         }else{
         textSpan.innerText = currentText.substring(0, charIndex++);
         if(charIndex > currentText.length){
            isDeleting = true
            setTimeout(typeText, pauseTime);
         }else{
            setTimeout(typeText, typingSpeed)
         }
         }
}

if(textSpan) typeText();


// Testimonial
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialPagination = document.getElementById('testimonial-pagination');
let testimonialIndex = 0;

testimonialCards.forEach((_, i) =>{
    const dot = document.createElement('div');
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
    dot.addEventListener('click', () => {
        showTestimonial(i);
    });
    testimonialPagination.appendChild(dot);
})

function showTestimonial(index){
  testimonialCards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  })
  document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  testimonialIndex = index;
}

// Features
const featureCards = document.querySelectorAll('.feature-card');
const featureDotsBox = document.querySelector('.feature-dots');
const prevBtn = document.querySelector('.feature-prev');
const nextBtn = document.querySelector('.feature-next');
let featureIndex = 0;

featureCards.forEach((_, i) =>{
    const dot = document.createElement('button');
    dot.className = 'feature-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Show feature ${i + 1}`);
    dot.addEventListener('click', () => showFeature(i));
    featureDotsBox.appendChild(dot);
})

function showFeature(index){
    featureCards.forEach((card, i) =>{
        card.classList.toggle('active', i === index);
    });

    document.querySelectorAll('.feature-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    })
    featureIndex = index;
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        featureIndex = (featureIndex - 1 + featureCards.length) % featureCards.length;
        showFeature(featureIndex);
    });

    nextBtn.addEventListener('click', () => {
        featureIndex = (featureIndex + 1) % featureCards.length;
        showFeature(featureIndex);
    });
}

// First video player
const firstVideo = document.getElementById('connectVideo');
const videoToggle = document.getElementById('videoToggler');

if (firstVideo && videoToggle) {
    function newButton(){
        videoToggle.innerText = firstVideo.paused ? '▶' : '⏸';
        videoToggle.setAttribute('aria-label', firstVideo.paused ? 'Play video' : 'Paused video');
    }

    videoToggle.addEventListener('click', function(){
        if(firstVideo.paused){
            firstVideo.play();
        } else{
            firstVideo.pause();
        }
        newButton();
    });

    firstVideo.addEventListener('play', newButton);
    firstVideo.addEventListener('pause', newButton);
    newButton();
}

// Video Player
const video = document.getElementById('connectVid');
const toggleVid = document.getElementById('videoToggle');

if (video && toggleVid) {
    function updateButton(){
        toggleVid.innerText = video.paused ? '▶' : '⏸';
        toggleVid.setAttribute('aria-label', video.paused ? 'Play video' : 'Paused video');
    }

    toggleVid.addEventListener('click', function(){
        if(video.paused){
            video.play()
        } else{
            video.pause()
        }
        updateButton();
    });

    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    updateButton();
}

//Footer DropDowns
document.querySelectorAll('.footer-section').forEach((section, num) => {
    const btn = section.querySelector('.footer-box-toggle');
    const list = section.querySelector('.footer-box-list');
    if (num === 0) {
        section.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        list.style.maxHeight = list.scrollHeight + "px";
    } else {
        btn.setAttribute('aria-expanded', 'false');
        list.style.maxHeight = null;
    }
    btn.addEventListener('click', function() {
        if(window.innerWidth < 900){
            const isOpen = section.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (isOpen) {
                list.style.maxHeight = list.scrollHeight + "px";
            } else {
                list.style.maxHeight = null;
            }
        }
    });
});
window.addEventListener('resize', () => {
    document.querySelectorAll('.footer-section.open .footer-box-list').forEach(list => {
        list.style.maxHeight = list.scrollHeight + "px";
    });
});