"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, Trophy, Wrench } from "lucide-react"

interface Robot {
  year: number
  gameName: string
  robotName: string
  description: string
  achievements: string[]
  keyFeatures: string[]
  image: string
}

const robots: Robot[] = [
  {
    year: 2026,
    gameName: "REBUILT",
    robotName: "TBD",
    description: "TBD",
    achievements: ["TBD"],
    keyFeatures: ["TBD"],
    image: "/robots/2026.jpg",
  },
  {
    year: 2025,
    gameName: "Reefscape",
    robotName: "Justice",
    description: "Justice stands for power. Built to rise to any challenge.",
    achievements: ["TBD"],
    keyFeatures: ["TBD"],
    image: "/robots/2025.jpg",
  },
  {
    year: 2024,
    gameName: "CRESCENDO",
    robotName: "Azula",
    description:
        "Azula was built for CRESCENDO, a powerful scoring bot with elegant motion and effective endgame climbs.",
    achievements: ["Regional Finalist", "Engineering Inspiration Award"],
    keyFeatures: ["Precision shooter", "Climbing mechanism", "Autonomous navigation"],
    image: "/robots/2024.jpg",
  },
  {
    year: 2023,
    gameName: "CHARGED UP",
    robotName: "ZAP!",
    description:
        "Built for the CHARGED UP challenge, this robot excelled at manipulating cones and cubes with precision.",
    achievements: ["Regional Champions", "Innovation in Control Award"],
    keyFeatures: ["Arm"],
    image: "/robots/2023.jpg",
  },
  {
    year: 2022,
    gameName: "RAPID REACT",
    robotName: "Day Dream",
    description:
        "Our RAPID REACT robot featured a high-speed ball shooter and an efficient climbing system.",
    achievements: ["Regional Semi-Finalist"],
    keyFeatures: ["High-speed shooter", "Pneumatic climber"],
    image: "/robots/2022.jpg",
  },
  {
    year: 2021,
    gameName: "INFINITE RECHARGE pt 2",
    robotName: "Flashback",
    description:
        "Flashback tackled the unique challenges of the 2021 replay season with a sleek design and strong scoring capabilities.",
    achievements: ["Shutdown Short Season"],
    keyFeatures: ["Power cell shooter", "Climbing arms"],
    image: "/robots/2021.jpg",
  },
  {
    year: 2020,
    gameName: "INFINITE RECHARGE",
    robotName: "Biohazard",
    description:
        "Due to COVID-19, the season was cut short, but Biohazard was built with strong scoring potential for INFINITE RECHARGE.",
    achievements: ["Shutdown Short Season"],
    keyFeatures: ["Power cell shooter"],
    image: "/robots/2020.jpg",
  },
  {
    year: 2019,
    gameName: "DESTINATION: DEEP SPACE",
    robotName: "Andromeda",
    description:
        "Andromeda was designed for cargo and hatch manipulation under sandstorm conditions.",
    achievements: ["Team Spirit Award"],
    keyFeatures: ["Cargo intake", "Hatch panel claws", "Climb"], // what level climb?
    image: "/robots/2019.jpg",
  },
  {
    year: 2018,
    gameName: "POWER UP",
    robotName: "El Alacrán",
    description:
        "Built for POWER UP, El Alacrán featured power cube manipulation and scale/switch scoring.",
    achievements: ["Regional Quarterfinalist", "Safety Award"],
    keyFeatures: ["Power cube intake", "Elevator lift", "Scale scoring"],
    image: "/robots/2018.jpg",
  },
  {
    year: 2017,
    gameName: "STEAMWORKS",
    robotName: "Orange Juice",
    description:
        "Orange Juice specialized in gear delivery and low-goal fuel scoring during the STEAMWORKS season.",
    achievements: ["Team Autonomous Improvements", "Design Recognition"],
    keyFeatures: ["Gear handler", "Low-goal shooter", "Active intake"],
    image: "/robots/2017.jpg",
  },
  {
    year: 2016,
    gameName: "FIRST STRONGHOLD",
    robotName: "Knightmare",
    description:
        "Our robot for FIRST STRONGHOLD was equipped for defense crossing and tower shooting.",
    achievements: ["Award for Creative Design"],
    keyFeatures: ["Strong drivetrain", "High goal shooter", "Defense breaching"],
    image: "/robots/2016.jpg",
  },
  {
    year: 2015,
    gameName: "RECYCLE RUSH",
    robotName: "El Toro",
    description:
        "El Toro was built for RECYCLE RUSH, focusing on stacking totes and managing recycling containers.",
    achievements: ["Consistent Scoring Performance"],
    keyFeatures: ["Tote stacker", "Can grabber", "H-drive"],
    image: "/robots/2015.jpg",
  },
  {
    year: 2014,
    gameName: "AERIAL ASSIST",
    robotName: "Skyshot",
    description:
        "Competed in AERIAL ASSIST, focusing on cooperative ball passing and robust defense.",
    achievements: ["Strong Defensive Play"],
    keyFeatures: ["Large ball intake", "2-ball Auton", "Robust frame"],
    image: "/robots/2014.jpg",
  },
  {
    year: 2013,
    gameName: "ULTIMATE ASCENT",
    robotName: "Twister",
    description:
        "Designed for ULTIMATE ASCENT, Twister focused on quick disc shooting and moderate climbing ability.",
    achievements: ["High Autonomous Accuracy"],
    keyFeatures: ["Frisbee shooter", "Climbing hooks", "Autonomous routine"],
    image: "/robots/2013.jpg",
  },
  {
    year: 2012,
    gameName: "Rebound Rumble",
    robotName: "Admiral II",
    description:
        "A basketball-shooting robot created for Rebound Rumble, featuring improved drivetrain control.",
    achievements: ["Improved Scoring", "Team Growth"],
    keyFeatures: ["Ball shooter", "Improved drivebase", "Feeder system"],
    image: "/robots/2012.jpg",
  },
  {
    year: 2011,
    gameName: "LOGO MOTION",
    robotName: "Hiking Viking",
    description:
        "Our first robot, built for the LOGO MOTION challenge, featured simple tube handling capabilities.",
    achievements: ["Rookie Year", "Completed Qualification Rounds"],
    keyFeatures: ["Basic arm", "Tube gripper", "Rolling drivetrain"],
    image: "/robots/2011.jpg",
  },
];

