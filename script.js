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

// Hero image slider
const heroImg = document.querySelector('#hero img')
let activeIndex = 0

function changeSlide() {
  let activeImage = `/images/hero${activeIndex}.jpg`
  heroImg.setAttribute('src', activeImage)
  activeIndex++
  if (activeIndex > 2) {
    activeIndex = 0
  }
}

setInterval(changeSlide, 4000)
