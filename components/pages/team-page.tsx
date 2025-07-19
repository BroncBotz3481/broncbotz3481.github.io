export default function TeamPage() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Team</h1>
        <p className="text-xl text-slate-600">Meet the dedicated students and mentors who make Bronc Botz possible</p>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Student Leadership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Team Captain</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Leads overall team strategy, coordinates between subteams, and represents the team at competitions and
              community events.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Engineering Lead</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Oversees robot design and construction, manages CAD development, and ensures engineering standards are
              met.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Programming Lead</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Develops robot control software, implements autonomous routines, and maintains team development tools.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Business Lead</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Manages team finances, coordinates sponsorships, and handles team marketing and outreach efforts.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Subteams</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">⚙️ Mechanical</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Designs and builds the robot chassis, mechanisms, and all physical components using CAD software and
              machine tools.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">💻 Programming</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Develops robot control code, autonomous routines, and driver assistance features using Java and various
              APIs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">🔌 Electrical</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Handles wiring, sensors, motor controllers, and all electrical systems that power and control the robot.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">📊 Business</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Manages team operations, fundraising, sponsor relations, and community outreach programs.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
