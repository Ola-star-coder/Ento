const auraVideos = document.querySelectorAll('.aura-video');
const auraContents = document.querySelectorAll('.aura-content');
const auraToolVideos = document.querySelectorAll('.aura-tool-vid');
const auraToolsContent = document.querySelectorAll('.aura-tool-box-content');

// the get most out.... video handler
const VideoObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        const video = entry.target;

        if(entry.isIntersecting){
            video.play()
        }else{
            video.pause()
        }
    });
}, {threshold: 0.6});

auraToolVideos.forEach(video => VideoObserver.observe(video));

// Yeah same same the content for that section
const ToolsObserver = new IntersectionObserver((entries) =>{
 entries.forEach(entry =>{
    if(entry.isIntersecting){
        entry.target.classList.add('showed');
    } else{
        entry.target.classList.remove('showed');
    }
 }), {threshold:0.6}});

 auraToolsContent.forEach(tool => ToolsObserver.observe(tool));

// This is for main aura content
const contentObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
}, {threshold: 0.6});

auraContents.forEach(content => contentObserver.observe(content));

// This is for main aura videos
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

