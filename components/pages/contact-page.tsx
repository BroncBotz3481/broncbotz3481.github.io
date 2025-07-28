"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@broncbotz.org",
      description: "Send us a message anytime",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Antonio, Texas",
      description: "Visit our workshop",
    },
    {
      icon: Clock,
      label: "Meeting Times",
      value: "Mon-Thu 3:30-6:00 PM",
      description: "Regular team meetings",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Information" },
    { value: "joining", label: "Joining the Team" },
    { value: "sponsorship", label: "Sponsorship Opportunities" },
    { value: "outreach", label: "Community Outreach" },
    { value: "media", label: "Media Inquiry" },
    { value: "technical", label: "Technical Questions" },
  ]

  return (
      <div className="space-y-12 px-4 md:px-8 max-w-5xl mx-auto">
        {/* Header Section */}
        <section className="text-center space-y-3">
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 inline-flex items-center gap-1 font-medium tracking-wide">
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Contact BroncBotz
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our team, want to join us, or interested in
            sponsorship opportunities? We'd love to hear from you! Reach out
            using any of the methods below.
          </p>
        </section>

        {/* Contact Form and Info */}
        <section className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-orange-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-5 border-b border-orange-100">
              <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                <MessageSquare className="text-orange-600 w-5 h-5" />
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-sm text-slate-600 mt-1">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                  <div
                      className="flex flex-col items-center justify-center space-y-4 py-10"
                      role="alert"
                  >
                    <div className="p-4 bg-green-100 rounded-full animate-pulse">
                      <Send className="text-green-600 w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-900">
                      Message Sent!
                    </h3>
                    <p className="text-green-700 text-sm max-w-xs text-center">
                      Thank you for contacting us. We'll respond within 24 hours.
                    </p>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-1 relative">
                        <Label
                            htmlFor="name"
                            className="text-sm font-semibold text-slate-700"
                        >
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            placeholder="Your full name"
                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-300"
                            autoComplete="name"
                        />
                      </div>
                      <div className="space-y-1 relative">
                        <Label
                            htmlFor="email"
                            className="text-sm font-semibold text-slate-700"
                        >
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                handleInputChange("email", e.target.value)
                            }
                            required
                            placeholder="you@example.com"
                            className="border-orange-300 focus:border-orange-500 focus:ring-orange-300"
                            autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 relative">
                      <Label
                          htmlFor="inquiryType"
                          className="text-sm font-semibold text-slate-700"
                      >
                        Inquiry Type
                      </Label>
                      <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                              handleInputChange("inquiryType", value)
                          }
                      >
                        <SelectTrigger className="border-orange-300 focus:border-orange-500 focus:ring-orange-300">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1 relative">
                      <Label
                          htmlFor="subject"
                          className="text-sm font-semibold text-slate-700"
                      >
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                              handleInputChange("subject", e.target.value)
                          }
                          required
                          placeholder="Subject of your message"
                          className="border-orange-300 focus:border-orange-500 focus:ring-orange-300"
                      />
                    </div>

                    <div className="space-y-1 relative">
                      <Label
                          htmlFor="message"
                          className="text-sm font-semibold text-slate-700"
                      >
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                              handleInputChange("message", e.target.value)
                          }
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="border-orange-300 focus:border-orange-500 focus:ring-orange-300 resize-none"
                      />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-600 hover:bg-orange-700 focus-visible:ring-4 focus-visible:ring-orange-400 text-white font-semibold flex justify-center items-center gap-2"
                        aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-4 border-t-white border-b-white" />
                            Sending...
                          </>
                      ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                      )}
                    </Button>
                  </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info Panel */}
          <Card className="border-orange-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4 border-b border-orange-100">
              <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                <Mail className="text-orange-600 w-5 h-5" />
                Contact Information
              </CardTitle>
              <CardDescription className="text-sm text-slate-600 mt-1">
                Reach us anytime via email, visit our workshop, or check our meeting schedule.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-y-6 py-4">
              {contactInfo.map((info, index) => (
                  <div
                      key={index}
                      className="flex items-start gap-4"
                      role="group"
                      aria-labelledby={`contact-info-label-${index}`}
                  >
                    <div className="flex-shrink-0 p-3 bg-orange-100 rounded-full shadow-sm">
                      <info.icon className="h-7 w-7 text-orange-600" aria-hidden="true" />
                    </div>

                    <div className="space-y-0.5">
                      <h3
                          id={`contact-info-label-${index}`}
                          className="text-base font-semibold text-slate-800"
                      >
                        {info.label}
                      </h3>
                      <p className="text-sm text-slate-900">{info.value}</p>
                      <p className="text-xs text-slate-600">{info.description}</p>
                    </div>
                  </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Visit Us Section */}
        <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Visit Our Workshop</h2>
          <p className="text-slate-700 max-w-xl mx-auto text-base leading-relaxed">
            Interested in seeing what we do? Need help with your robot? Contact us
            to schedule a visit to our shop! We love showing off our robots and
            sharing our passion for STEM.
          </p>
        </section>
      </div>
  )
}
