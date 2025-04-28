export function initializeCarousel() {
    const navbar = document.querySelector('.navbar')
    const hamburger = document.querySelector('.hamburger')
    const slides = document.querySelectorAll('.slide')
    let currentSlide = 0
    let carouselInterval
  
    // Mobile Menu Toggle
    if (hamburger) {
      hamburger.addEventListener('click', function(e) {
        e.stopPropagation()
        navbar.classList.toggle('active')
        
        if (navbar.classList.contains('active')) {
          clearInterval(carouselInterval)
        } else {
          startCarousel()
        }
      })
  
      document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
          navbar.classList.remove('active')
        }
      })
    }
  
    // Carousel Functionality
    function showSlide(index) {
      slides.forEach(slide => {
        slide.classList.remove('active')
      })
      slides[index].classList.add('active')
    }
  
    function rotateCarousel() {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    }
  
    function startCarousel() {
      if (slides.length > 1) {
        clearInterval(carouselInterval)
        carouselInterval = setInterval(rotateCarousel, 5000)
      }
    }
  
    // Initialize
    if (slides.length > 0) {
      slides[0].classList.add('active')
      if (slides.length > 1) {
        setTimeout(() => {
          startCarousel()
        }, 3000)
      }
    }
  
    // Cleanup on tab change
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        clearInterval(carouselInterval)
      } else {
        startCarousel()
      }
    })
  
    return () => {
      clearInterval(carouselInterval)
    }
  }