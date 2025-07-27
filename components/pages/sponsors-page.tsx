"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Star, Award, Mail, Handshake, DollarSign, Users } from "lucide-react"

export default function SponsorsPage() {
  const sponsorTiers = [
    {
      tier: "Platinum",
      amount: "$5,000+",
      color: "bg-slate-100 text-slate-800 border-slate-200",
      icon: Award,
      benefits: [
        "Logo on robot and team shirts",
        "Recognition at all competitions",
        "Social media promotion",
        "Annual sponsor appreciation event",
        "Quarterly progress reports",
        "Priority partnership opportunities",
      ],
    },
    {
      tier: "Gold",
      amount: "$2,500+",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: Star,
      benefits: [
        "Logo on team shirts",
        "Recognition at competitions",
        "Social media mentions",
        "Annual sponsor event invitation",
        "Bi-annual progress reports",
      ],
    },
    {
      tier: "Silver",
      amount: "$1,000+",
      color: "bg-gray-100 text-gray-800 border-gray-200",
      icon: Heart,
      benefits: ["Name on team materials", "Competition recognition", "Social media thanks", "Annual progress report"],
    },
    {
      tier: "Bronze",
      amount: "$500+",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      icon: Handshake,
      benefits: ["Name on team website", "Social media recognition", "Thank you letter"],
    },
  ]

  const currentSponsors = [
    {
      name: "TechCorp Industries",
      tier: "Platinum",
      logo: "/placeholder.svg?height=100&width=200&text=TechCorp+Logo",
      description: "Leading technology solutions provider supporting STEM education.",
      website: "https://techcorp.example.com",
    },
    {
      name: "San Antonio Engineering",
      tier: "Gold",
      logo: "/placeholder.svg?height=100&width=200&text=SA+Engineering",
      description: "Local engineering firm passionate about developing future engineers.",
      website: "https://saengineering.example.com",
    },
    {
      name: "Robotics Supply Co.",
      tier: "Gold",
      logo: "/placeholder.svg?height=100&width=200&text=Robotics+Supply",
      description: "Specialized supplier of robotics components and materials.",
      website: "https://roboticssupply.example.com",
    },
    {
      name: "Community Bank",
      tier: "Silver",
      logo: "/placeholder.svg?height=100&width=200&text=Community+Bank",
      description: "Supporting local education and community development.",
      website: "https://communitybank.example.com",
    },
    {
      name: "Local Manufacturing",
      tier: "Silver",
      logo: "/placeholder.svg?height=100&width=200&text=Local+Mfg",
      description: "Providing manufacturing expertise and facility access.",
      website: "https://localmfg.example.com",
    },
    {
      name: "Parent Association",
      tier: "Bronze",
      logo: "/placeholder.svg?height=100&width=200&text=Parent+Assoc",
      description: "Dedicated parents supporting our robotics program.",
      website: "#",
    },
  ]

  const impactStats = [
    { label: "Students Impacted", value: "200+", description: "Through our programs" },
    { label: "Community Events", value: "15", description: "Hosted annually" },
    { label: "STEM Workshops", value: "25", description: "For younger students" },
    { label: "Competition Awards", value: "12", description: "In the last 3 years" },
  ]

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1">Our Sponsors</Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Partners in Innovation</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Our success wouldn't be possible without the generous support of our sponsors and partners. Together, we're
          building the future of STEM education and inspiring the next generation of innovators.
        </p>
      </section>

      {/* Impact Statistics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {impactStats.map((stat, index) => (
          <Card key={index} className="text-center border-orange-100 hover:shadow-md transition-all duration-200">
            <CardContent className="pt-5 pb-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-800 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-600">{stat.description}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Current Sponsors */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Amazing Sponsors</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We're grateful to work with these incredible organizations who share our vision of inspiring young minds
            through robotics and STEM education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentSponsors.map((sponsor, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="text-center pb-3">
                <div className="h-16 flex items-center justify-center mb-3 bg-white rounded-lg border">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-lg text-slate-800">{sponsor.name}</CardTitle>
                <CardDescription>
                  <Badge
                    className={
                      sponsor.tier === "Platinum"
                        ? "bg-slate-100 text-slate-800 border-slate-200"
                        : sponsor.tier === "Gold"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                          : sponsor.tier === "Silver"
                            ? "bg-gray-100 text-gray-800 border-gray-200"
                            : "bg-orange-100 text-orange-800 border-orange-200"
                    }
                  >
                    {sponsor.tier} Sponsor
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-slate-600 mb-3 text-sm">{sponsor.description}</p>
                {sponsor.website !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Visit Website
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Sponsorship Opportunities</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Join our mission to inspire the next generation of STEM leaders. Choose a sponsorship level that works for
            your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sponsorTiers.map((tier, index) => (
            <Card key={index} className="border-orange-100 hover:shadow-md transition-all duration-200">
              <CardHeader className="text-center pb-3">
                <div className={`inline-flex p-3 rounded-full ${tier.color} mb-3`}>
                  <tier.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-slate-800">{tier.tier}</CardTitle>
                <CardDescription className="text-lg font-bold text-orange-600">{tier.amount}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <ul className="space-y-1">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2 text-xs">
                      <div className="w-1 h-1 bg-orange-600 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Sponsor Us */}
      <section className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-6 md:p-8">
        <div className="text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Why Sponsor BroncBotz?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <div className="inline-flex p-2 bg-orange-100 rounded-lg">
                <Heart className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Community Impact</h3>
              <p className="text-slate-600 text-sm">
                Your support directly impacts local students and helps build a stronger STEM community in San Antonio
                and beyond.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex p-2 bg-orange-100 rounded-lg">
                <Star className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Brand Visibility</h3>
              <p className="text-slate-600 text-sm">
                Gain exposure at competitions, community events, and through our social media presence reaching
                thousands of people.
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex p-2 bg-orange-100 rounded-lg">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Future Workforce</h3>
              <p className="text-slate-600 text-sm">
                Help develop the skilled STEM professionals of tomorrow while demonstrating your commitment to education
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-white rounded-xl shadow-sm border border-orange-100 p-6 md:p-8">
        <div className="space-y-4">
          <div className="inline-flex p-3 bg-orange-100 rounded-full mb-2">
            <Users className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Ready to Partner With Us?</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Join our mission to inspire the next generation of innovators. Contact us to learn more about sponsorship
            opportunities and how we can work together.
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
              <DollarSign className="mr-2 h-4 w-4" />
              Sponsorship Packet
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
