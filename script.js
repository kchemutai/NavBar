const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelector('.nav-link')

hamburger.addEventListener('click', mobileMenuDisplay)

function mobileMenuDisplay(){
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}

navLink.forEach(n=>n.addEventListener('click', closeMenu))

function closeMenu(){
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}