import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-600">SCH</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-purple-600 hover:text-purple-700">Home</a>
            <a href="#about" className="text-gray-600 hover:text-purple-600">About</a>
            <a href="#skills" className="text-gray-600 hover:text-purple-600">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600">Contact</a>
          </nav>

          <div className="hidden md:block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
              Let's Talk
            </button>
          </div>

          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <a href="#home" className="block text-purple-600 hover:text-purple-700">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-purple-600">About</a>
            <a href="#skills" className="block text-gray-600 hover:text-purple-600">Skills</a>
            <a href="#contact" className="block text-gray-600 hover:text-purple-600">Contact</a>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
              Let's Talk
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
