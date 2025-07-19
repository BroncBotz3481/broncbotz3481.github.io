export default function SponsorsPage() {
  const sponsors = ["NewTek", "CNISO", "FIRST", "TWC", "Lonestar", "SolidWorks", "DW9J", "WAAAT"]

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Thank You to our Sponsors!</h1>
        <p className="text-xl text-slate-600">
          Our success wouldn't be possible without the generous support of our sponsors
        </p>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg mb-8">
        <p className="text-center text-lg text-slate-600 mb-10 leading-relaxed">
          We are grateful for the continued support from our sponsors who help make our robotics program possible. Their
          contributions allow us to purchase materials, attend competitions, and provide students with invaluable STEM
          experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={`/placeholder.svg?height=80&width=150&text=${sponsor}`}
              alt={sponsor}
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-all hover:scale-105 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Sponsorship Opportunities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">💎 Diamond Sponsor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              $5,000+ - Logo on robot, team shirts, and website. Recognition at all events and competitions.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">🥇 Gold Sponsor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              $2,500+ - Logo on team materials and website. Recognition at competitions and community events.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">🥈 Silver Sponsor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              $1,000+ - Logo on website and team materials. Recognition in team communications.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">🥉 Bronze Sponsor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              $500+ - Logo on website and recognition in team newsletter and social media.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg">
            Become a Sponsor
          </button>
        </div>
      </div>
    </>
  )
}
