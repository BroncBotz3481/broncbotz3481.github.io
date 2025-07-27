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

  const timeline = [
    {
      year: "2009",
      title: "Team Founded",
      description: "BroncBotz was established as a FIRST Robotics team in San Antonio, Texas.",
    },
    {
      year: "2012",
      title: "First Regional Win",
      description: "Achieved our first regional championship, marking a major milestone.",
    },
    {
      year: "2015",
      title: "Expanded Programs",
      description: "Added FTC and community outreach programs to inspire younger students.",
    },
    {
      year: "2018",
      title: "New Workshop",
      description: "Moved to our current state-of-the-art workshop facility.",
    },
    {
      year: "2020",
      title: "Virtual Innovation",
      description: "Adapted to virtual competitions and remote collaboration during the pandemic.",
    },
    {
      year: "2024",
      title: "15 Years Strong",
      description: "Celebrating 15 years of inspiring students and building amazing robots.",
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

      {/* Team History Timeline */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Journey</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            From humble beginnings to regional champions, here's how BroncBotz has grown over the years.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-200 hidden md:block"></div>

          <div className="space-y-6">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-6" : "md:pl-6"}`}>
                  <Card className="border-orange-100 hover:shadow-md transition-all duration-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-orange-600 text-white text-sm">{event.year}</Badge>
                        <CardTitle className="text-lg text-slate-800">{event.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 text-sm">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block w-3 h-3 bg-orange-600 rounded-full border-2 border-white shadow-sm z-10"></div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 md:p-8">
        <div className="text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">What Makes Us Special</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-orange-600">Student-Led</h3>
              <p className="text-slate-600 text-sm">
                Our team is entirely student-led, with members taking ownership of all aspects from design and
                programming to marketing and outreach.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-orange-600">Inclusive Community</h3>
              <p className="text-slate-600 text-sm">
                We welcome students from all backgrounds and skill levels, providing mentorship and support to help
                everyone succeed and grow.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-orange-600">Real-World Impact</h3>
              <p className="text-slate-600 text-sm">
                Beyond competitions, we actively engage with our community through STEM outreach, mentoring, and
                volunteer work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
