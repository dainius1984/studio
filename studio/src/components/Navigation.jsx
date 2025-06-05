import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">
              Studio Figura <span className="text-orange-500">Stablowice</span>
            </h1>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-orange-500 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">Strona główna</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">O nas</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Usługi</a>
              <a href="#results" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Efekty</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">Kontakt</a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Umów wizytę
              </button>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-orange-500 font-medium">Strona główna</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">O nas</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Usługi</a>
            <a href="#results" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Efekty</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Kontakt</a>
            <button className="w-full mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-medium">
              Umów wizytę
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 