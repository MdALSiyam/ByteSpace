export default function AuthSection({ mode = 'signup', onModeChange }) {
  const isSignIn = mode === 'signin';

  const handleModeChange = (nextMode) => {
    if (onModeChange) {
      onModeChange(nextMode === 'signin' ? 'login' : 'signup');
    }
  };

  return (
    <div className="w-full bg-[#0044ff] relative py-12 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[calc(100vh-140px)] flex items-center justify-center font-sans">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Container - 2 Column Layout */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* LEFT COLUMN: Header Text, Description & Cards / Floating Elements */}
        <div className="lg:col-span-6 text-white space-y-6">

          {/* Dynamic Heading & Description based on Sign In or Sign Up */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              {isSignIn ? 'Sign in with ease' : 'Sign up and come in'}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
              {isSignIn
                ? 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'
                : 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.'}
            </p>
          </div>

          {/* Graphical Representation (Matching Figma Cards) */}
          <div className="relative pt-6 pb-8 hidden sm:block">

            {/* Top Green Ring / Torus */}
            <div className="absolute -top-2 left-10 w-12 h-12 border-[7px] border-[#ccff00] rounded-full z-30 shadow-md rotate-[-12deg]"></div>

            {/* Main Course Card */}
            <div className="relative z-20 bg-white text-gray-900 rounded-2xl p-4 shadow-2xl max-w-sm border border-white/20">
              <div className="bg-gray-900 rounded-xl p-3 text-white mb-3 relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] text-gray-400 mb-2">
                  <span className="bg-white/10 px-2 py-0.5 rounded-full">17 Lessons</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded-full">2 hours 15 mins</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded-full">89 Comments</span>
                </div>
                {/* Mock Chart Area */}
                <div className="h-20 w-full flex items-end gap-1 pt-2">
                  <div className="w-1/6 bg-cyan-500/30 h-[40%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/60 h-[70%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-400 h-[100%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/50 h-[60%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/80 h-[85%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/20 h-[30%] rounded-t"></div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm text-gray-900">the Power of Big Data</h4>
                  <p className="text-[11px] text-gray-400">by purepearl studio</p>
                </div>
                <div className="flex items-center text-xs font-semibold text-gray-700">
                  4.5 <span className="text-yellow-400 ml-1">★</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="bg-gray-100 text-[10px] text-gray-600 font-medium px-2 py-0.5 rounded">
                  📊 Beginner
                </span>
                <span className="text-blue-600 font-bold text-sm">
                  $25 <span className="text-[10px] text-gray-400 font-normal">/lifetime</span>
                </span>
              </div>
            </div>

            {/* Background Layered Card */}
            <div className="absolute top-16 left-8 bg-white/90 rounded-2xl p-4 shadow-lg w-72 -z-0 opacity-60 scale-95 transform -rotate-3">
              <div className="h-16 bg-gray-200 rounded-lg mb-2"></div>
              <h5 className="font-bold text-xs text-gray-800">Build Digital...</h5>
            </div>

            {/* Happy Students Green Badge */}
            <div className="absolute bottom-[-10px] left-32 bg-[#ccff00] text-gray-900 p-2.5 rounded-2xl shadow-lg z-30 flex items-center gap-3">
              <div>
                <p className="text-[10px] font-bold">Happy Students</p>
                <p className="text-[9px] font-semibold text-blue-700">4.5 (130) ★</p>
              </div>
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-block h-5 w-5 rounded-full bg-gray-400 ring-2 ring-white"></span>
                <span className="inline-block h-5 w-5 rounded-full bg-gray-600 ring-2 ring-white"></span>
                <span className="inline-block h-5 w-5 rounded-full bg-blue-600 ring-2 ring-white"></span>
                <span className="inline-block h-5 w-5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center ring-2 ring-white">2K+</span>
              </div>
            </div>

            {/* Green Pyramid Floating Graphic */}
            <div className="absolute -bottom-6 -left-4 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-[#ccff00] z-30 transform -rotate-12 filter drop-shadow-md"></div>
          </div>
        </div>


        {/* RIGHT COLUMN: White Form Box */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl w-full max-w-md text-gray-800">

            {/* Header Title */}
            <p className="text-blue-600 text-xs font-semibold mb-1">
              {isSignIn ? 'Sign In' : 'Create an Account'}
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
              {isSignIn ? 'Welcome Back' : 'Welcome to ByteSpace'}
            </h3>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

              {/* Full Name field ONLY for Sign Up */}
              {!isSignIn && (
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jamie Davis"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-gray-300"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-gray-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm placeholder-gray-300"
                />
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#ccff00] hover:bg-[#b8e600] text-gray-900 font-bold px-7 py-2.5 rounded-full text-sm transition-all shadow-sm active:scale-95"
                >
                  {isSignIn ? 'Sign In' : 'Continue'}
                </button>
              </div>
            </form>

            {/* Social Logins - Shown ONLY in Sign In mode (as in Figma) */}
            {isSignIn && (
              <div className="mt-6">
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-gray-200 w-full"></div>
                  <span className="bg-white px-3 text-xs text-gray-400 absolute">or</span>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
                    <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Toggle Link */}
            <div className="mt-6 text-center text-xs text-gray-500">
              {isSignIn ? (
                <>
                  New user?{' '}
                  <button
                    type="button"
                    onClick={() => handleModeChange('signup')}
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => handleModeChange('signin')}
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Login
                  </button>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}