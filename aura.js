const auraVideos = document.querySelectorAll('.aura-video');
const auraContents = document.querySelectorAll('.aura-content');
const auraHeroBoxes = document.querySelectorAll('.aura-hero-box');
let currentHero = 0;
let isScrolling = false;

const contentObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        const content = entry.target;
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
}, {threshold: 0.6});

auraContents.forEach(content => contentObserver.observe(content));

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        const video = entry.target;

        if(entry.isIntersecting){
            video.play()
        }else{
            video.pause()
        }
    });
}, {threshold: 0.6});

auraVideos.forEach(video => observer.observe(video));

