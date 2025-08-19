const auraVideos = document.querySelectorAll('.aura-video');



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