// Simple SPA Router
class Router {
  constructor() {
    this.routes = {}
    this.currentPage = "home"
    this.init()
  }

  init() {
    // Handle initial load
    this.handleRoute()

    // Handle navigation clicks
    document.addEventListener("click", (e) => {
      if (e.target.matches(".nav-link")) {
        e.preventDefault()
        const page = e.target.getAttribute("href").substring(1)
        this.navigate(page)
      }
    })

    // Handle browser back/forward
    window.addEventListener("popstate", () => {
      this.handleRoute()
    })
  }

  navigate(page) {
    this.currentPage = page
    history.pushState({ page }, "", `#${page}`)
    this.loadPage(page)
    this.updateActiveNav(page)
  }

  handleRoute() {
    const hash = window.location.hash.substring(1) || "home"
    this.currentPage = hash
    this.loadPage(hash)
    this.updateActiveNav(hash)
  }

  async loadPage(page) {
    const app = document.getElementById("app")
    const spinner = document.getElementById("loadingSpinner")

    // Show loading spinner
    spinner.style.display = "flex"

    try {
      let content = ""

      switch (page) {
        case "home":
          content = this.getHomePage()
          break
        case "about":
          content = this.getAboutPage()
          break
        case "team":
          content = this.getTeamPage()
          break
        case "robots":
          content = this.getRobotsPage()
          break
        case "sponsors":
          content = this.getSponsorsPage()
          break
        case "contact":
          content = this.getContactPage()
          break
        default:
          content = this.getHomePage()
      }

      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 500))

