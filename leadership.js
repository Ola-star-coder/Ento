document.addEventListener('DOMContentLoaded', () => {
  const tabButton = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane')

  tabButton.forEach(button => {
    button.addEventListener('click', () => {
      tabButton.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      button.classList.add('active');
      const targetTabId = button.dataset.tab;
      const targetTabPane = document.getElementById(targetTabId);
       console.log('Target Tab ID:', targetTabId);
       if(targetTabPane){
        targetTabPane.classList.add('active');
       } else {
        console.error('Tab not found:', targetTabId);
       }
    })
  })
});