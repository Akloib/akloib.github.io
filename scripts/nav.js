// Variables

const primaryNav = document.querySelector('.link-container')
const navToggle = document.querySelector('.mobile-nav-toggle')

console.log('helllooo');

// Menu mobileview

navToggle.addEventListener('click',
    () => {
      const visibility = primaryNav.getAttribute('data-visible');
      
      if(visibility==="false"){
          primaryNav.setAttribute('data-visible', true)
          navToggle.setAttribute('aria-expanded', true)
      } else {
          primaryNav.setAttribute('data-visible', false)
          navToggle.setAttribute('aria-expanded', false)
      }
    }
)
