"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Lightbulb, Heart, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-800">About BroncBotz</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We are a student-led robotics team competing in FIRST Tech Challenge and FIRST Robotics Competition, inspiring
          innovation and building tomorrow's leaders through hands-on STEM education.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600">
              <Lightbulb className="h-5 w-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              To inspire young people to be science and technology leaders by engaging them in exciting mentor-based
              programs that build science, engineering, and technology skills, that inspire innovation, and that foster
              well-rounded life capabilities including self-confidence, communication, and leadership.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Trophy className="h-5 w-5" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              To transform our culture by creating a world where science and technology are celebrated and where young
              people dream of becoming science and technology leaders.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* What We Do Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Users className="h-5 w-5" />
            What We Do
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            BroncBotz participates in FIRST (For Inspiration and Recognition of Science and Technology) competitions,
            where we design, build, and program robots to compete in challenging games alongside teams from around the
            world.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">15+</div>
              <div className="text-sm text-slate-600">Years Active</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-slate-600">Competitions</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">100+</div>
              <div className="text-sm text-slate-600">Students Mentored</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-sm text-slate-600">Awards Won</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FIRST Programs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-slate-800">FIRST Programs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  FTC
                </Badge>
                <h3 className="font-semibold text-slate-800">FIRST Tech Challenge</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Teams design, build, and program robots to compete in an alliance format against other teams. Robots are
                built from a reusable platform, powered by Android technology, and can be coded using a variety of
                levels of Java-based programming.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  FRC
                </Badge>
                <h3 className="font-semibold text-slate-800">FIRST Robotics Competition</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Teams have six weeks to build and program industrial-size robots to play a difficult field game in
                alliance with other teams. It's as close to real-world engineering as a student can get.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Values */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Heart className="h-5 w-5" />
            FIRST Core Values
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Discovery", desc: "We explore new skills and ideas." },
              { title: "Innovation", desc: "We use creativity and persistence to solve problems." },
              { title: "Impact", desc: "We apply what we learn to improve our world." },
              { title: "Inclusion", desc: "We respect each other and embrace our differences." },
              { title: "Teamwork", desc: "We are stronger when we work together." },
              { title: "Fun", desc: "We enjoy and celebrate what we do!" },
            ].map((value, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">{value.title}</h4>
                <p className="text-sm text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Follow Us Section */}
      <Card className="bg-gradient-to-r from-orange-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-center text-slate-800">Follow Us!</CardTitle>
          <p className="text-center text-slate-600">Stay connected with BroncBotz on social media</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://instagram.com/broncbotz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-slate-200 group"
            >
              <Instagram className="h-5 w-5 text-pink-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800 group-hover:text-pink-600 transition-colors">
                  Instagram
                </div>
                <div className="text-sm text-slate-600">@broncbotz</div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-pink-600 transition-colors" />
            </a>

            <a
              href="https://facebook.com/Bronc.Botz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-slate-200 group"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Facebook</div>
                <div className="text-sm text-slate-600">facebook.com/Bronc.Botz</div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            <a
              href="https://youtube.com/@BHSBroncBotz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-slate-200 group"
            >
              <Youtube className="h-5 w-5 text-red-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800 group-hover:text-red-600 transition-colors">YouTube</div>
                <div className="text-sm text-slate-600">@BHSBroncBotz</div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-red-600 transition-colors" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
