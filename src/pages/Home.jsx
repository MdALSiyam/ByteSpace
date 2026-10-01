import { Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Learn Figma from Basic', price: '$25', rating: 4.8, img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500' },
  { id: 2, title: 'Build Digital Assets', price: '$35', rating: 4.9, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500' },
  { id: 3, title: 'The Power of Big Data', price: '$29', rating: 4.7, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500' },
  { id: 4, title: 'Balancing Productivity', price: '$20', rating: 4.6, img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500' },
  { id: 5, title: 'Mastering Money Mgmt', price: '$45', rating: 4.9, img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500' },
  { id: 6, title: 'From Idea to Startup', price: '$50', rating: 5.0, img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brandBlue text-white text-center py-20 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Get Access to Hundreds <br /> Courses Available
          </h1>
          <p className="text-blue-100 mb-8 text-base md:text-lg">
            With our high-quality courses, learn new skills from scratch or level up your existing knowledge with top industry mentors.
          </p>
          <div className="flex bg-white rounded-full p-2 max-w-lg mx-auto shadow-lg">
            <input 
              type="text" 
              placeholder="What do you want to learn today?" 
              className="w-full px-4 text-gray-800 outline-none rounded-full"
            />
            <button className="bg-brandLime text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 flex items-center gap-2">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Discover Your Passion, Build Your Skills</h2>
          <p className="text-gray-500">Explore top rated courses chosen by thousands of students.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Beginner</span>
                  <div className="flex items-center text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                    {course.rating}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-4">{course.title}</h3>
                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                  <span className="text-xl font-extrabold text-brandBlue">{course.price}</span>
                  <Link to="/courses" className="text-sm font-semibold text-gray-600 hover:text-black">
                    View Course →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brandBlue text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-6">Join thousands of instructors around the world who teach millions of students on ByteSpace.</p>
        <button className="bg-brandLime text-black font-bold px-8 py-3 rounded-full hover:bg-lime-400">
          Get Started Now
        </button>
      </section>
    </div>
  );
}