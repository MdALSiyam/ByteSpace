import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-brandBlue text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-blue-600">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <span className="bg-brandLime text-black px-2 py-1 rounded font-black">b</span> ByteSpace
      </Link>
      
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-brandLime transition">Home</Link>
        <Link to="/courses" className="hover:text-brandLime transition">Courses</Link>
        <Link to="/creators" className="hover:text-brandLime transition">Creators</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hover:underline text-sm md:text-base">Sign In</Link>
        <Link to="/signup" className="bg-brandLime text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-lime-400 transition">
          Join Us
        </Link>
        <ShoppingBag className="w-5 h-5 cursor-pointer ml-2" />
      </div>
    </nav>
  );
}