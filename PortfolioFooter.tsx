import { Heart } from 'lucide-react';

export function PortfolioFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0 flex items-center space-x-2">
            <span>© 2026 Sean Carlo Honrade. Crafted with</span>
            <Heart className="w-4 h-4 text-purple-600 fill-purple-600" />
            <span>and dedication</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
