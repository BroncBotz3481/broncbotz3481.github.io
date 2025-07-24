import type React from "react"

const ContactPage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <section>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Please use the form below to send us a message.</p>

          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ContactPage