      app.innerHTML = content
    } catch (error) {
      console.error("Error loading page:", error)
      app.innerHTML = '<div class="error">Error loading page</div>'
    } finally {
      // Hide loading spinner
      spinner.style.display = "none"
    }
  }

  updateActiveNav(page) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${page}`) {
        link.classList.add("active")
      }
    })
  }

  getHomePage() {
    return `
            <div class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">Welcome to Bronc Botz</h1>
                    <p class="hero-subtitle">FIRST Robotics Competition Team 3481</p>
                    <p class="hero-description">
                        Inspiring the next generation of engineers, programmers, and innovators 
                        through competitive robotics at Belton High School.
                    </p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary" onclick="router.navigate('about')">Learn More</button>
                        <button class="btn btn-secondary" onclick="router.navigate('contact')">Get Involved</button>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="/placeholder.svg?height=400&width=600&text=Robot+Image" alt="Bronc Botz Robot" />
                </div>
            </div>
            
            <section class="features">
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">🤖</div>
                        <h3>Build Robots</h3>
                        <p>Design and construct competitive robots for FIRST Robotics Competition</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">💻</div>
                        <h3>Learn Programming</h3>
                        <p>Master Java, Python, and other programming languages for robot control</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🏆</div>
                        <h3>Compete</h3>
                        <p>Participate in regional and national robotics competitions</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🤝</div>
                        <h3>Teamwork</h3>
                        <p>Collaborate with peers and mentors to achieve common goals</p>
                    </div>
                </div>
            </section>
        `
  }

  getAboutPage() {
    return `
            <div class="page-header">
                <h1>About Bronc Botz</h1>
                <p>Learn about our team, mission, and the FIRST Robotics Competition</p>
            </div>
            
            <div class="content-grid">
                <section class="content-section">
                    <h2>Our Mission</h2>
                    <p>
                        Bronc Botz Team 3481 is dedicated to inspiring young minds through science, technology, 
                        engineering, and mathematics. We strive to create an inclusive environment where students 
                        can develop technical skills, leadership abilities, and lifelong friendships.
                    </p>
                </section>
                
                <section class="content-section">
                    <h2>What is FIRST?</h2>
                    <p>
                        FIRST (For Inspiration and Recognition of Science and Technology) is a global robotics 
                        community that prepares young people for the future. The FIRST Robotics Competition 
                        combines the excitement of sport with the rigors of science and technology.
                    </p>
                    <ul>
                        <li>Teams have 6 weeks to design and build a robot</li>
                        <li>Robots compete in alliance-based matches</li>
                        <li>Awards recognize both robot performance and team spirit</li>
                        <li>Students learn valuable STEM and life skills</li>
                    </ul>
                </section>
                
                <section class="content-section">
                    <h2>Team History</h2>
                    <p>
                        Founded in 2010, Bronc Botz has been representing Belton High School in the FIRST 
                        Robotics Competition for over a decade. Our team has grown from a small group of 
                        dedicated students to a competitive force in Texas robotics.
                    </p>
                </section>

                <section class="content-section social-media">
                    <h2>Follow Us!</h2>
                    <p>Stay connected with Bronc Botz on social media for the latest updates, photos, and competition results.</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/broncbotz" target="_blank" rel="noopener noreferrer" class="social-link instagram">
                            <span class="social-icon">📷</span>
                            <div class="social-info">
                                <strong>Instagram</strong>
                                <span>@broncbotz</span>
                            </div>
                        </a>
                        <a href="https://facebook.com/Bronc.Botz" target="_blank" rel="noopener noreferrer" class="social-link facebook">
                            <span class="social-icon">📘</span>
                            <div class="social-info">
                                <strong>Facebook</strong>
                                <span>facebook.com/Bronc.Botz</span>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/@BHSBroncBotz" target="_blank" rel="noopener noreferrer" class="social-link youtube">
                            <span class="social-icon">📺</span>
                            <div class="social-info">
                                <strong>YouTube</strong>
                                <span>@BHSBroncBotz</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        `
  }

  getTeamPage() {
    return `
            <div class="page-header">
                <h1>Our Team</h1>
                <p>Meet the students, mentors, and supporters who make Bronc Botz possible</p>
            </div>
            
            <div class="team-grid">
                <div class="team-section">
                    <h2>Student Leadership</h2>
                    <div class="member-grid">
                        <div class="member-card">
                            <img src="/placeholder.svg?height=150&width=150&text=Student" alt="Team Captain" />
                            <h3>Team Captain</h3>
                            <p>Senior - Engineering Lead</p>
                        </div>
                        <div class="member-card">
                            <img src="/placeholder.svg?height=150&width=150&text=Student" alt="Programming Lead" />
                            <h3>Programming Lead</h3>
                            <p>Junior - Software Development</p>
                        </div>
                        <div class="member-card">
                            <img src="/placeholder.svg?height=150&width=150&text=Student" alt="Design Lead" />
                            <h3>Design Lead</h3>
                            <p>Senior - CAD and Prototyping</p>
                        </div>
                    </div>
                </div>
                
                <div class="team-section">
                    <h2>Mentors</h2>
                    <div class="member-grid">
                        <div class="member-card">
                            <img src="/placeholder.svg?height=150&width=150&text=Mentor" alt="Head Mentor" />
                            <h3>Head Mentor</h3>
                            <p>Engineering Professional</p>
                        </div>
                        <div class="member-card">
                            <img src="/placeholder.svg?height=150&width=150&text=Mentor" alt="Programming Mentor" />
                            <h3>Programming Mentor</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  }

  getRobotsPage() {
    return `
            <div class="page-header">
                <h1>Our Robots</h1>
                <p>Explore the robots we've built for FIRST Robotics Competition</p>
            </div>
            
            <div class="robots-grid">
                <div class="robot-card">
                    <img src="/placeholder.svg?height=300&width=400&text=2024+Robot" alt="2024 Robot" />
                    <div class="robot-info">
                        <h3>2024 - CRESCENDO</h3>
                        <p>Our 2024 robot designed for the CRESCENDO game, featuring note-scoring capabilities and climbing mechanisms.</p>
                        <div class="robot-stats">
                            <span class="stat">Weight: 125 lbs</span>
                            <span class="stat">Height: 4'2"</span>
                        </div>
                    </div>
                </div>
                
                <div class="robot-card">
                    <img src="/placeholder.svg?height=300&width=400&text=2023+Robot" alt="2023 Robot" />
                    <div class="robot-info">
                        <h3>2023 - CHARGED UP</h3>
                        <p>Built for the CHARGED UP game with cone and cube manipulation and autonomous balancing.</p>
                        <div class="robot-stats">
                            <span class="stat">Weight: 120 lbs</span>
                            <span class="stat">Height: 4'0"</span>
                        </div>
                    </div>
                </div>
                
                <div class="robot-card">
                    <img src="/placeholder.svg?height=300&width=400&text=2022+Robot" alt="2022 Robot" />
                    <div class="robot-info">
                        <h3>2022 - RAPID REACT</h3>
                        <p>Designed for shooting cargo and climbing the hangar in the RAPID REACT challenge.</p>
                        <div class="robot-stats">
                            <span class="stat">Weight: 118 lbs</span>
                            <span class="stat">Height: 3'10"</span>
                        </div>
                    </div>
                </div>
            </div>
        `
  }

  getSponsorsPage() {
    return `
            <div class="page-header">
                <h1>Our Sponsors</h1>
                <p>Thank you to our amazing sponsors who make our robotics program possible</p>
            </div>
            
            <div class="sponsors-content">
                <section class="sponsor-tier">
                    <h2>Platinum Sponsors</h2>
                    <div class="sponsor-grid">
                        <div class="sponsor-card large">
                            <img src="/logos/department-of-defense.svg" alt="Department of Defense" />
                            <h3>Department of Defense</h3>
                            <p>Major funding and STEM education support</p>
                        </div>
                    </div>
                </section>
                
                <section class="sponsor-tier">
                    <h2>Gold Sponsors</h2>
                    <div class="sponsor-grid">
                        <div class="sponsor-card">
                            <img src="/logos/3m.svg" alt="3M" />
                            <h3>3M</h3>
                            <p>Materials and innovation support</p>
                        </div>
                        <div class="sponsor-card">
                            <img src="/logos/solidworks.svg" alt="SolidWorks" />
                            <h3>SolidWorks</h3>
                            <p>CAD software and design tools</p>
                        </div>
                    </div>
                </section>
                
                <section class="sponsor-tier">
                    <h2>Silver Sponsors</h2>
                    <div class="sponsor-grid">
                        <div class="sponsor-card">
                            <img src="/logos/ni.svg" alt="National Instruments" />
                            <h3>National Instruments</h3>
                            <p>Control systems and software</p>
                        </div>
                        <div class="sponsor-card">
                            <img src="/logos/ryobi-tools.svg" alt="Ryobi Tools" />
                            <h3>Ryobi Tools</h3>
                            <p>Power tools and equipment</p>
                        </div>
                    </div>
                </section>
                
                <section class="sponsor-info">
                    <h2>Become a Sponsor</h2>
                    <p>
                        Interested in supporting STEM education and our robotics team? We offer various 
                        sponsorship levels with benefits including logo placement, event invitations, 
                        and recognition at competitions.
                    </p>
                    <button class="btn btn-primary" onclick="router.navigate('contact')">Contact Us</button>
                </section>
            </div>
        `
  }

  getContactPage() {
    return `
            <div class="page-header">
                <h1>Contact Us</h1>
                <p>Get in touch with Bronc Botz Team 3481</p>
            </div>
            
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-section">
                        <h2>Team Information</h2>
                        <div class="contact-details">
                            <div class="contact-item">
                                <strong>School:</strong> Belton High School
                            </div>
                            <div class="contact-item">
                                <strong>Team Number:</strong> 3481
                            </div>
                            <div class="contact-item">
                                <strong>Location:</strong> Belton, Texas
                            </div>
                            <div class="contact-item">
                                <strong>Meeting Times:</strong> Tuesdays & Thursdays, 3:30-6:00 PM
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-section">
                        <h2>Get Involved</h2>
                        <p>
                            Interested in joining our team or learning more about FIRST Robotics? 
                            We welcome students of all skill levels and backgrounds. No prior 
                            experience necessary!
                        </p>
                        <ul>
                            <li>Students: Join us at our next meeting</li>
                            <li>Parents: Volunteer opportunities available</li>
                            <li>Mentors: Share your expertise with students</li>
                            <li>Sponsors: Support STEM education in our community</li>
                        </ul>
                    </div>
                    
                    <div class="contact-section">
                        <h2>Follow Our Journey</h2>
                        <p>Stay updated with our latest competitions, achievements, and team activities:</p>
                        <div class="social-links">
                            <a href="https://www.instagram.com/broncbotz" target="_blank" rel="noopener noreferrer" class="social-link">
                                📷 Instagram: @broncbotz
                            </a>
                            <a href="https://facebook.com/Bronc.Botz" target="_blank" rel="noopener noreferrer" class="social-link">
                                📘 Facebook: facebook.com/Bronc.Botz
                            </a>
                            <a href="https://www.youtube.com/@BHSBroncBotz" target="_blank" rel="noopener noreferrer" class="social-link">
                                📺 YouTube: @BHSBroncBotz
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
  }
}

// Mobile navigation toggle
function toggleMobileNav() {
  const navList = document.querySelector(".nav-list")
  navList.classList.toggle("active")
}

// Initialize router when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.router = new Router()
})
