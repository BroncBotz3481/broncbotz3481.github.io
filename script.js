let currentSlide = 0
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"))
  slides[index].classList.add("active")
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides
  showSlide(currentSlide)
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  showSlide(currentSlide)
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000)

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    previousSlide()
  } else if (e.key === "ArrowRight") {
    nextSlide()
  }
})
