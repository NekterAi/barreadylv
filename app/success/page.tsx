import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-5xl font-bold text-white mb-6">
          Booking Confirmed!
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Thank you for choosing Bar Ready LV. Your mock inspection has been successfully booked.
        </p>

        {/* Next Steps */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8 text-left">
          <h2 className="text-2xl font-bold text-white mb-6">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Confirmation Email</h3>
                <p className="text-gray-300">
                  You'll receive a confirmation email with your booking details within 5 minutes
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Schedule Confirmation</h3>
                <p className="text-gray-300">
                  Our team will contact you within 24 hours to confirm your inspection date and time
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Inspection Day</h3>
                <p className="text-gray-300">
                  Our expert inspector will arrive on time for your scheduled appointment
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Detailed Report</h3>
                <p className="text-gray-300">
                  Receive your comprehensive inspection report within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/30 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-white mb-2">Questions?</h3>
          <p className="text-gray-300">
            Contact us at <a href="mailto:info@barreadylv.com" className="text-amber-400 hover:text-amber-300">info@barreadylv.com</a>
            {' '}or call <a href="tel:+17025550123" className="text-amber-400 hover:text-amber-300">(702) 555-0123</a>
          </p>
        </div>

        {/* Back to Home */}
        <Link 
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
