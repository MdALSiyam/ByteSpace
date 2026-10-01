import { useState } from 'react';
import { 
  Search, CheckCircle2, PlayCircle, Paintbrush, Code, 
  Monitor, Briefcase, TrendingUp, Camera, ShoppingBag,
  Globe2, CircleDot, Zap, Aperture, Target
} from 'lucide-react';
import AuthSection from './pages/Auth';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 
    'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 
    'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 
    'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking', '+ More'
  ];

  const courses = [
    { id: 1, title: 'Learn Figma from Basic', price: '$25', rating: 4.8, author: 'purepearl studio', lessons: '17 Lessons', hours: '2 hours 16 min', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500' },
    { id: 2, title: 'Build Digital Asset', price: '$25', rating: 4.8, author: 'purepearl studio', lessons: '12 Lessons', hours: '3 hours 10 min', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500' },
    { id: 3, title: 'the Power of Big Data', price: '$25', rating: 4.8, author: 'purepearl studio', lessons: '20 Lessons', hours: '5 hours 45 min', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500' },
    { id: 4, title: 'Balancing Productivity an...', price: '$25', rating: 4.8, author: 'purepearl studio', lessons: '10 Lessons', hours: '1 hour 50 min', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500' },
    { id: 5, title: 'Mastering Money Manage...', price: '$25', rating: 4.8, author: 'purepearl studio', lessons: '15 Lessons', hours: '4 hours 20 min', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500' },
    { id: 6, title: 'From Idea to Startup Succ...', price: '$25', rating: 4.8, author: 'purepearl studio', lessons: '22 Lessons', hours: '6 hours 15 min', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500' },
  ];

  const learningPaths = [
    { title: 'Design', icon: <Paintbrush className="w-5 h-5 text-black" /> },
    { title: 'Development', icon: <Code className="w-5 h-5 text-black" /> },
    { title: 'IT & Software', icon: <Monitor className="w-5 h-5 text-black" /> },
    { title: 'Business', icon: <Briefcase className="w-5 h-5 text-black" /> },
    { title: 'Marketing', icon: <TrendingUp className="w-5 h-5 text-black" /> },
    { title: 'Photography', icon: <Camera className="w-5 h-5 text-black" /> },
  ];

  const testimonials = [
    { name: 'Sarah M.', role: 'Enthusiastic Learner', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100', text: 'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.' },
    { name: 'James L.', role: 'Lifelong Learner', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', text: 'I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.' },
    { name: 'Alex B.', role: 'Inspired Creator', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', text: 'As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally.' },
  ];

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setActiveTab('course-detail');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col justify-between selection:bg-[#ccff00]">
      {/* Dynamic Header */}
      <header className="bg-[#0050ff] text-white px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-blue-600/30">
        <button onClick={() => setActiveTab('home')} className="flex items-center gap-2 text-2xl font-black tracking-tight outline-none">
          <span className="bg-[#ccff00] text-black w-8 h-8 rounded-lg flex items-center justify-center font-black text-xl">b</span>
          <span className="text-white font-black tracking-tight">ByteSpace</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-100">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`hover:text-white transition font-semibold ${activeTab === 'home' ? 'text-white font-bold underline underline-offset-8' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('courses')} 
            className={`hover:text-white transition font-semibold ${activeTab === 'courses' ? 'text-white font-bold underline underline-offset-8' : ''}`}
          >
            Courses
          </button>
          <button 
            onClick={() => setActiveTab('creator')} 
            className={`hover:text-white transition font-semibold ${activeTab === 'creator' ? 'text-white font-bold underline underline-offset-8' : ''}`}
          >
            Creators
          </button>
        </nav>

        <div className="flex items-center gap-4 text-sm font-medium">
          <button onClick={() => setActiveTab('login')} className="hover:text-blue-100 transition font-medium">Sign In</button>
          <button onClick={() => setActiveTab('signup')} className="bg-[#ccff00] text-black px-4 py-2 rounded-xl font-extrabold hover:bg-lime-300 transition text-xs shadow-sm">Join Us</button>
          <button className="p-1 hover:text-blue-200"><ShoppingBag className="w-5 h-5" /></button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative min-h-[512px] overflow-hidden bg-[#0644e8] px-5 pt-14 text-white sm:px-8 md:pt-[72px]">
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff17_1px,transparent_1px),linear-gradient(to_bottom,#ffffff17_1px,transparent_1px)] bg-[size:120px_120px]" />
              <div aria-hidden="true" className="absolute -bottom-[340px] left-1/2 h-[560px] w-[920px] -translate-x-1/2 rounded-t-full bg-[#ccff00] md:w-[1000px]" />
              <div aria-hidden="true" className="absolute left-[-38px] top-[190px] hidden h-28 w-44 rotate-[-18deg] rounded-[55%] border-[22px] border-[#ccff00] shadow-[0_0_18px_#ccff00] md:block" />
              <div aria-hidden="true" className="absolute left-[15%] top-[330px] hidden h-14 w-24 rotate-[-22deg] rounded-full border-[13px] border-white shadow-[0_8px_16px_rgba(0,0,0,0.15)] md:block" />
              <div aria-hidden="true" className="absolute right-[-45px] top-[180px] hidden h-36 w-48 rotate-[-24deg] rounded-[35%_65%_30%_70%] bg-[#ccff00] md:block" />
              <div aria-hidden="true" className="absolute right-[16%] top-[310px] hidden h-0 w-0 rotate-[12deg] border-x-[30px] border-b-[54px] border-x-transparent border-b-white drop-shadow-lg md:block" />
              <div aria-hidden="true" className="absolute right-[7%] top-[385px] hidden h-24 w-14 rotate-[18deg] rounded-[50%] border-[14px] border-white shadow-[0_8px_16px_rgba(0,0,0,0.15)] md:block" />

              <div className="relative z-10 mx-auto max-w-5xl text-center">
                <h1 className="mx-auto mb-4 max-w-[760px] text-[36px] font-black leading-[1.05] tracking-tight sm:text-[44px] md:text-[54px]">
                  Get Access to Hundreds<br />Courses Available
                </h1>
                <p className="mx-auto mb-7 max-w-xl text-[11px] leading-relaxed text-blue-100 md:text-xs">
                  Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                <div className="mx-auto flex max-w-[460px] items-center rounded-full bg-white p-1.5 shadow-2xl">
                  <div className="flex items-center pl-4 text-slate-400">
                    <Search className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Course, topic, creator"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full min-w-0 bg-transparent px-3 text-xs font-medium text-slate-800 outline-none placeholder:text-slate-400"
                  />
                  <button onClick={() => setActiveTab('courses')} className="shrink-0 rounded-full bg-[#ccff00] px-6 py-2.5 text-xs font-extrabold text-black transition hover:bg-lime-300">
                    Search
                  </button>
                </div>

                <div className="relative mx-auto mt-5 h-[250px] max-w-[900px] sm:h-[265px]">
                  <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=870&auto=format&fit=crop"
                    alt="Student learning with a laptop"
                    className="absolute bottom-0 left-1/2 z-10 h-[270px] w-[330px] -translate-x-1/2 rounded-t-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)] sm:w-[370px]"
                  />

                  <div className="absolute left-[4%] top-10 z-20 rounded-xl border border-slate-100 bg-white/95 px-4 py-2.5 text-left text-slate-800 shadow-xl backdrop-blur-md sm:left-[14%]">
                    <p className="text-[10px] font-bold text-slate-900">UI/UX Design</p>
                    <p className="mt-0.5 text-[8px] font-semibold text-slate-400">200 Courses · 1000+ Students</p>
                  </div>

                  <div className="absolute right-[2%] top-10 z-20 min-w-[130px] rounded-xl border border-slate-100 bg-white/95 p-3.5 text-left text-slate-800 shadow-xl backdrop-blur-md sm:right-[14%]">
                    <p className="text-[8px] font-bold uppercase text-slate-400">Learning Progress</p>
                    <p className="mt-0.5 text-2xl font-black text-slate-900">55%</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[55%] bg-[#ccff00]" />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-[2%] z-20 flex items-center gap-3 rounded-xl border border-slate-100 bg-white/95 p-2.5 text-slate-800 shadow-xl backdrop-blur-md sm:left-[10%]">
                    <div className="pr-1 text-left">
                      <p className="text-[9px] font-bold">Happy Students</p>
                      <p className="text-[8px] font-semibold text-slate-400">4.5 (240) <span className="text-amber-400">★</span></p>
                    </div>
                    <div className="flex -space-x-2">
                      <img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="" />
                      <img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="" />
                      <img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="" />
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#ccff00] text-[8px] font-extrabold text-black">2k+</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-b border-slate-100 py-6 bg-white">
              <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 text-xs font-bold text-slate-500">
                {[Globe2, CircleDot, Zap, Aperture, Target].map((BrandIcon, index) => (
                  <span key={index} className="flex items-center gap-1.5 opacity-65 grayscale transition hover:opacity-100">
                    <BrandIcon className="h-5 w-5" strokeWidth={2.5} />
                    <span className="text-sm font-extrabold">Logoipsum</span>
                  </span>
                ))}
              </div>
            </section>

            <section className="py-16 px-6 max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Discover Your Passion, <br /> Build Your Skills
              </h2>
              <p className="text-slate-400 text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
                At Bytespace Courses, we bring you access to life-changing knowledge. Explore a variety of themes across different fields, from technology to the arts, and make a difference in your career and life.
              </p>

              <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                      activeCategory === cat
                        ? 'bg-[#ccff00] text-black font-extrabold shadow-sm'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {courses.map((course) => (
                  <div key={course.id} onClick={() => handleCourseSelect(course)} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between cursor-pointer group">
                    <div>
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                        <div className="absolute bottom-2 left-2 flex gap-1.5">
                          <span className="bg-white/90 backdrop-blur-md text-[10px] font-semibold px-2 py-0.5 rounded text-slate-700">{course.lessons}</span>
                          <span className="bg-white/90 backdrop-blur-md text-[10px] font-semibold px-2 py-0.5 rounded text-slate-700">{course.hours}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-bold text-base text-slate-900 line-clamp-1">{course.title}</h3>
                          <div className="flex items-center text-xs font-bold text-slate-700">
                            <span className="text-amber-400 mr-1">★</span> {course.rating}
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 font-medium">by {course.author}</p>

                        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-1.5">
                              <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80" alt="" />
                              <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80" alt="" />
                            </div>
                            <span className="bg-[#ccff00] text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded">2k+</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-extrabold text-[#0050ff]">{course.price}</span>
                            <span className="text-[9px] text-slate-400 block font-medium">Lifetime</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-16 px-6 bg-slate-50/50 text-center border-t border-slate-100">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  Explore Diverse Learning Paths at Bytespace
                </h2>
                <p className="text-slate-400 text-xs max-w-2xl mx-auto mb-12 leading-relaxed">
                  At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses caters to various fields, ensuring there's something for everyone.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {learningPaths.map((path) => (
                    <div key={path.title} onClick={() => setActiveTab('courses')} className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col items-center gap-3 hover:shadow-md transition cursor-pointer">
                      <div className="w-12 h-12 bg-[#ccff00] rounded-full flex items-center justify-center">
                        {path.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{path.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="w-full bg-[radial-gradient(ellipse_at_10%_35%,#eaff9b_0,transparent_30%),radial-gradient(ellipse_at_88%_60%,#e1e8ff_0,transparent_34%),#fafafa] px-6 py-20">
              <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 leading-tight mb-4">
                    Your Path to Professional <br /> Growth Starts Here!
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8">
                    Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you're looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                  </p>

                  <div className="flex gap-10">
                    <div>
                      <p className="text-3xl font-black text-[#0050ff]">12K</p>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">Students</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-[#0050ff]">70+</p>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">Courses</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-[#0050ff]">16</p>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">Creators</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-[#ccff00] rounded-3xl p-6 text-slate-900 relative">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" alt="Growth" className="rounded-2xl w-full h-80 object-cover" />
                    
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                      <p className="text-xs font-bold text-slate-800">Learn Figma from Basic</p>
                      <p className="text-[10px] text-slate-400 font-medium">by purepearl studio</p>
                      <div className="mt-2 flex items-center justify-between text-xs">
                        <span className="font-extrabold text-[#0050ff]">$25</span>
                        <span className="text-[10px] text-slate-500 font-semibold">★ 4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full bg-[radial-gradient(ellipse_at_12%_55%,#eaff9b_0,transparent_29%),radial-gradient(ellipse_at_90%_20%,#e5eaff_0,transparent_35%),#fbfbfb] px-6 py-20">
              <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="order-2 md:order-1 relative">
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200/80">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" alt="Creator" className="rounded-2xl w-full h-72 object-cover mb-4" />
                    
                    <div className="flex gap-4">
                      <div className="bg-[#0050ff] text-white p-3 rounded-xl flex-1">
                        <p className="text-[10px] text-blue-200 font-semibold">Total Revenue</p>
                        <p className="text-lg font-black">$120.29</p>
                      </div>
                      <div className="bg-slate-100 text-slate-800 p-3 rounded-xl flex-1">
                        <p className="text-[10px] text-slate-400 font-semibold">Year to Date</p>
                        <p className="text-lg font-black">$1,200.38</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-black text-slate-900 leading-tight mb-4">
                    Create & Manage <br /> Courses Easily.
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
                  </p>

                  <div className="space-y-3">
                    {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-xs font-bold text-slate-800">
                        <div className="w-4 h-4 bg-[#0050ff] rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="relative my-12 overflow-hidden bg-[#0644e8] px-6 py-16 text-center text-white">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
              <div aria-hidden="true" className="absolute -left-8 top-8 hidden h-20 w-32 -rotate-12 rounded-full border-[18px] border-[#ccff00] md:block" />
              <div aria-hidden="true" className="absolute right-[12%] top-7 hidden h-0 w-0 -rotate-12 border-x-[27px] border-b-[48px] border-x-transparent border-b-[#ccff00] md:block" />
              <div aria-hidden="true" className="absolute -right-8 bottom-2 hidden h-24 w-14 rotate-12 rounded-full border-[14px] border-[#ccff00] md:block" />
              <div aria-hidden="true" className="absolute bottom-8 left-[13%] hidden h-12 w-20 rotate-12 rounded-full border-[12px] border-white md:block" />
              
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                  Unlock Your Potential as a <br /> Creator with ByteSpace
                </h2>
                <p className="text-blue-100 text-xs max-w-xl mx-auto mb-8 font-normal leading-relaxed opacity-90">
                  Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                <button onClick={() => setActiveTab('signup')} className="bg-[#ccff00] text-black font-extrabold px-6 py-2.5 rounded-full text-xs hover:bg-lime-300 transition shadow-md">
                  Join as Creator
                </button>
              </div>
            </section>

            <section className="w-full bg-[radial-gradient(ellipse_at_82%_50%,#eaff9b_0,transparent_32%),radial-gradient(ellipse_at_10%_20%,#edf0ff_0,transparent_32%),#fbfbfb] px-6 py-20">
              <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-left">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Discover What Our <br /> Community Is Saying
                </h2>
                <p className="text-slate-400 text-xs mt-2 max-w-xl leading-relaxed">
                  At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-xs text-slate-900">{t.name}</p>
                          <p className="text-[10px] text-blue-600 font-semibold">{t.role}</p>
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">"{t.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </section>
          </>
        )}

        {/* Courses Page View */}
        {activeTab === 'courses' && (
          <div className="max-w-7xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-extrabold mb-2">All Courses</h1>
            <p className="text-slate-500 text-xs mb-8">Browse hundreds of courses from top creators worldwide.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} onClick={() => handleCourseSelect(course)} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                  <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-base mb-2">{course.title}</h3>
                    <p className="text-xs text-slate-400 mb-4">by {course.author}</p>
                    <div className="flex justify-between items-center border-t pt-3">
                      <span className="text-xs font-black text-[#0050ff]">{course.price}</span>
                      <button className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg font-bold">Enroll Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Creators View */}
        {activeTab === 'creator' && (
          <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-[#0050ff] text-white p-8 rounded-3xl shadow-xl mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#ccff00] text-black font-black text-2xl rounded-full flex items-center justify-center">PS</div>
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2">purepearl studio <CheckCircle2 className="w-5 h-5 text-[#ccff00]" /></h1>
                  <p className="text-blue-200 text-xs">UI/UX & Web Designer</p>
                </div>
              </div>
              <p className="text-blue-100 text-xs leading-relaxed max-w-xl">
                Welcome to purepearl studio! Delivering top-tier educational courses in design, tech, and digital marketing.
              </p>
            </div>
          </div>
        )}

        {/* Course Detail View */}
        {activeTab === 'course-detail' && selectedCourse && (
          <div className="max-w-5xl mx-auto py-12 px-6">
            <button onClick={() => setActiveTab('courses')} className="text-xs text-slate-500 hover:underline mb-4 font-semibold">← Back to courses</button>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <span className="bg-blue-100 text-[#0050ff] px-3 py-1 rounded-full text-[10px] font-bold inline-block mb-3">Course Preview</span>
              <h1 className="text-2xl font-black mb-2">{selectedCourse.title}</h1>
              <p className="text-xs text-slate-500 mb-6">by {selectedCourse.author}</p>
              
              <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center text-white mb-8 relative overflow-hidden">
                <img src={selectedCourse.img} alt={selectedCourse.title} className="w-full h-full object-cover opacity-50" />
                <PlayCircle className="w-16 h-16 text-[#ccff00] opacity-90 cursor-pointer hover:scale-110 transition absolute" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-6">
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-1">Lessons</h4>
                  <p className="font-semibold text-sm">{selectedCourse.lessons}</p>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-1">Duration</h4>
                  <p className="font-semibold text-sm">{selectedCourse.hours}</p>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400 uppercase mb-1">Price</h4>
                  <p className="font-black text-xl text-[#0050ff]">{selectedCourse.price}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Auth Forms */}
        {(activeTab === 'login' || activeTab === 'signup') && (
          <AuthSection
            mode={activeTab === 'login' ? 'signin' : 'signup'}
            onModeChange={(nextTab) => setActiveTab(nextTab)}
          />
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2 pr-6">
            <div className="flex items-center gap-2 font-black text-slate-900 text-xl mb-4">
              <span className="bg-[#ccff00] text-black w-7 h-7 rounded-lg flex items-center justify-center font-black text-base">b</span> ByteSpace
            </div>
            <p className="text-slate-500 text-xs mb-4">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border border-slate-200 px-4 py-2 rounded-full text-xs w-full outline-none focus:border-[#0050ff]"
              />
              <button className="bg-[#ccff00] text-black font-extrabold px-6 py-2 rounded-full text-xs hover:bg-lime-300 transition">
                Search
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-2">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">Featured Courses</h4>
            <ul className="space-y-2 text-slate-500 text-[11px]">
              <li>Featured Categories</li>
              <li>Business</li>
              <li>IT</li>
              <li>Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">Development</h4>
            <ul className="space-y-2 text-slate-500 text-[11px]">
              <li className="text-slate-900 font-bold">Marketing</li>
              <li>Photography</li>
              <li>Finance</li>
              <li>Sport</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3">Become a Creator</h4>
            <ul className="space-y-2 text-slate-500 text-[11px]">
              <li>Affiliate Program</li>
              <li>Contact</li>
              <li>Help</li>
              <li>About</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[11px]">
          <p>© 2026 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}