"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart, Lightbulb, Handshake } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from robot design to community outreach.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Success comes through collaboration, communication, and supporting one another.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative thinking and innovative solutions to complex challenges.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for robotics and STEM drives us to push boundaries and inspire others.",
    },
    {
      icon: Handshake,
      title: "Gracious Professionalism",
      description: "We compete with respect, helping others while pursuing victory with honor.",
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Every challenge is an opportunity to grow, learn, and become better engineers and people.",
    },
  ]

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1">About BroncBotz</Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Our Story</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          For over 15 years, BroncBotz has been inspiring students to pursue careers in STEM through hands-on robotics
          experience, mentorship, and community engagement.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="border-orange-100 hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl text-orange-600">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              To inspire and prepare students to become the next generation of STEM leaders through competitive
              robotics, hands-on learning, and community service. We believe in fostering innovation, creativity, and
              technical excellence while building character and leadership skills.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-100 hover:shadow-md transition-all duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl text-orange-600">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              To be a leading robotics program that transforms students into confident, capable, and compassionate
              leaders who use their STEM skills to make a positive impact on their communities and the world.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Core Values */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Core Values</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            These values guide everything we do, from how we design our robots to how we interact with our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="text-center pb-3">
                <div className="inline-flex p-3 bg-orange-100 rounded-full mx-auto mb-2">
                  <value.icon className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-slate-800">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 text-center text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
