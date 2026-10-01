import React, { useState } from 'react';
import { 
  Search, CheckCircle2, PlayCircle, Paintbrush, Code, 
  Monitor, Briefcase, TrendingUp, Camera, ShoppingBag
} from 'lucide-react';

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
            <section className="bg-[#0050ff] text-white relative pt-12 pb-28 px-6 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>

              {/* Decorative Doodle Shapes */}
              <div className="absolute top-12 left-8 w-24 h-24 bg-[#ccff00] rounded-full blur-2xl opacity-20 pointer-events-none"></div>
              <div className="absolute top-1/3 left-6 text-[#ccff00] font-bold text-6xl select-none opacity-80 animate-pulse hidden md:block">⌇⌇⌇</div>
              <div className="absolute top-1/4 right-8 text-[#ccff00] font-bold text-7xl select-none opacity-80 hidden md:block">▲</div>

              <div className="max-w-5xl mx-auto relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
                  Get Access to Hundreds <br /> Courses Available
                </h1>
                <p className="text-blue-100 text-xs md:text-sm max-w-xl mx-auto mb-8 font-normal opacity-90">
                  Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                {/* Search Bar */}
                <div className="flex bg-white rounded-full p-1.5 max-w-md mx-auto shadow-2xl mb-16">
                  <div className="flex items-center pl-4 text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Course, topic, creator" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 text-slate-800 text-xs outline-none bg-transparent placeholder:text-slate-400 font-medium"
                  />
                  <button onClick={() => setActiveTab('courses')} className="bg-[#ccff00] text-black font-extrabold px-6 py-2.5 rounded-full text-xs hover:bg-lime-300 transition shrink-0">
                    Search
                  </button>
                </div>

                {/* Hero Center Illustration & Badges */}
                <div className="relative max-w-2xl mx-auto mt-6">
                  <div className="w-72 h-72 md:w-96 md:h-96 bg-[#ccff00] rounded-full mx-auto flex items-center justify-center overflow-hidden relative shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600" 
                      alt="Student" 
                      className="w-full h-full object-cover object-top pt-4 scale-110"
                    />
                  </div>

                  <div className="absolute top-12 left-0 md:-left-8 bg-white/95 backdrop-blur-md text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex flex-col items-start border border-slate-100 text-left">
                    <p className="text-xs font-bold text-slate-900">UI/UX Design</p>
                    <p className="text-[9px] text-slate-400 font-semibold mt-0.5">200 Courses • 1000+ Students</p>
                  </div>

                  <div className="absolute top-12 right-0 md:-right-8 bg-white/95 backdrop-blur-md text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-100 text-left min-w-[140px]">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Learning Progress</p>
                    <p className="text-xl font-black text-slate-900 mt-0.5">55%</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#ccff00] h-full w-[55%]"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-2 md:left-4 bg-white/95 backdrop-blur-md text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <div className="text-left pr-1">
                      <p className="text-[11px] font-bold text-slate-800">Happy Students</p>
                      <p className="text-[9px] text-slate-400 font-semibold">4.5 (240) ★</p>
                    </div>
                    <div className="flex -space-x-2">
                      <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="avatar" />
                      <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="avatar" />
                      <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="avatar" />
                      <span className="w-6 h-6 rounded-full bg-[#ccff00] text-black text-[9px] font-extrabold flex items-center justify-center border-2 border-white">2k+</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Partner Logos */}
            <section className="border-b border-slate-100 py-6 bg-white">
              <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-60 grayscale hover:grayscale-0 transition gap-6 text-xs font-bold">
                <span className="flex items-center gap-1.5">🌐 Logoipsum</span>
                <span className="flex items-center gap-1.5">⚙️ Logoipsum</span>
                <span className="flex items-center gap-1.5">⚡ Logoipsum</span>
                <span className="flex items-center gap-1.5">❖ Logoipsum</span>
                <span className="flex items-center gap-1.5">🎯 Logoipsum</span>
              </div>
            </section>

            {/* Discover Section */}
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

              {/* Course Cards Grid */}
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

            {/* Learning Paths */}
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

            {/* Professional Growth Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

            {/* Create & Manage Section */}
            <section className="py-20 px-6 max-w-6xl mx-auto bg-slate-50/50 rounded-3xl my-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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

            {/* Creator Banner */}
            <section className="bg-[#0050ff] text-white py-16 px-6 text-center relative overflow-hidden my-12">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
              
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

            {/* Testimonials */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
              <div className="text-left mb-12">
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
          <div className="bg-[#0050ff] min-h-[80vh] flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
              <h2 className="text-2xl font-black mb-1 text-slate-900">{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
              <p className="text-xs text-slate-400 mb-6">{activeTab === 'login' ? 'Sign in to continue learning' : 'Join thousands of learners on ByteSpace'}</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {activeTab === 'signup' && (
                  <div>
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full border border-slate-200 px-3 py-2 rounded-xl text-xs mt-1 outline-none focus:border-[#0050ff]" />
                  </div>
                )}
                <div>
                  <label className="text-xs font-bold text-slate-700">Email Address</label>
                  <input type="email" placeholder="user@example.com" className="w-full border border-slate-200 px-3 py-2 rounded-xl text-xs mt-1 outline-none focus:border-[#0050ff]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-slate-200 px-3 py-2 rounded-xl text-xs mt-1 outline-none focus:border-[#0050ff]" />
                </div>
                <button onClick={() => setActiveTab('home')} className="w-full bg-[#ccff00] text-black font-extrabold py-2.5 rounded-xl text-xs hover:bg-lime-300 transition mt-2">
                  {activeTab === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>
            </div>
          </div>
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