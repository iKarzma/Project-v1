// Back to top button functionality
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    btnTop.classList.add('active');
  } else {
    btnTop.classList.remove('active');
       behavior: "smooth"
  }
});