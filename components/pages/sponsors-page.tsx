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
      name: "Gene Haas Foundation",
      tier: "Platinum",
      logo: "/logos/gene-haas-foundation.svg", // update with real logo path
      description: "Supporting innovation and STEM education through generous grants.",
      website: "https://www.genehaasfoundation.org/",
    },
    {
      name: "Franks Manufacturing",
      tier: "Gold",
      logo: "/logos/franks-manufacturing.svg",
      description: "Local manufacturing partner dedicated to advancing engineering programs.",
      website: "#",
    },
    {
      name: "Brandeis Bronc Botz Booster Club",
      tier: "Gold",
      logo: "/logos/bronc-botz-booster.svg",
      description: "Community booster club supporting student robotics teams.",
      website: "#",
    },
    {
      name: "Department of Defense",
      tier: "Gold",
      logo: "/logos/department-of-defense.svg",
      description: "Federal support for STEM and robotics initiatives.",
      website: "https://www.defense.gov/",
    },
    {
      name: "Texas Workforce Commission",
      tier: "Silver",
      logo: "/logos/texas-workforce-commission.svg",
      description: "Supporting workforce development through education partnerships.",
      website: "https://twc.texas.gov/",
    },
    {
      name: "3M",
      tier: "Silver",
      logo: "/logos/3m.svg",
      description: "Global innovation company supporting STEM outreach.",
      website: "https://www.3m.com/",
    },
    {
      name: "National Instruments",
      tier: "Silver",
      logo: "/logos/national-instruments.svg",
      description: "Provider of test, measurement, and control solutions.",
      website: "https://www.ni.com/",
    },
    {
      name: "FIRST-in-Texas",
      tier: "Silver",
      logo: "/logos/first-in-texas.svg",
      description: "Local FIRST Robotics programs and community.",
      website: "https://firstintexas.org/",
    },
    {
      name: "SolidWorks",
      tier: "Bronze",
      logo: "/logos/solidworks.svg",
      description: "3D design software supporting engineering education.",
      website: "https://www.solidworks.com/",
    },
    {
      name: "San Antonio Powder Coating",
      tier: "Bronze",
      logo: "/logos/san-antonio-powder-coating.svg",
      description: "Providing high-quality coating services for team projects.",
      website: "#",
    },
    {
      name: "Printingblue.com",
      tier: "Bronze",
      logo: "/logos/printingblue.svg",
      description: "Printing and design support for robotics events.",
      website: "https://printingblue.com/",
    },
    {
      name: "Dopp; Patlovany; Ghawghawe; Vijayakumar; Elizalde; Saikumar Families",
      tier: "Bronze",
      logo: "/logos/supporting-families.svg",
      description: "Generous families supporting the team.",
      website: "#",
    },
    {
      name: "Ryobi Tools",
      tier: "Bronze",
      logo: "/logos/ryobi-tools.svg",
      description: "Tool and equipment support for student engineers.",
      website: "https://www.ryobitools.com/",
    },
    {
      name: "Northside ISD & Brandeis High School",
      tier: "Bronze",
      logo: "/logos/northside-isd.svg",
      description: "Educational institutions fostering STEM growth.",
      website: "https://www.nisd.net/",
    },
  ]

  const impactStats = [
    { label: "Students Impacted", value: "200+", description: "Through our programs" },
    { label: "Community Events", value: "15", description: "Hosted annually" },
    { label: "STEM Workshops", value: "25", description: "For younger students" },
    { label: "Awards", value: "27", description: "And counting" },
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

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-slate-800 shadow-sm">
        <p className="mb-2">
          Want to support our <strong>3481 BroncBotz</strong> robotics team? We're a registered non-profit, and many companies—like <strong>USAA</strong>—will match your donation!
        </p>
        <p className="mb-2">
          You can find us on <strong>Benevity</strong>. If you have any questions, feel free to reach out.
        </p>
        <p className="font-semibold text-orange-700">We truly appreciate your support!</p>
      </div>

      <iframe
          src="https://hcb.hackclub.com/donations/start/frc-3481-broncbotz"
          name="donateFrame"
          height="512px"
          class="w-full"
          allowfullscreen>
      </iframe>

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
                <div className="h-16 flex items-center justify-center mb-2 bg-white">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <CardTitle className="text-lg text-slate-800">{sponsor.name}</CardTitle>
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
