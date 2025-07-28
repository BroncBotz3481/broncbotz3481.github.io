"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Wrench, Megaphone, DollarSign, Camera, Award, Mail, Users } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Name 1",
      role: "Team Captain",
      grade: "Senior",
      bio: "Leading the team for 2 years, passionate about mechanical design and team coordination.",
      image: "/placeholder-user.jpg",
      skills: ["Leadership", "Mechanical Design", "Project Management"],
    },
    {
      name: "Name 2",
      role: "Lead Programmer",
      grade: "Junior",
      bio: "Expert in Java and Python, responsible for robot autonomous programming and vision systems.",
      image: "/placeholder-user.jpg",
      skills: ["Java", "Python", "Computer Vision", "Autonomous Systems"],
    },
    {
      name: "Name 3",
      role: "Chief Engineer",
      grade: "Senior",
      bio: "Oversees all engineering aspects, specializes in CAD design and manufacturing processes.",
      image: "/placeholder-user.jpg",
      skills: ["CAD Design", "Manufacturing", "3D Printing", "Engineering Analysis"],
    },
    {
      name: "Name 4",
      role: "Outreach Coordinator",
      grade: "Junior",
      bio: "Manages community outreach programs and coordinates with local schools and organizations.",
      image: "/placeholder-user.jpg",
      skills: ["Public Speaking", "Event Planning", "Community Engagement", "Social Media"],
    },
  ]

  const subteams = [
    {
      icon: Wrench,
      name: "Mechanical",
      description: "Design and build the physical robot structure, mechanisms, and systems.",
      members: 8,
      skills: ["CAD Design", "Manufacturing", "Assembly", "Testing"],
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      icon: Code,
      name: "Programming",
      description: "Develop robot control software, autonomous routines, and driver interfaces.",
      members: 6,
      skills: ["Java", "Python", "Git", "Debugging"],
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      icon: Megaphone,
      name: "Marketing",
      description: "Handle team branding, social media, presentations, and community outreach.",
      members: 5,
      skills: ["Graphic Design", "Social Media", "Public Speaking", "Writing"],
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      icon: DollarSign,
      name: "Business",
      description: "Manage team finances, sponsorships, fundraising, and strategic planning.",
      members: 4,
      skills: ["Financial Planning", "Sponsorship", "Grant Writing", "Strategy"],
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      icon: Camera,
      name: "Media",
      description: "Document team activities, create promotional content, and manage photography.",
      members: 3,
      skills: ["Photography", "Video Editing", "Content Creation", "Documentation"],
      color: "bg-pink-100 text-pink-800 border-pink-200",
    },
    {
      icon: Award,
      name: "Competition",
      description: "Coordinate competition logistics, scouting, strategy, and drive team operations.",
      members: 6,
      skills: ["Strategy", "Scouting", "Drive Team", "Competition Prep"],
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
  ]

  const mentors = [
    {
      name: "Dr. Jennifer Martinez",
      role: "Lead Mentor",
      expertise: "Mechanical Engineering",
      experience: "8 years with BroncBotz",
      bio: "Professional engineer with expertise in robotics and automation systems.",
    },
    {
      name: "Robert Kim",
      role: "Programming Mentor",
      expertise: "Software Development",
      experience: "5 years with BroncBotz",
      bio: "Senior software engineer specializing in embedded systems and robotics programming.",
    },
    {
      name: "Lisa Thompson",
      role: "Business Mentor",
      expertise: "Project Management",
      experience: "3 years with BroncBotz",
      bio: "Project manager with experience in team leadership and strategic planning.",
    },
  ]

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1">Meet Our Team</Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">The BroncBotz Family</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Our diverse team of 32 dedicated students and mentors work together to design, build, and compete with
          world-class robots while inspiring the next generation of STEM leaders.
        </p>
      </section>

      {/* Team Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Members", value: "32" },
          { label: "Subteams", value: "6" },
          { label: "Mentors", value: "3" },
          { label: "Grade Levels", value: "4" },
        ].map((stat, index) => (
          <Card key={index} className="text-center border-orange-100">
            <CardContent className="pt-5 pb-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Leadership Team */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Leadership Team</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Our student leaders guide the team's vision, coordinate activities, and ensure everyone has the opportunity
            to learn and contribute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {leadership.map((leader, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="text-center pb-3">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-slate-200">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-slate-800">{leader.name}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="font-semibold text-orange-600 text-sm">{leader.role}</div>
                  <Badge variant="outline" className="text-xs">
                    {leader.grade}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <p className="text-xs text-slate-600 text-center">{leader.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {leader.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Subteams */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Subteams</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Each subteam specializes in different aspects of robotics, working together to create competitive robots and
            meaningful community impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subteams.map((subteam, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${subteam.color}`}>
                    <subteam.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-800">{subteam.name}</CardTitle>
                    <CardDescription className="text-sm">{subteam.members} members</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <p className="text-slate-600 text-sm">{subteam.description}</p>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {subteam.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Mentors</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Experienced professionals who guide our students, share their expertise, and help us achieve our goals both
            in competition and in life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {mentors.map((mentor, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-slate-800">{mentor.name}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="font-semibold text-orange-600 text-sm">{mentor.role}</div>
                  <div className="text-xs">{mentor.expertise}</div>
                  <Badge variant="outline" className="text-xs">
                    {mentor.experience}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 text-sm">{mentor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 md:p-8">
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-orange-100 rounded-full mb-2">
            <Users className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Want to Join Our Team?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We're always looking for passionate students who want to learn, grow, and make a difference. No prior
            experience necessary – just bring your enthusiasm!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
