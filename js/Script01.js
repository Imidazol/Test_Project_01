// document.addEventListener('DOMContentLoaded', function() {
//     const menuLinks = document.querySelectorAll('nav ul li a');

//     menuLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();

//             const targetPageId = this.getAttribute('href').substring(1);
//             const targetPage = document.getElementById(targetPageId);

//             targetPage.scrollIntoView({ behavior: 'smooth' });
//         });
//     });
// });