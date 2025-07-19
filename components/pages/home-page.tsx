import Carousel from "@/components/carousel"

export default function HomePage() {
  return (
    <>
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold text-slate-800 mb-6 tracking-wide">BRONC BOTZ</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          A student-led robotics team competing in FIRST Tech Challenge and FIRST Robotics Competition based in San
          Antonio, Texas since 2009.
        </p>

        <div className="mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg">
            👍 Like 450
          </button>
        </div>
      </section>

      <section className="mb-16">
        <Carousel />
      </section>

      <section className="bg-white rounded-xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">FIRST Tech Challenge</h3>
            <p className="text-slate-600 leading-relaxed">
              We compete in FTC, designing and building robots to complete challenging tasks while learning engineering
              principles and teamwork.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">FIRST Robotics Competition</h3>
            <p className="text-slate-600 leading-relaxed">
              Our team participates in FRC, the ultimate sport for the mind, combining the excitement of sport with the
              rigors of science and technology.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Community Outreach</h3>
            <p className="text-slate-600 leading-relaxed">
              We engage with our community through demonstrations, workshops, and mentoring younger students in STEM
              fields.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
