document.querySelectorAll('.footer-section').forEach((section, idx) => {
    const btn = section.querySelector('.footer-box-toggle');
    const list = section.querySelector('.footer-box-list');
    // Open first section by default
    if (idx === 0) {
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