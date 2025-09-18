import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    console.log('Scroll to top clicked!'); // Debug log
    if (typeof window !== 'undefined') {
      console.log('Window exists, attempting scroll'); // Debug log
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // More robust approach using useEffect
  useEffect(() => {
    const handleLogoClick = (e) => {
      console.log('Logo clicked via useEffect!');
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const logoElement = document.querySelector('.logo-container');
      console.log('Logo element found:', logoElement); // Debug log
      if (logoElement) {
        logoElement.addEventListener('click', handleLogoClick);
        console.log('Event listener attached'); // Debug log
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const logoElement = document.querySelector('.logo-container');
      if (logoElement) {
        logoElement.removeEventListener('click', handleLogoClick);
      }
    };
  }, []);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/30 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            className="flex items-center space-x-3 cursor-pointer logo-container bg-transparent border-none p-0" 
            onClick={scrollToTop}
            type="button"
          >
            <img 
              src="/images/cephas.png" 
              alt="Cephas Consulting Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-serif text-amber-600 tracking-wide">CEPHAS</span>
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-amber-500 transition-colors font-medium py-2">
              Services
            </a>
            <a href="#about" className="text-slate-300 hover:text-amber-500 transition-colors font-medium py-2">
              About
            </a>
            <a href="#process" className="text-slate-300 hover:text-amber-500 transition-colors font-medium py-2">
              Process
            </a>
            <a href="#case-studies" className="text-slate-300 hover:text-amber-500 transition-colors font-medium py-2">
              Case Studies
            </a>
            <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-all duration-200 font-medium shadow-lg">
              Contact
            </a>
          </nav>
          
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-slate-300 hover:text-amber-500">Services</a>
              <a href="#about" className="block px-3 py-2 text-slate-300 hover:text-amber-500">About</a>
              <a href="#process" className="block px-3 py-2 text-slate-300 hover:text-amber-500">Process</a>
              <a href="#case-studies" className="block px-3 py-2 text-slate-300 hover:text-amber-500">Case Studies</a>
              <a href="#contact" className="block px-3 py-2 bg-amber-600 text-white rounded-md mx-3 text-center">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
