
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM21 11H3V15H21V11ZM21 17H3V21H21V17Z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-primary-800">خدماتكوا الطبية</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              عنّا
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              تواصل معنا
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-right text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-right text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              >
                عنّا
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-right text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-right text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              >
                تواصل معنا
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
