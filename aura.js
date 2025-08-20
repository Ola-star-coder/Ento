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

function goToHero(index){
    if(index < 0 || auraHeroBoxes.length) return;

    isScrolling = true;
    currentHero = index;
    auraHeroBoxes[index].scrollIntoView({behavior: "smooth"});

    setTimeout(() => { isScrolling = false; }, 1000);
}

window.addEventListener('wheel', (e) =>{
if(isScrolling) return;

if(e.deltaY > 0){
  goToHero(currentHero + 1);
} else if(e.deltaY < 0){
  goToHero(currentHero - 1);
}
});

window.addEventListener('keydown', (e) => {
  if (isScrolling) return;

  if (e.key === 'ArrowDown') goToSection(currentSection + 1);
  if (e.key === 'ArrowUp') goToSection(currentSection - 1);
});

// Touch swipes
let startY = 0;
window.addEventListener('touchstart', e => startY = e.touches[0].clientY);

window.addEventListener('touchend', e => {
  if (isScrolling) return;
  let endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) goToHero(currentHero + 1);
  if (endY - startY > 50) goToHero(currentHero - 1);
});