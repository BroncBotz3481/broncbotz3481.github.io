"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Facebook, Youtube, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About BroncBotz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are FRC Team 3481, the BroncBotz from Brandeis High School in San Antonio, Texas. Our mission is to
            inspire young people to be science and technology leaders through engaging them in exciting mentor-based
            programs that build science, engineering, and technology skills.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To inspire young people to be science and technology leaders and innovators by engaging them in exciting
                mentor-based programs that build science, engineering, technology skills, as well as self-confidence,
                communication, and leadership.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To transform our culture by creating a world where science and technology are celebrated and where young
                people dream of becoming science and technology leaders.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">G</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Gracious Professionalism</h3>
                <p className="text-gray-600">
                  Competing with respect, kindness, and integrity while maintaining fierce competition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">C</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Coopertition</h3>
                <p className="text-gray-600">
                  Displaying unqualified kindness and respect in the face of fierce competition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">I</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Pursuing creative and unique solutions to complex engineering challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Team Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">7+</div>
              <div className="text-gray-600">Years Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">FIRST Robotics Competition (FRC)</h3>
                <p className="text-gray-700 mb-4">
                  Team 3481 BroncBotz proudly competes in the annual FIRST Robotics Competition, where we design, build, and
                  program industrial-scale robots to take on new, complex challenges each season. From mechanical design to
                  advanced strategy, FRC pushes the boundaries of our technical and collaborative skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Robot Design</Badge>
                  <Badge variant="secondary">Programming</Badge>
                  <Badge variant="secondary">Game Strategy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">FIRST Tech Challenge (FTC)</h3>
                <p className="text-gray-700 mb-4">
                  BroncBotz includes FTC teams 4008, 6976, and 4602—each designing, building, and coding mid-sized robots to
                  compete in the dynamic FIRST Tech Challenge. FTC offers a fast-paced, hands-on environment where we explore
                  innovation, teamwork, and strategic thinking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Engineering Design</Badge>
                  <Badge variant="secondary">Java Programming</Badge>
                  <Badge variant="secondary">Collaboration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Community Outreach</h3>
                <p className="text-gray-700 mb-4">
                  Beyond the competition field, BroncBotz is committed to inspiring the next generation of innovators. We lead
                  STEM outreach through hands-on workshops, robot demonstrations, and mentoring local youth in robotics and
                  engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">STEM Education</Badge>
                  <Badge variant="secondary">Mentorship</Badge>
                  <Badge variant="secondary">Community Engagement</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-orange-100 to-blue-100 border-2 border-orange-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Follow Us!
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Stay connected with BroncBotz and follow our journey through the robotics season!
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Instagram */}
                <a
                  href="https://instagram.com/broncbotz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-pink-200 hover:border-pink-400 group"
                >
                  <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700" />
                  <span className="font-semibold text-gray-800 group-hover:text-pink-700">@broncbotz</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-pink-700" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/Bronc.Botz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-blue-200 hover:border-blue-400 group"
                >
                  <Facebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700">Bronc.Botz</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-700" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@BHSBroncBotz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-red-200 hover:border-red-400 group"
                >
                  <Youtube className="w-6 h-6 text-red-600 group-hover:text-red-700" />
                  <span className="font-semibold text-gray-800 group-hover:text-red-700">@BHSBroncBotz</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-red-700" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-orange-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Join Our Team!</h2>
              <p className="text-xl mb-6 opacity-90">
                Interested in robotics, engineering, or making a difference? We'd love to have you join the BroncBotz
                family!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
