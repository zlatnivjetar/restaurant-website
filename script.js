const navbarList = document.querySelector('#offcanvasNavbar > div.offcanvas-body.justify-content-end > ul')
const openNavCanvas = document.querySelector('nav .container button')
const closeNavCanvas = document.querySelector('#offcanvasNavbar > div.offcanvas-header > button')
const navLinks = document.querySelectorAll('#offcanvasNavbar > div.offcanvas-body.justify-content-end > ul li a')

openNavCanvas.addEventListener('click', () => {
  navbarList.classList.add('open')
  navLinks.forEach(link => link.classList.remove('link-dark'))
  navLinks.forEach(link => link.classList.add('link-light'))
})

closeNavCanvas.addEventListener('click', () => {
  navbarList.classList.remove('open')
  navLinks.forEach(link => link.classList.add('link-dark'))
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll("#hero img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex === slides.length) { slideIndex = 0 }
  slides[slideIndex].classList.add('active');
  setTimeout(showSlides, 4000);
}
