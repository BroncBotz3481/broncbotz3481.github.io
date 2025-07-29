"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Trophy, Heart, Instagram, Facebook, Youtube } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About Bronc Botz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are FIRST Robotics Competition Team 3481, representing Belton High School in Belton, Texas. Our mission
            is to inspire young minds through science, technology, engineering, and mathematics.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600">
                <Target className="h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To inspire and educate students in STEM fields through hands-on robotics experience, fostering
                innovation, teamwork, and leadership skills that will serve them throughout their lives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Trophy className="h-6 w-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To be a leading FIRST Robotics team that demonstrates excellence in engineering, promotes STEM education
                in our community, and develops the next generation of innovators and leaders.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Values */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-center">
              <Heart className="h-6 w-6 text-red-500" />
              Our Core Values
            </CardTitle>
            <CardDescription className="text-center">The principles that guide everything we do</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <Badge variant="outline" className="mb-2 border-orange-300 text-orange-700">
                  Innovation
                </Badge>
                <p className="text-sm text-gray-600">
                  Pushing boundaries and thinking creatively to solve complex challenges
                </p>
              </div>
              <div className="text-center p-4">
                <Badge variant="outline" className="mb-2 border-blue-300 text-blue-700">
                  Teamwork
                </Badge>
                <p className="text-sm text-gray-600">
                  Collaborating effectively to achieve common goals and support each other
                </p>
              </div>
              <div className="text-center p-4">
                <Badge variant="outline" className="mb-2 border-green-300 text-green-700">
                  Excellence
                </Badge>
                <p className="text-sm text-gray-600">
                  Striving for the highest quality in everything we design and build
                </p>
              </div>
              <div className="text-center p-4">
                <Badge variant="outline" className="mb-2 border-purple-300 text-purple-700">
                  Community
                </Badge>
                <p className="text-sm text-gray-600">Giving back and inspiring others to pursue STEM education</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What is FIRST? */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-orange-600" />
              What is FIRST Robotics?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              <strong>FIRST</strong> (For Inspiration and Recognition of Science and Technology) is a global robotics
              community that prepares young people for the future through team-based robotics programs.
            </p>
            <p className="text-gray-700">
              The FIRST Robotics Competition (FRC) is an international high school robotics competition where teams
              design, build, and program robots to compete in an alliance format against other teams.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Competition Season Timeline:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • <strong>January:</strong> Game reveal and robot design phase
                </li>
                <li>
                  • <strong>February-March:</strong> Build season (6 weeks to build robot)
                </li>
                <li>
                  • <strong>March-April:</strong> Regional competitions
                </li>
                <li>
                  • <strong>April:</strong> FIRST Championship in Houston, Texas
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Team History */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle>Team History</CardTitle>
            <CardDescription>Our journey since 2010</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                Bronc Botz Team 3481 was founded in 2010 at Belton High School. Over the years, we have grown from a
                small group of dedicated students into a competitive robotics team that consistently performs well at
                regional competitions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">14+</div>
                  <div className="text-sm text-gray-600">Years of Competition</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Students Mentored</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">Multiple</div>
                  <div className="text-sm text-gray-600">Regional Awards</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Follow Us Section */}
        <Card className="shadow-lg bg-gradient-to-r from-orange-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Follow Us!</CardTitle>
            <CardDescription className="text-center text-orange-100">
              Stay connected with Bronc Botz on social media
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="https://www.instagram.com/broncbotz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Instagram className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-sm opacity-90">@broncbotz</div>
                </div>
              </a>

              <a
                href="https://facebook.com/Bronc.Botz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Facebook className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Facebook</div>
                  <div className="text-sm opacity-90">facebook.com/Bronc.Botz</div>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@BHSBroncBotz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Youtube className="h-6 w-6" />
                <div>
                  <div className="font-semibold">YouTube</div>
                  <div className="text-sm opacity-90">@BHSBroncBotz</div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
