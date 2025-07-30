// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('search');
//     const dropdown = document.getElementById('search-dropdown');

//     searchInput.addEventListener('focus', function() {
//         dropdown.style.display = 'block';
//     });

//     searchInput.addEventListener('blur', function() {
//         // Delay hiding to allow click on dropdown
//         setTimeout(() => { dropdown.style.display = 'none'; }, 150);
//     });

//     // Optional: Fill input when option clicked
//     dropdown.querySelectorAll('.dropdown-option').forEach(option => {
//         option.addEventListener('mousedown', function(e) {
//             searchInput.value = this.textContent;
//         });
//     });
// });

// 