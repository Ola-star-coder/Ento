 document.addEventListener("DOMContentLoaded", function () {
        const videoSection = document.querySelector('.career-video');
        const video = videoSection.querySelector('video');
        video.pause();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(videoSection);
    });