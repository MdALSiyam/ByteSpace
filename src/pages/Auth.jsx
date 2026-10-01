import React from 'react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="min-h-screen bg-brandBlue flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-6">Sign in with your account details</p>
        
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="designer@example.com" className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 outline-none focus:border-brandBlue" />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" placeholder="••••••••" className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 outline-none focus:border-brandBlue" />
          </div>
          <button className="w-full bg-brandLime text-black font-bold py-3 rounded-lg hover:bg-lime-400">Sign In</button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Don't have an account? <Link to="/signup" className="text-brandBlue font-bold">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export function Signup() {
  return (
    <div className="min-h-screen bg-brandBlue flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-1">Welcome to ByteSpace</h2>
        <p className="text-sm text-gray-500 mb-6">Create an account to start learning</p>
        
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input type="text" placeholder="Jamie Davis" className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 outline-none focus:border-brandBlue" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="designer@example.com" className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 outline-none focus:border-brandBlue" />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" placeholder="••••••••" className="w-full border border-gray-300 px-4 py-2 rounded-lg mt-1 outline-none focus:border-brandBlue" />
          </div>
          <button className="w-full bg-brandLime text-black font-bold py-3 rounded-lg hover:bg-lime-400">Continue</button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          Already have an account? <Link to="/login" className="text-brandBlue font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}