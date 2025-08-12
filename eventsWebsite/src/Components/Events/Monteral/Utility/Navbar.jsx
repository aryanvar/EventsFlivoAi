import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../../../../assets/Backgrounds/FlivoaiLogo.png';

const Navbar = ({ 
  navigationItems = ['Home', 'Speakers', 'Agenda', 'FAQ'], 
  activeItem, 
  className = ''
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`w-full mb-8 ${className}`}>
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Flivo.ai Logo" className="w-[160px] sm:w-[200px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2 lg:gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              <li key={item}>
                <Link
                  to={`/montreal/${item.toLowerCase()}`}
                  className={`block rounded-full px-3 py-2 text-base font-semibold transition-colors duration-300 lg:px-4 lg:text-lg xl:text-xl ${
                    activeItem === item
                      ? 'bg-slate-50 text-gray-800'
                      : 'text-slate-50 hover:bg-white/10'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-slate-50 hover:bg-white/10 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item}>
                <Link
                  to={`/montreal/${item.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className={`block rounded-lg px-4 py-3 text-lg font-semibold transition-colors duration-300 ${
                    activeItem === item
                      ? 'bg-slate-50 text-gray-800'
                      : 'text-slate-50 hover:bg-white/10'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Backdrop (Optional) */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;