export default function RobotsPage() {
  const [selectedRobot, setSelectedRobot] = useState<Robot | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextRobot = () => {
    setCurrentIndex((prev) => (prev + 1) % robots.length)
  }

  const prevRobot = () => {
    setCurrentIndex((prev) => (prev - 1 + robots.length) % robots.length)
  }

  const openModal = (robot: Robot) => {
    setSelectedRobot(robot)
  }

  const closeModal = () => {
    setSelectedRobot(null)
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-800">Our Robots</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Explore our journey through FIRST Robotics Competition seasons. Each robot represents months of design,
          engineering, and teamwork, built to tackle unique challenges and compete at the highest level.
        </p>
      </div>

      {/* Featured Robot Carousel */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-96 bg-gradient-to-r from-orange-100 to-blue-100">
          <img
            src={robots[currentIndex].image || "/placeholder.svg"}
            alt={`${robots[currentIndex].year} ${robots[currentIndex].gameName} Robot`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <Badge className="bg-orange-600 text-white text-lg px-4 py-2">{robots[currentIndex].year}</Badge>
              <h2 className="text-3xl font-bold">{robots[currentIndex].gameName}</h2>
              <h3 className="text-xl font-semibold">{robots[currentIndex].robotName}</h3>
              <Button
                onClick={() => openModal(robots[currentIndex])}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevRobot}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-slate-800" />
          </button>
          <button
            onClick={nextRobot}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-slate-800" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 py-4 bg-white">
          {robots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-orange-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Robots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {robots.map((robot, index) => (
          <Card
            key={robot.year}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openModal(robot)}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  {robot.year}
                </Badge>
                <div className="flex space-x-1">
                  {robot.achievements.length > 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                </div>
              </div>
              <CardTitle className="text-xl">{robot.gameName}</CardTitle>
              <CardDescription className="font-semibold text-slate-700">{robot.robotName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={robot.image || "/placeholder.svg"}
                alt={`${robot.year} ${robot.gameName} Robot`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-sm text-slate-600 line-clamp-3">{robot.description}</p>
              <div className="flex flex-wrap gap-2">
                {robot.keyFeatures.slice(0, 2).map((feature, featureIndex) => (
                  <Badge key={featureIndex} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {robot.keyFeatures.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{robot.keyFeatures.length - 2} more
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Robot Detail Modal */}
      {selectedRobot && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedRobot.image || "/placeholder.svg"}
                alt={`${selectedRobot.year} ${selectedRobot.gameName} Robot`}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className="bg-orange-600 text-white">
                      <Calendar className="h-3 w-3 mr-1" />
                      {selectedRobot.year}
                    </Badge>
                    <h2 className="text-2xl font-bold text-slate-800">{selectedRobot.gameName}</h2>
                  </div>
                  <h3 className="text-xl font-semibold text-orange-600">{selectedRobot.robotName}</h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">{selectedRobot.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-orange-600" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {selectedRobot.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                    Achievements
                  </h4>
                  <div className="space-y-2">
                    {selectedRobot.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
