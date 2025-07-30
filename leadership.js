document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons and panes
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Get the target tab pane ID from the data-tab attribute
      const targetTabId = button.dataset.tab;
      const targetTabPane = document.getElementById(targetTabId);

      // Add 'active' class to the corresponding tab pane
      if (targetTabPane) {
        targetTabPane.classList.add('active');
      }
    });
  });
});

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