/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLogoImg = document.querySelector('.nav_logo img') // Logo img

if (navToggle) {
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
    navLogoImg.classList.add('active') // ubah filter logo
  })
}
if (navClose) {
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
    navLogoImg.classList.remove('active') // kembalikan filter logo
  })
}

/* Remove Menu saat klik link */
const navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
   navMenu.classList.remove('show-menu')
   navLogoImg.classList.remove('active') // reset filter logo
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Add shadow to header saat scroll */
const scrollHeader = () =>{
  const header = document.querySelector('.header') // Perbaikan: pakai querySelector
  if (window.scrollY >= 50){
    header.classList.add('shadow-header')
  } else {
    header.classList.remove('shadow-header')
  }
}
