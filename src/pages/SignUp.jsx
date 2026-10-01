import { Link } from 'react-router-dom';

export default function SignUp() {
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
            Sign up and come in
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>

          {/* Figma Floating Graphics/Cards Container */}
          <div className="relative w-full h-80 pt-4 hidden sm:block">

            {/* Lime Yellow Ring */}
            <div className="absolute top-2 left-6 w-14 h-14 border-[8px] border-[#d5ff00] rounded-full z-30 transform -rotate-12"></div>

            {/* Main Center Card (The Power of Big Data) */}
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

            <p className="text-blue-600 text-xs font-medium mb-1">Create an Account</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
              Welcome to ByteSpace
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm placeholder-gray-300"
                />
              </div>

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
                  Continue
                </button>
              </div>
            </form>

            <div className="mt-10 text-center text-xs text-gray-500">
              Already have an account?{' '}
              <Link to="/signin" className="text-blue-600 font-medium hover:underline">
                Login
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}