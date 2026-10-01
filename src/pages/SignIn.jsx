import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="w-full min-h-screen bg-[#0044ff] relative py-12 px-6 lg:px-16 flex items-center justify-center font-sans overflow-hidden">

      {/* Background Blue Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Top Left ByteSpace Logo */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
        <div className="w-8 h-8 bg-[#d5ff00] text-black font-extrabold text-xl flex items-center justify-center rounded-tl-md rounded-br-md rounded-bl-xl rounded-tr-sm">
          b
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT COLUMN: Text & Visual Design */}
        <div className="lg:col-span-6 text-white space-y-6 pt-10 lg:pt-0">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Sign in with ease
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          {/* Figma Floating Graphics/Cards Container */}
          <div className="relative w-full h-80 pt-4 hidden sm:block">

            {/* Lime Yellow Ring */}
            <div className="absolute top-2 left-6 w-14 h-14 border-[8px] border-[#d5ff00] rounded-full z-30 transform -rotate-12"></div>

            {/* Main Center Card */}
            <div className="absolute top-10 left-16 z-20 bg-white text-gray-900 rounded-2xl p-4 shadow-2xl w-72">
              <div className="bg-black rounded-xl p-3 text-white mb-2 relative overflow-hidden">
                <div className="flex justify-between items-center text-[9px] text-gray-300 mb-2">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">17 Lessons</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">2 hours 15 mins</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full">89 Comments</span>
                </div>
                {/* Mock Chart Graphic */}
                <div className="h-16 w-full flex items-end gap-1 pt-1">
                  <div className="w-1/6 bg-cyan-500/30 h-[40%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/60 h-[70%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-400 h-[100%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/50 h-[60%] rounded-t"></div>
                  <div className="w-1/6 bg-cyan-500/80 h-[85%] rounded-t"></div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-xs text-gray-900">the Power of Big Data</h4>
                  <p className="text-[10px] text-gray-400">by purepearl studio</p>
                </div>
                <span className="text-xs font-bold text-gray-800">4.5 <span className="text-yellow-400">★</span></span>
              </div>

              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px]">
                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">📊 Beginner</span>
                <span className="text-blue-600 font-bold">$25 <span className="text-gray-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Back Card */}
            <div className="absolute top-16 left-4 bg-white/90 rounded-2xl p-4 shadow-lg w-64 z-10 opacity-70 transform -rotate-6">
              <div className="h-14 bg-gray-200 rounded-lg mb-2"></div>
              <p className="font-bold text-xs text-gray-800">Build Digital...</p>
            </div>

            {/* Happy Students Green Badge */}
            <div className="absolute bottom-4 left-36 bg-[#d5ff00] text-gray-900 px-3 py-2 rounded-2xl shadow-xl z-30 flex items-center gap-2">
              <div>
                <p className="text-[10px] font-bold leading-tight">Happy Students</p>
                <p className="text-[8px] font-semibold text-blue-700">4.5 (130) ★</p>
              </div>
              <div className="flex -space-x-1 overflow-hidden">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-400 ring-1 ring-white"></span>
                <span className="inline-block h-4 w-4 rounded-full bg-gray-600 ring-1 ring-white"></span>
                <span className="inline-block h-4 w-4 rounded-full bg-black text-white text-[7px] font-bold flex items-center justify-center ring-1 ring-white">2K+</span>
              </div>
            </div>

            {/* Green Pyramid Graphic */}
            <div className="absolute bottom-0 left-2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#d5ff00] z-30 transform -rotate-12 filter drop-shadow"></div>
          </div>
        </div>

        {/* RIGHT COLUMN: White Form Box */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl w-full max-w-md text-gray-800">

            <p className="text-blue-600 text-xs font-medium mb-1">Sign In</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Welcome Back
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm placeholder-gray-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm placeholder-gray-300"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#d5ff00] hover:bg-[#c3eb00] text-gray-900 font-bold px-8 py-3 rounded-full text-sm transition-all shadow-sm active:scale-95"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Social Logins */}
            <div className="mt-8">
              <div className="relative flex items-center justify-center mb-6">
                <div className="border-t border-gray-100 w-full"></div>
                <span className="bg-white px-3 text-[11px] text-gray-400 absolute">or</span>
              </div>

              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition">
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
              New user?{' '}
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                Create an account
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}