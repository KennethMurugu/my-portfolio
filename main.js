let btnAboutMe = document.querySelector('.main-links-container .about-me')
let btnProjects = document.querySelector('.main-links-container .projects')
let btnContactMe = document.querySelector('.main-links-container .contact-me')
let body = document.querySelector('body')

btnAboutMe.addEventListener('mouseenter', event => {
  body.classList.add('about-me-hovered')
})

btnAboutMe.addEventListener('mouseleave', event => {
  body.classList.remove('about-me-hovered')
})

btnProjects.addEventListener('mouseenter', event => {
  body.classList.add('projects-hovered')
})

btnProjects.addEventListener('mouseleave', event => {
  body.classList.remove('projects-hovered')
})

btnContactMe.addEventListener('mouseenter', event => {
  body.classList.add('contact-me-hovered')
})

btnContactMe.addEventListener('mouseleave', event => {
  body.classList.remove('contact-me-hovered')
})
