import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User, LogOut } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">AashuZone</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-icon">
              <Home className="h-6 w-6" />
            </Link>
            <Link to="/create" className="nav-icon">
              <PlusSquare className="h-6 w-6" />
            </Link>
            <Link to="/notifications" className="nav-icon">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="nav-icon">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}