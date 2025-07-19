"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600">
          Get in touch with Bronc Botz for questions, sponsorship opportunities, or to learn more
        </p>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get In Touch</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether you're interested in joining our team, becoming a sponsor, or just want to learn more about what
              we do, we'd love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <span>
                  <strong>Email:</strong> info@broncbotz.org
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                <span>
                  <strong>Phone:</strong> (210) 555-0123
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span>
                  <strong>Location:</strong> San Antonio, Texas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🕒</span>
                <span>
                  <strong>Meeting Times:</strong> Tuesdays & Thursdays, 3:30-6:00 PM
                </span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-800 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-800 focus:outline-none transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-800 hover:bg-slate-700 disabled:bg-slate-400 text-white py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Join Our Team</h2>
        <p className="text-center text-lg text-slate-600 mb-8 leading-relaxed">
          Interested in joining Bronc Botz? We welcome students of all skill levels who are passionate about STEM and
          robotics.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">🎓 Students</h3>
            <p className="text-slate-600 leading-relaxed">
              High school students interested in engineering, programming, business, or marketing are welcome to join
              our team.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">👨‍🏫 Mentors</h3>
            <p className="text-slate-600 leading-relaxed">
              Adult volunteers with technical expertise or professional experience help guide our students and share
              their knowledge.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">🤝 Volunteers</h3>
            <p className="text-slate-600 leading-relaxed">
              Community members who want to support STEM education can help with events, fundraising, and outreach
              activities.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
