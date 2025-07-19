export default function AboutPage() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">About Bronc Botz</h1>
        <p className="text-xl text-slate-600">Learn more about our team's history, mission, and achievements</p>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Story</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Founded in 2009, Bronc Botz has been inspiring students in San Antonio, Texas to pursue careers in Science,
          Technology, Engineering, and Mathematics (STEM). Our team participates in both FIRST Tech Challenge (FTC) and
          FIRST Robotics Competition (FRC), providing students with hands-on experience in engineering, programming, and
          project management.
        </p>

        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Mission</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          To inspire young people to be science and technology leaders by engaging them in exciting mentor-based
          programs that build science, engineering, and technology skills, that inspire innovation, and that foster
          well-rounded life capabilities including self-confidence, communication, and leadership.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">🏆 Achievements</h3>
            <p className="text-slate-600 leading-relaxed">
              Multiple regional championships, state qualifications, and numerous awards for design, innovation, and
              community outreach.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">🎓 Alumni Success</h3>
            <p className="text-slate-600 leading-relaxed">
              Our graduates have gone on to pursue engineering degrees at top universities and successful careers in
              technology.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">🤝 Community Impact</h3>
            <p className="text-slate-600 leading-relaxed">
              Over 1000 hours of community service and STEM outreach to local schools and organizations.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
