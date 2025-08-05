"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Carousel from "@/components/carousel"
import { Award, Puzzle, ChevronRight, Users, Trophy, Wrench, Calendar, Lightbulb, Heart } from "lucide-react"

export default function HomePage() {
  const carouselImages = [
    {
      src: "/carousel/robot.jpg",
      alt: "BroncBotz robot competing in 2024 season",
      caption: "Our 2024 CRESCENDO robot in play",
    },
    {
      src: "/carousel/working.jpg",
      alt: "Team members working in the workshop",
      caption: "Students collaborating in our workshop",
    },
    {
      src: "/carousel/winning.jpg",
      alt: "Team receiving award at competition",
      caption: "Celebrating an Impact award win",
    },
    {
      src: "/carousel/building.jpg",
      alt: "Robot construction process",
      caption: "Building our 2018 competition robot",
    },
  ]

  const stats = [
    { icon: Users, label: "Active Members", value: "30+" },
    { icon: Trophy, label: "Awards Won", value: "25+" },
    { icon: Wrench, label: "Robots Built", value: "30" },
    { icon: Calendar, label: "Years Active", value: "15" },
  ]

  const highlights = [
    {
      icon: Award,
      title: "FIRST Robotics Competition (FRC)",
      description:
        "A challenging high-school level robotics competition where teams design, build, and program large robots to compete in complex games.",
    },
    {
      icon: Puzzle,
      title: "FIRST Tech Challenge (FTC)",
      description:
        "A creative and collaborative robotics challenge, focusing on designing smaller robots for strategic gameplay.",
    },
    {
      icon: Lightbulb,
      title: "STEM Education",
      description:
        "We foster STEM learning through community outreach, mentoring younger students, and hosting hands-on workshops.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-5">
        <div className="space-y-3">
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1">
            Est. 2011 • San Antonio, Texas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Welcome to <span className="text-orange-600">BroncBotz 3481</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are a student-led FIRST Robotics team dedicated to inspiring young minds through science, technology,
            engineering, and mathematics. Join us as we build the future, one robot at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            Learn About Our Team
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
          >
            View Our Robots
          </Button>
        </div>
      </section>

      {/* Image Carousel */}
      <section>
        <Carousel images={carouselImages} />
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center border-orange-100 hover:shadow-md transition-all duration-200">
            <CardContent className="pt-5 pb-4">
              <stat.icon className="h-7 w-7 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* What We Do Section */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">What We Do</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            BroncBotz is more than just a robotics team. We're a community of innovators, problem-solvers, and future
            leaders working together to make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="inline-flex p-2 bg-orange-100 rounded-lg w-fit mb-2">
                  <highlight.icon className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-slate-800">{highlight.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed text-sm">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 md:p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Mission</h2>
          <blockquote className="text-lg text-slate-700 italic max-w-3xl mx-auto leading-relaxed">
            "To inspire young people to be science and technology leaders and innovators by engaging them in exciting
            mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and
            that foster well-rounded life capabilities including self-confidence, communication, and leadership."
          </blockquote>
          <cite className="text-orange-600 font-semibold text-sm">— FIRST Robotics Mission</cite>
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

      {/* Call to Action */}
      <section className="text-center bg-white rounded-xl shadow-sm border border-orange-100 p-6 md:p-8">
        <div className="space-y-4">
          <div className="inline-flex p-3 bg-orange-100 rounded-full mb-2">
            <Heart className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Ready to Join the Team?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Whether you're interested in engineering, programming, marketing, or just want to learn something new,
            there's a place for you on BroncBotz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Get Involved
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
