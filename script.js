const navbarList = document.querySelector('#offcanvasNavbar > div.offcanvas-body.justify-content-end > ul')
const openNavCanvas = document.querySelector('nav .container button')
const closeNavCanvas = document.querySelector('#offcanvasNavbar > div.offcanvas-header > button')
const navLinks = document.querySelectorAll('#offcanvasNavbar > div.offcanvas-body.justify-content-end > ul li a')

// Scroll to top on reload
window.addEventListener('DOMContentLoaded', () => {
  window.scrollBy(0, 0)
})

// Navbar function
openNavCanvas.addEventListener('click', () => {
  navbarList.classList.add('open')
  navLinks.forEach(link => link.classList.remove('link-dark'))
  navLinks.forEach(link => link.classList.add('link-light'))
})

closeNavCanvas.addEventListener('click', () => {
  navbarList.classList.remove('open')
  navLinks.forEach(link => link.classList.add('link-dark'))
})

// ++++++++++ Home page slider ++++++++++
let slideIndex = 0;
try {
  showSlides();
} catch (err) {
  null
}

function showSlides(e) {
  let slides = document.querySelectorAll("#hero img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex === slides.length) { slideIndex = 0 }
  slides[slideIndex].classList.add('active');
  setTimeout(showSlides, 4000);
}

// ++++++++++ Remove page scroll if it's About page ++++++++++
if (window.location.pathname == '/about.html') document.body.style.overflowY = 'hidden'
// START BY RESIZING TEXT AND ADJUSTING PROPER WIDTH AND HEIGHT, WHICH WILL MAKE THE PAGE SHORTER

const wrap = document.querySelector('.wrap')
wrap.addEventListener('scroll', (e) => {
  const pos = Math.round(window.scrollY)
  const scrollStop = Math.round(window.innerHeight)
  const wrapBottom = Math.round(document.querySelector('#about-info').getBoundingClientRect().bottom - 100)

  if (wrapBottom < scrollStop - pos) {
    wrap.style.overflowY = 'hidden'
    document.body.style.overflowY = 'scroll'
    document.querySelector('footer').style.display = 'flex'

  }
  console.log(wrapBottom, scrollStop - pos)
})

window.addEventListener('scroll', (e) => {
  const pos = Math.round(window.scrollY)

  if (pos === 0) {
    wrap.style.overflowY = 'scroll'
    wrap.scrollBy(0, -40)
    document.body.style.overflowY = 'hidden'
    document.querySelector('footer').style.display = 'none'

  }
  console.log(pos)
})
// resume scroll if top is reached

window.addEventListener('load', () => {
  document.body.style.overflowY = 'hidden'
  document.querySelector('footer').style.display = 'none'
  window.scrollTo(0, 0)
})