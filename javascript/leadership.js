document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-link');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      button.classList.add('active');
      const targetTabId = button.dataset.tab;
      const targetTabPane = document.getElementById(targetTabId);
      if (targetTabPane) {
        targetTabPane.classList.add('active');
      }
    });
  });
});