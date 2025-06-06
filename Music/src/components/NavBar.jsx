import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Frosted glass effect container */}
      <div className="bg-white/10 backdrop-blur-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">
                CVM
              </Link>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:block">
              <div className="flex space-x-4">
                <Link to="/" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-md font-medium transition-colors">
                  Home
                </Link>
                <Link to="/customizer" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-nd font-medium transition-colors">
                  Customizer
                </Link>
                <Link to="/test" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-nd font-medium transition-colors">
                  Test
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;