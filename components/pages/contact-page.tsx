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
import { Mail, Phone, MapPin, Clock, Send, Users, MessageSquare, Calendar } from "lucide-react"

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
      value: "broncbotz@example.com",
      description: "Send us a message anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(210) 555-0123",
      description: "Call during business hours",
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
  <div className="space-y-10">
    {/* Header Section */}
    <section className="text-center space-y-4">
      <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1">Get In Touch</Badge>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Contact BroncBotz</h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Have questions about our team, want to join us, or interested in sponsorship opportunities? We'd love to hear
        from you! Reach out using any of the methods below.
      </p>
    </section>

    {/* Contact Form and Info */}
    <section className="grid lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card className="border-orange-100">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-slate-800 flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-orange-600" />
            Send Us a Message
          </CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="inline-flex p-3 bg-green-100 rounded-full">
                <Send className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
              <p className="text-green-600 text-sm">Thank you for contacting us. We'll respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiryType" className="text-sm">
                  Inquiry Type
                </Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => handleInputChange("inquiryType", value)}
                >
                  <SelectTrigger className="border-orange-200 focus:border-orange-500">
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

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  rows={4}
                  className="border-orange-200 focus:border-orange-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Contact Info Cards */}
      <div>
        <div className="grid md:grid-cols-2 gap-4">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200 text-center">
              <CardHeader className="pb-3">
                <div className="inline-flex p-3 bg-orange-100 rounded-full mx-auto mb-2">
                  <info.icon className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-slate-800">{info.label}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 pt-0">
                <p className="font-semibold text-slate-800 text-sm">{info.value}</p>
                <p className="text-xs text-slate-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Visit Us Section */}
    <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 md:p-8">
      <div className="text-center space-y-5">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Visit Our Workshop</h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Interested in seeing what we do? Need help with your robot? Contact us to schedule a visit to our shop! We love
          showing off our robots and sharing our passion for STEM.
        </p>
      </div>
    </section>
  </div>
)
}
