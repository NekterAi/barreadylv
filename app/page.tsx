import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574')] bg-cover bg-center"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Pass Your Health Inspection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Every Time
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Professional mock health & safety inspections for Las Vegas bars. 
            Get expert feedback before the real inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Book Inspection Now
            </Link>
            <a 
              href="#how-it-works"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg text-lg transition-all border border-white/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Bar Ready LV?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-amber-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Expert Inspectors</h3>
              <p className="text-gray-300 leading-relaxed">
                Former health department inspectors who know exactly what they're looking for. 
                Get insider knowledge to ace your real inspection.
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-amber-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Same-Day Service</h3>
              <p className="text-gray-300 leading-relaxed">
                Need a mock inspection fast? We offer same-day and next-day appointments 
                to fit your schedule.
              </p>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-amber-500 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Detailed Reports</h3>
              <p className="text-gray-300 leading-relaxed">
                Receive a comprehensive written report with actionable recommendations 
                and priority fixes within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Book Online</h3>
              <p className="text-gray-300">
                Schedule your mock inspection through our simple booking system
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">We Inspect</h3>
              <p className="text-gray-300">
                Our expert inspector visits your bar and conducts a thorough review
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Get Report</h3>
              <p className="text-gray-300">
                Receive detailed findings and recommendations within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Pass With Confidence</h3>
              <p className="text-gray-300">
                Fix issues and ace your real health department inspection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Pass Your Next Inspection?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your mock inspection today and get the peace of mind you deserve.
          </p>
          <Link 
            href="/book"
            className="inline-block px-10 py-5 bg-white hover:bg-gray-100 text-orange-600 font-bold rounded-lg text-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            Book Your Inspection →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-4">Bar Ready LV - Professional Mock Health Inspections for Las Vegas Bars</p>
          <p className="text-sm">© 2026 Bar Ready LV. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
