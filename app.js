// Router class for handling SPA navigation
class Router {
  constructor() {
    this.routes = new Map()
    this.currentRoute = null
    this.init()
  }

  // Register a route
  addRoute(path, component) {
    this.routes.set(path, component)
  }

  // Initialize router
  init() {
    window.addEventListener("hashchange", () => this.handleRouteChange())
    window.addEventListener("load", () => this.handleRouteChange())

    // Handle navigation clicks
    document.addEventListener("click", (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault()
        const hash = e.target.getAttribute("href")
        window.location.hash = hash
      }
    })
  }

  // Handle route changes
  async handleRouteChange() {
    const hash = window.location.hash.slice(1) || "home"

    if (this.currentRoute === hash) return

    this.showLoading()

    // Update active nav link
    this.updateActiveNavLink(hash)

    // Get component for route
    const component = this.routes.get(hash) || this.routes.get("home")

    // Simulate loading delay for smooth transition
    await new Promise((resolve) => setTimeout(resolve, 200))

    // Render component
    await this.renderComponent(component)

    this.currentRoute = hash
    this.hideLoading()
  }

  // Show loading spinner
  showLoading() {
    const spinner = document.getElementById("loadingSpinner")
    const appContent = document.getElementById("app")

    spinner.classList.add("show")
    appContent.classList.remove("loaded")
  }

  // Hide loading spinner
  hideLoading() {
    const spinner = document.getElementById("loadingSpinner")
    const appContent = document.getElementById("app")

    spinner.classList.remove("show")
    appContent.classList.add("loaded")
  }

  // Update active navigation link
  updateActiveNavLink(route) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${route}`) {
        link.classList.add("active")
      }
    })
  }

  // Render component
  async renderComponent(component) {
    const app = document.getElementById("app")
    app.innerHTML = await component()

    // Initialize any component-specific functionality
    this.initializeComponentFeatures()
  }

  // Initialize component-specific features
  initializeComponentFeatures() {
    // Initialize carousel if present
    if (document.querySelector(".carousel-container")) {
      initializeCarousel()
    }

    // Initialize contact form if present
    if (document.querySelector(".contact-form")) {
      initializeContactForm()
    }
  }
}

// Component definitions
const components = {
  home: () => `
    <section class="hero">
      <h1 class="hero-title">BRONC BOTZ</h1>
      <p class="hero-subtitle">
        A student-led robotics team competing in FIRST Tech Challenge and FIRST Robotics Competition based in San Antonio, Texas since 2009.
      </p>
      
      <div class="social-section">
        <button class="facebook-like">
          👍 Like 450
        </button>
      </div>
    </section>

    <section class="carousel-section">
      <div class="carousel-container">
        <button class="carousel-btn prev" onclick="previousSlide()">‹</button>
        <div class="carousel-content">
          <div class="slide active">
            <img src="/placeholder.svg?height=400&width=700" alt="Team working on robot">
          </div>
          <div class="slide">
            <img src="/placeholder.svg?height=400&width=700" alt="Competition arena">
          </div>
          <div class="slide">
            <img src="/placeholder.svg?height=400&width=700" alt="Team photo">
          </div>
          <div class="slide">
            <img src="/placeholder.svg?height=400&width=700" alt="Robot mechanism">
          </div>
        </div>
        <button class="carousel-btn next" onclick="nextSlide()">›</button>
      </div>
    </section>

    <section class="content-section">
      <h2 style="text-align: center; margin-bottom: 30px; color: #2c3e50;">What We Do</h2>
      <div class="content-grid">
        <div class="card">
          <h3>FIRST Tech Challenge</h3>
          <p>We compete in FTC, designing and building robots to complete challenging tasks while learning engineering principles and teamwork.</p>
        </div>
        <div class="card">
          <h3>FIRST Robotics Competition</h3>
          <p>Our team participates in FRC, the ultimate sport for the mind, combining the excitement of sport with the rigors of science and technology.</p>
        </div>
        <div class="card">
          <h3>Community Outreach</h3>
          <p>We engage with our community through demonstrations, workshops, and mentoring younger students in STEM fields.</p>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <div class="page-header">
      <h1 class="page-title">About Bronc Botz</h1>
      <p class="page-subtitle">Learn more about our team's history, mission, and achievements</p>
    </div>

    <div class="content-section">
      <h2 style="color: #2c3e50; margin-bottom: 20px;">Our Story</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; color: #666; margin-bottom: 30px;">
        Founded in 2009, Bronc Botz has been inspiring students in San Antonio, Texas to pursue careers in Science, Technology, Engineering, and Mathematics (STEM). Our team participates in both FIRST Tech Challenge (FTC) and FIRST Robotics Competition (FRC), providing students with hands-on experience in engineering, programming, and project management.
      </p>
      
      <h2 style="color: #2c3e50; margin-bottom: 20px;">Our Mission</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; color: #666; margin-bottom: 30px;">
        To inspire young people to be science and technology leaders by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.
      </p>

      <div class="content-grid">
        <div class="card">
          <h3>🏆 Achievements</h3>
          <p>Multiple regional championships, state qualifications, and numerous awards for design, innovation, and community outreach.</p>
        </div>
        <div class="card">
          <h3>🎓 Alumni Success</h3>
          <p>Our graduates have gone on to pursue engineering degrees at top universities and successful careers in technology.</p>
        </div>
        <div class="card">
          <h3>🤝 Community Impact</h3>
          <p>Over 1000 hours of community service and STEM outreach to local schools and organizations.</p>
        </div>
      </div>
    </div>
  `,

  team: () => `
    <div class="page-header">
      <h1 class="page-title">Our Team</h1>
      <p class="page-subtitle">Meet the dedicated students and mentors who make Bronc Botz possible</p>
    </div>

    <div class="content-section">
      <h2 style="color: #2c3e50; margin-bottom: 30px; text-align: center;">Student Leadership</h2>
      <div class="content-grid">
        <div class="card">
          <h3>Team Captain</h3>
          <p>Leads overall team strategy, coordinates between subteams, and represents the team at competitions and community events.</p>
        </div>
        <div class="card">
          <h3>Engineering Lead</h3>
          <p>Oversees robot design and construction, manages CAD development, and ensures engineering standards are met.</p>
        </div>
        <div class="card">
          <h3>Programming Lead</h3>
          <p>Develops robot control software, implements autonomous routines, and maintains team development tools.</p>
        </div>
        <div class="card">
          <h3>Business Lead</h3>
          <p>Manages team finances, coordinates sponsorships, and handles team marketing and outreach efforts.</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 style="color: #2c3e50; margin-bottom: 30px; text-align: center;">Subteams</h2>
      <div class="content-grid">
        <div class="card">
          <h3>⚙️ Mechanical</h3>
          <p>Designs and builds the robot chassis, mechanisms, and all physical components using CAD software and machine tools.</p>
        </div>
        <div class="card">
          <h3>💻 Programming</h3>
          <p>Develops robot control code, autonomous routines, and driver assistance features using Java and various APIs.</p>
        </div>
        <div class="card">
          <h3>🔌 Electrical</h3>
          <p>Handles wiring, sensors, motor controllers, and all electrical systems that power and control the robot.</p>
        </div>
        <div class="card">
          <h3>📊 Business</h3>
          <p>Manages team operations, fundraising, sponsor relations, and community outreach programs.</p>
        </div>
      </div>
    </div>
  `,

  sponsors: () => `
    <div class="page-header">
      <h1 class="page-title">Thank You to our Sponsors!</h1>
      <p class="page-subtitle">Our success wouldn't be possible without the generous support of our sponsors</p>
    </div>

    <div class="content-section">
      <p style="text-align: center; font-size: 1.1rem; color: #666; margin-bottom: 40px;">
        We are grateful for the continued support from our sponsors who help make our robotics program possible. 
        Their contributions allow us to purchase materials, attend competitions, and provide students with invaluable STEM experiences.
      </p>
      
      <div class="sponsors-grid">
        <img src="/placeholder.svg?height=80&width=150" alt="NewTek" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="CNISO" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="FIRST" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="TWC" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="Lonestar" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="SolidWorks" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="DW9J" class="sponsor-logo">
        <img src="/placeholder.svg?height=80&width=150" alt="WAAAT" class="sponsor-logo">
      </div>
    </div>

    <div class="content-section">
      <h2 style="color: #2c3e50; margin-bottom: 30px; text-align: center;">Sponsorship Opportunities</h2>
      <div class="content-grid">
        <div class="card">
          <h3>💎 Diamond Sponsor</h3>
          <p>$5,000+ - Logo on robot, team shirts, and website. Recognition at all events and competitions.</p>
        </div>
        <div class="card">
          <h3>🥇 Gold Sponsor</h3>
          <p>$2,500+ - Logo on team materials and website. Recognition at competitions and community events.</p>
        </div>
        <div class="card">
          <h3>🥈 Silver Sponsor</h3>
          <p>$1,000+ - Logo on website and team materials. Recognition in team communications.</p>
        </div>
        <div class="card">
          <h3>🥉 Bronze Sponsor</h3>
          <p>$500+ - Logo on website and recognition in team newsletter and social media.</p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 40px;">
        <a href="#contact" class="btn">Become a Sponsor</a>
      </div>
    </div>
  `,

  contact: () => `
    <div class="page-header">
      <h1 class="page-title">Contact Us</h1>
      <p class="page-subtitle">Get in touch with Bronc Botz for questions, sponsorship opportunities, or to learn more</p>
    </div>

    <div class="content-section">
      <div class="content-grid">
        <div>
          <h3 style="color: #2c3e50; margin-bottom: 20px;">Get In Touch</h3>
          <p style="margin-bottom: 20px; color: #666;">
            Whether you're interested in joining our team, becoming a sponsor, or just want to learn more about what we do, we'd love to hear from you!
          </p>
          
          <div style="margin-bottom: 15px;">
            <strong>📧 Email:</strong> info@broncbotz.org
          </div>
          <div style="margin-bottom: 15px;">
            <strong>📱 Phone:</strong> (210) 555-0123
          </div>
          <div style="margin-bottom: 15px;">
            <strong>📍 Location:</strong> San Antonio, Texas
          </div>
          <div style="margin-bottom: 15px;">
            <strong>🕒 Meeting Times:</strong> Tuesdays & Thursdays, 3:30-6:00 PM
          </div>
        </div>
        
        <div>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Name *</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject">
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" required placeholder="Tell us how we can help you..."></textarea>
            </div>
            
            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 style="color: #2c3e50; margin-bottom: 30px; text-align: center;">Join Our Team</h2>
      <p style="text-align: center; font-size: 1.1rem; color: #666; margin-bottom: 30px;">
        Interested in joining Bronc Botz? We welcome students of all skill levels who are passionate about STEM and robotics.
      </p>
      
      <div class="content-grid">
        <div class="card">
          <h3>🎓 Students</h3>
          <p>High school students interested in engineering, programming, business, or marketing are welcome to join our team.</p>
        </div>
        <div class="card">
          <h3>👨‍🏫 Mentors</h3>
          <p>Adult volunteers with technical expertise or professional experience help guide our students and share their knowledge.</p>
        </div>
        <div class="card">
          <h3>🤝 Volunteers</h3>
          <p>Community members who want to support STEM education can help with events, fundraising, and outreach activities.</p>
        </div>
      </div>
    </div>
  `,
}

// Carousel functionality
let currentSlide = 0
let slides = []
let slideInterval

function initializeCarousel() {
  slides = document.querySelectorAll(".slide")
  if (slides.length === 0) return

  // Clear any existing interval
  if (slideInterval) {
    clearInterval(slideInterval)
  }

  // Auto-advance slides every 5 seconds
  slideInterval = setInterval(nextSlide, 5000)

  // Add keyboard navigation
  document.addEventListener("keydown", handleKeyboardNavigation)
}

function showSlide(index) {
  if (slides.length === 0) return

  slides.forEach((slide) => slide.classList.remove("active"))
  slides[index].classList.add("active")
}

function nextSlide() {
  if (slides.length === 0) return

  currentSlide = (currentSlide + 1) % slides.length
  showSlide(currentSlide)
}

function previousSlide() {
  if (slides.length === 0) return

  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  showSlide(currentSlide)
}

function handleKeyboardNavigation(e) {
  if (e.key === "ArrowLeft") {
    previousSlide()
  } else if (e.key === "ArrowRight") {
    nextSlide()
  }
}

// Contact form functionality
function initializeContactForm() {
  const form = document.getElementById("contactForm")
  if (!form) return

  form.addEventListener("submit", handleContactSubmit)
}

function handleContactSubmit(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  // Simulate form submission
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! We'll get back to you soon.")
    e.target.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1500)
}

// Mobile navigation toggle
function toggleMobileNav() {
  const navList = document.querySelector(".nav-list")
  navList.classList.toggle("active")
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  const router = new Router()

  // Register routes
  Object.entries(components).forEach(([path, component]) => {
    router.addRoute(path, component)
  })

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    const navList = document.querySelector(".nav-list")
    const navToggle = document.querySelector(".nav-toggle")

    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove("active")
    }
  })
})

// Make functions globally available for onclick handlers
window.nextSlide = nextSlide
window.previousSlide = previousSlide
window.toggleMobileNav = toggleMobileNav
